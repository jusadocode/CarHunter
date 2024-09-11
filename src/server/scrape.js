const playwright = require("playwright");
const cheerio = require("cheerio");
const fs = require("fs");

console.log("starting..");
console.time("Execution Time");

(async () => {
  const browser = await playwright.firefox.launch(); // You can also use `firefox` or `webkit`
  const context = await browser.newContext();
  const page = await context.newPage();

  const totalPages = 30;
  const minDelay = 2000;
  const maxDelay = 3500;
  const allCars = [];

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    const url = `https://autoplius.lt/skelbimai/naudoti-automobiliai?qt=&page_nr=${pageNumber}`;

    try {
      console.log(`Scraping page ${pageNumber}...`);

      await page.goto(url, {
        waitUntil: "networkidle",
        timeout: 30000, // Increase the timeout if needed
      });

      const pageHTML = await page.content();
      const cars = scrapeSiteForCars(pageHTML);
      console.log(pageHTML);

      if (cars.length === 0) {
        console.log(`No cars found on page ${pageNumber}.`);
      }

      allCars.push(...cars); // Accumulate car data from each page
      console.log(`Finished scraping page ${pageNumber}`);

      // Random delay between pages
      const delay = getRandomDelay(minDelay, maxDelay);
      console.log(`Waiting for ${delay / 1000} seconds before next page...`);
      await page.waitForTimeout(delay);
    } catch (error) {
      console.error(`Error scraping page ${pageNumber}: ${error.message}`);
    }
  }

  // Write all car data to a JSON file
  fs.writeFile("cars.json", JSON.stringify(allCars, null, 2), (err) => {
    if (err) throw err;
    console.log("All data has been written to file");
  });

  await browser.close();
  console.timeEnd("Execution Time");
})();

const scrapeSiteForCars = (html) => {
  const cars = [];
  const $ = cheerio.load(html);

  $(".announcement-item", html).each((index, element) => {
    const url = $(element).attr("href");

    let image = $(element)
      .children(".announcement-content")
      .find("img")
      .attr("data-src");
    if (!image) image = $(element).find("img").attr("src");

    const stars = $(element)
      .find(".announcement-badge.badge-rise")
      .text()
      .trim();
    const title = $(element).find(".announcement-title").text().trim();
    const price = $(element)
      .find(".announcement-pricing-info")
      .children("strong")
      .text()
      .trim();

    const parameters = $(element)
      .find(".announcement-parameters")
      .children("span");

    let trimmedParams = [];
    parameters.each((index, elem) => {
      const value = $(elem).text().trim();
      trimmedParams.push(value);
    });

    const car = {
      title: title,
      price: price,
      url: url,
      stars: stars,
      image: image,
      date: trimmedParams[0],
      fuelType: trimmedParams[2],
      bodyType: trimmedParams[1],
      gearBox: trimmedParams[3],
      power: trimmedParams[4],
      mileage: trimmedParams[5],
      city: trimmedParams[6],
    };

    cars.push(car);
  });

  return cars;
};

// Function to generate a random delay between minDelay and maxDelay
const getRandomDelay = (minDelay, maxDelay) => {
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
};

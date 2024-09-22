import playwright from "playwright";
import { scrapeSiteForCars } from "../src/helperTools/Autoplius_scraper.js";
import { saveAutopliusCars } from "../src/services/carService.js";

console.log("starting autoplius scraping..");
console.time("Execution Time");

(async () => {
  const browser = await playwright.firefox.launch(); // You can also use `firefox` or `webkit`
  const context = await browser.newContext();
  const page = await context.newPage();

  const totalPages = 20;
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

  await saveAutopliusCars(allCars);

  await browser.close();
  console.timeEnd("Execution Time");
})();

// Function to generate a random delay between minDelay and maxDelay
const getRandomDelay = (minDelay, maxDelay) => {
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
};

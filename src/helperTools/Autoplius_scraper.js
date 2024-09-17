import cheerio from "cheerio";
import ScrapingAntClient from "@scrapingant/scrapingant-client";
import testHtml from "./aplus_structure";

const AutopliusScraper = async (vehicle) => {
  let headline = "Automobilių nerasta";

  const client = new ScrapingAntClient({
    apiKey: import.meta.env.VITE_APP_SCRAPINGANT_API,
  });

  const generateUrl = (vehicle) => {
    const params = [
      vehicle.offerTypes.length > 1
        ? ""
        : `offer_type=${vehicle.offerTypes[0].id}`,
      vehicle.make.name ? `make_id=${vehicle.make.id}` : "",
      vehicle.model.name ? `model_id=${vehicle.model.id}` : "",
      vehicle.yearFrom ? `make_date_from=${vehicle.yearFrom}` : "",
      vehicle.yearTo ? `make_date_to=${vehicle.yearTo}` : "",
      vehicle.priceFrom ? `sell_price_from=${vehicle.priceFrom}` : "",
      vehicle.priceTo ? `sell_price_to=${vehicle.priceTo}` : "",
      ...vehicle.bodyTypes.map(
        (element) => `body_type_id%5B${element.id}%5D=${element.id}`
      ),
      ...vehicle.fuelTypes.map(
        (element) => `fuel_id%5B${element.id}%5D=${element.id}`
      ),
      `qt=${vehicle.textField}`,
    ];

    return `https://autoplius.lt/skelbimai/naudoti-automobiliai?${params
      .filter(Boolean)
      .join("&")}`;
  };

  const url = generateUrl(vehicle);
  console.log(url);

  const scrape = async () => {
    const startTime = Date.now();

    let cars = [];

    try {
      cars = scrapeSiteForCars(testHtml);
    } catch (error) {
      console.error("Error during scraping:", error);
    } finally {
      const endTime = Date.now();
      const duration = Math.floor((endTime - startTime) / 1000); // Convert milliseconds to seconds
      return {
        carList: cars,
        requestTime: duration,
      };
    }
  };

  const result = scrape();

  return result;
};

const scrapeSiteForCars = (html) => {
  const cars = [];
  const $ = cheerio.load(html);

  $(".search-list-title").each((index, element) => {
    const searchTitle = $(element).find("h1 .js-search-title").text().trim();
    const resultCount = $(element).find("h1 .result-count").text();
    headline = `${searchTitle} : ${resultCount}`;
  });

  $(".announcement-item").each((index, element) => {
    const url = $(element).attr("href");
    let image = $(element).find(".announcement-content img").attr("data-src");
    if (!image)
      image = $(element).find(".announcement-content img").attr("src");

    const stars = $(element)
      .find(".announcement-badge.badge-rise")
      .text()
      .trim();
    const title = $(element).find(".announcement-title").text().trim();
    const price = $(element)
      .find(".announcement-pricing-info strong")
      .text()
      .trim();

    const parameters = $(element)
      .find(".announcement-parameters span")
      .map((_, elem) => $(elem).text().trim())
      .get();

    const car = {
      title,
      price,
      url,
      stars,
      image,
      date: parameters[0],
      fuelType: parameters[2],
      bodyType: parameters[1],
      gearBox: parameters[3],
      power: parameters[4],
      mileage: parameters[5],
      city: parameters[6],
    };

    cars.push(car);
  });

  return cars;
};

export { AutopliusScraper, scrapeSiteForCars };

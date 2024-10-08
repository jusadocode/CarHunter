import cheerio from "cheerio";
import ScrapingAntClient from "@scrapingant/scrapingant-client";

const AutogidasScraper = async (vehicle) => {
  const client = new ScrapingAntClient({
    apiKey: import.meta.env.VITE_APP_SCRAPINGANT_API,
  });

  const scrapeSiteForCars = (html) => {
    const cars = [];
    const $ = cheerio.load(html);

    $(".article-item").each((_, element) => {
      const $element = $(element);
      const url = `https://autogidas.lt${$element.children("a").attr("href")}`;

      let image =
        $element.find("img").attr("data-src") ||
        $element.find("img").attr("src");
      if (image && !image.startsWith("http")) {
        image = `https:${image}`; // Handle protocol-less URLs
      }

      const car = {
        title: $element.find(".item-title").text().trim(),
        price: $element.find(".item-price").text().trim(),
        url,
        stars: $element.find(".up").text().trim(),
        image,
        date: $element.find(".icon.param-year b").text().trim(),
        fuelType: $element.find(".icon.param-fuel-type b").text().trim(),
        gearBox: $element.find(".icon.param-gearbox b").text().trim(),
        power: $element.find(".icon.param-engine b").text().trim(),
        mileage: $element.find(".icon.param-mileage b").text().trim(),
        bodyType: $element.find(".icon.param-body b").text().trim(),
        city: $element.find(".icon.param-location b").text().trim(),
      };

      if (car.title) {
        cars.push(car);
      }
    });

    return cars;
  };

  const generateUrl = (vehicle) => {
    const params = [
      vehicle.offerTypes.length > 1
        ? ""
        : `f_434%5B%5D=${vehicle.offerTypes[0].name}`,
      `f_1%5B0%5D=${vehicle.make.name || ""}`,
      `f_model_14%5B0%5D=${vehicle.model.name || ""}`,
      `f_215=${vehicle.priceFrom || ""}`,
      `f_216=${vehicle.priceTo || ""}`,
      `f_41=${vehicle.yearFrom || ""}`,
      `f_42=${vehicle.yearTo || ""}`,
      ...vehicle.bodyTypes.map(
        (element, index) => `f_3%5B${index}%5D=${element.name}`
      ),
      ...vehicle.fuelTypes.map(
        (element, index) => `f_2%5B${index}%5D=${element.name}`
      ),
      `f_376=${vehicle.textField || ""}`,
    ]
      .filter(Boolean)
      .join("&");

    return `https://autogidas.lt/skelbimai/automobiliai/?${params}`;
  };

  const scrape = async (url) => {
    const startTime = Date.now(); // Start the timer
    let cars = [];

    try {
      const response = await client.scrape(url, {
        proxy_country: "PL", // Use Poland as proxy country
        wait_for_selector: ".article-item",
        proxy_type: "residential",
      });

      cars = scrapeSiteForCars(response.content);
    } catch (error) {
      console.error("Error during scraping:", error);
    } finally {
      const endTime = Date.now(); // End the timer
      const duration = Math.floor((endTime - startTime) / 1000); // Calculate the time in seconds

      return {
        carList: cars,
        requestTime: duration,
      };
    }
  };

  const url = generateUrl(vehicle);
  console.log(url);

  const result = scrape(url);

  return result;
};

export default AutogidasScraper;

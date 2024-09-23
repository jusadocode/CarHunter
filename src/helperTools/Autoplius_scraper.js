import cheerio from "cheerio";

const AutopliusScraper = async (vehicle) => {
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

  const result = scrape(url);

  return result;
};

const scrapeSiteForCars = (html) => {
  const cars = [];
  const $ = cheerio.load(html);

  $(".announcement-item").each((index, element) => {
    const url = $(element).attr("href") || "";

    let image =
      $(element).find(".announcement-content img").attr("data-src") ||
      $(element).find(".announcement-content img").attr("src") ||
      "";

    const stars =
      $(element).find(".announcement-badge.badge-rise").text().trim() || "";

    const title = $(element).find(".announcement-title").text().trim() || "";

    const price =
      $(element).find(".announcement-pricing-info strong").text().trim() || "";

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
      date: parameters[0] || "",
      bodyType: parameters[1] || "",
      fuelType: parameters[2] || "",
      gearBox: parameters[3] || "",
      power_info: parameters[4] || "",
      mileage: parameters[5] || "",
      city: parameters[6] || "",
    };

    cars.push(car);
  });

  return cars;
};

export { AutopliusScraper, scrapeSiteForCars };

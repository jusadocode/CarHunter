import * as fs from "node:fs/promises";
import axios from "axios";
import https from "https";

const BASE_URL = "https://localhost:7224"; // Using this for the script which isn't run via vite instance

const getAllAutopliusCars = async () => {
  const startTime = Date.now();
  try {
    const response = await axios.get(`api/AutopliusCars`);
    const responseTime = Date.now() - startTime;

    return {
      cars: response.data.slice(0, 20),
      responseTime,
    };
  } catch (error) {
    console.error("Error fetching cars:", error);
    return { cars: [], responseTime: Date.now() - startTime };
  }
};

const getAllAutogidasCars = async () => {
  const startTime = Date.now();
  try {
    const response = await axios.get(`api/AutogidasCars`);
    const responseTime = Date.now() - startTime;
    return {
      cars: response.data.slice(0, 20),
      responseTime,
    };
  } catch (error) {
    console.error("Error fetching cars:", error);
    return { cars: [], responseTime: Date.now() - startTime };
  }
};

const saveAutopliusCars = async (cars) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/AutopliusCars`, cars, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 15000,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  } catch (error) {
    console.error("Error saving cars:", error);
    saveCarsToFile(cars, "autoplius-cars.json");
  }
};

const saveAutogidasCars = async (cars) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/AutogidasCars`, cars, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 15000,
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  } catch (error) {
    console.error("Error saving cars:", error);
    saveCarsToFile(cars, "autogidas-cars.json");
  }
};

const readCarsFromFile = async (fileName) => {
  try {
    const fileContent = await fs.readFile(fileName, "utf-8");
    const cars = JSON.parse(fileContent);
    return cars;
  } catch (error) {
    console.error("Error reading cars from file:", error);
    return null;
  }
};

const readFromFileAndPostToDatabase = async (fileName) => {
  const cars = await readCarsFromFile(fileName);
  if (cars) {
    await saveAutopliusCars(cars); // Post the data to the database API
  } else {
    console.error("No cars to post. Could not read the file.");
  }
};

const saveCarsToFile = async (cars, filePath) => {
  try {
    // Convert cars object/array to JSON string format
    const data = JSON.stringify(cars, null, 2); // null and 2 used to prettify JSON

    // Write the data to a file
    await fs.writeFile(filePath, data);

    console.log(`Cars successfully saved to ${filePath}`);
  } catch (error) {
    console.error("Error writing cars to file:", error);
  }
};

export {
  getAllAutogidasCars,
  getAllAutopliusCars,
  saveAutopliusCars,
  saveAutogidasCars,
  saveCarsToFile,
};

import * as fs from "node:fs/promises";
import axios from "axios";
import https from "https";

const BASE_URL = "https://localhost:7224";

const getAllAutopliusCars = async () => {
  try {
    const response = await axios.get(`api/AutopliusCars`);
    return response.data.slice(0, 20);
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
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
    console.log(response.data);
  } catch (error) {
    console.error("Error saving cars:", error);
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
    console.log(response.data);
  } catch (error) {
    console.error("Error saving cars:", error);
  }
};

const saveAutopliusCarsFromFile = async (filePath) => {
  try {
    // Read the JSON file
    const data = await fs.readFile(filePath, "utf-8");
    const cars = JSON.parse(data); // Parse the JSON string into an object/array

    const response = await axios.post(`${BASE_URL}/api/AutopliusCars`, cars, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error saving cars:", error);
    return [];
  }
};

const getAllAutogidasCars = async () => {
  try {
    const response = await axios.get(`api/AutogidasCars`);
    return response.data.slice(0, 20);
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

export {
  getAllAutogidasCars,
  getAllAutopliusCars,
  saveAutopliusCars,
  saveAutogidasCars,
  saveAutopliusCarsFromFile,
};

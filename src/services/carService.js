const getAllCars = async () => {
  try {
    const response = await fetch("/api/Cars");
    console.log(response);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const cars = await response.json();
    return cars.slice(0, 20);
  } catch (error) {
    console.error("Error fetching cars:", error);
    return [];
  }
};

export { getAllCars };

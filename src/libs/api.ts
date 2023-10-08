export const baseUrl = process.env.API_BASE_URL;

export async function getAllCars() {
  const response = await fetch(`${baseUrl}/car/search`);
  console.log(response);
  return response.json();
}

export async function getCarById(carId: string) {
  const response = await fetch(`${baseUrl}/car/${carId}`);
  return response.json();
}

export async function getCarMedia(carId: string) {
  const response = await fetch(`${baseUrl}/car_media?carId=${carId}`);
  return response.json();
}

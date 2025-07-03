import axios from "axios";

const KEY = "50df7764251520c1a0cf9fc3a9844c88";

export const fetchWeather = async (cityName) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

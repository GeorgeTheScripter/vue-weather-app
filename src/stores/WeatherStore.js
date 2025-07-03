import { defineStore } from "pinia";
import { fetchData } from "../utils/api";
import { getLocalTime } from "../utils/helpers";

export const useWeatherStore = defineStore("weatherStore", {
  state: () => ({
    isLoading: false,
    weather: null,
    error: null,
    favorites: [],
  }),

  getters: {
    weatherinfo() {
      if (!this.weather) return null;
      console.log(this.weather.name);
      return {
        id: this.weather.id,
        city: this.weather.name,
        country: this.weather.sys.country,
        temp: Math.ceil(this.weather.main.temp - 273.15),
        feelsLike: Math.ceil(this.weather.main.feels_like - 273.15),
        humidity: this.weather.main.humidity,
        pressure: this.weather.main.pressure,
        description: this.weather.weather[0].description,
        icon: this.weather.weather[0]?.icon,
        time: getLocalTime(this.weather.timezone),
        wind: this.weather.wind.speed,
      };
    },
  },

  actions: {
    async fetchWeather(city) {
      try {
        this.isLoading = true;
        this.weather = await fetchData(city);
        this.city = this.weather.name;
      } catch (error) {
        this.error = error.message || "Ошибка загрузки данных";
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    addToFavorites(city) {
      console.log(city);
      this.favorites.push(city);
    },
  },
});

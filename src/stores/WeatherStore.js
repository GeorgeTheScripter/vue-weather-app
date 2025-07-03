import { defineStore } from "pinia";
import { fetchWeather } from "../utils/api";
import { getLocalTime } from "../utils/helpers";

export const useWeatherStore = defineStore("weatherStore", {
  state: () => ({
    isLoading: false,
    weather: null,
    error: null,
  }),

  getters: {
    getInfo() {
      if (!this.weather) return {};

      return {
        temp: Math.ceil(this.weather.main.temp - 273.15),
        feelsLike: Math.ceil(this.weather.main.feels_like - 273.15),
        humidity: this.weather.main.humidity,
        pressure: this.weather.main.pressure,
        description: this.weather.weather[0].description,
        icon: this.weather.weather[0]?.icon,
        time: getLocalTime(this.weather.timezone),
      };
    },
  },

  actions: {
    async getWeather(city) {
      try {
        this.isLoading = true;
        this.weather = await fetchWeather(city);
        console.log(this.weather);
      } catch (error) {
        this.error = error.message || "Ошибка загрузки данных";
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});

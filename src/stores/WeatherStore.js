import { defineStore } from "pinia";
import { fetchData } from "../utils/api";
import { getLocalTime } from "../utils/helpers";

export const useWeatherStore = defineStore("weatherStore", {
  state: () => ({
    city: null,
    favorites: [],
    isLoading: false,
    error: null,
  }),

  getters: {
    cityWeather() {
      if (!this.city) return {};
      return {
        id: this.city.id,
        name: this.city.name,
        country: this.city.sys.country,
        time: getLocalTime(this.city.timezone),
        description: this.city.weather[0].description,
        temp: Math.ceil(this.city.main.temp - 273.15),
        feel: Math.ceil(this.city.main.feels_like - 273.15),
        wind: Math.ceil(this.city.wind.speed),
        humidity: this.city.main.humidity,
        pressure: this.city.main.pressure,
      };
    },
  },

  actions: {
    async fetchWeather(cityName) {
      try {
        this.isLoading = true;
        this.city = await fetchData(cityName);
      } catch (error) {
        this.error = error.message || "error";
      } finally {
        this.isLoading = false;
      }
    },

    addFavorite(city) {
      if (!this.favorites.some((item) => item.id === city.id)) {
        this.favorites.push({ ...city, isFavorite: true });
      } else {
        alert("Город уже добавлен");
      }
    },

    removeFavorite(id) {
      this.favorites = this.favorites.filter((city) => city.id !== id);
    },
  },
});

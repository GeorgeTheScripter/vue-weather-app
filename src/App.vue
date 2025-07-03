<template>
  <div>
    <Form @update="handleSubmit" />

    <MainCityCard :weatherStore="weatherStore" :title="title" />
  </div>
</template>

<script>
import { useWeatherStore } from "./stores/WeatherStore.js";
import MainCityCard from "./components/MainCityCard.vue";
import Form from "./components/Form.vue";

export default {
  components: {
    MainCityCard,
    Form,
  },
  data() {
    return {
      title: "",
      weatherStore: useWeatherStore(),
    };
  },
  methods: {
    handleSubmit(cityName) {
      if (!cityName.trim()) return;
      this.weatherStore.getWeather(cityName);
      this.title = cityName;
    },
  },
};
</script>

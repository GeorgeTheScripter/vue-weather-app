<template>
  <div class="py-[20px] px-[16px]">
    <div class="flex flex-col gap-[24px]">
      <Form @update="handleSubmit" />
      <div v-if="!weatherStore.weather">Нет инфы</div>
      <MainCityCard v-else :info="weatherStore.weatherinfo" />
    </div>

    <div v-if="weatherStore.favorites.length > 0" class="mt-10">
      <h3 class="text-[32px] font-medium text-sky-600">Сохраненные</h3>

      <MainCityCard
        v-for="city in weatherStore.favorites"
        :key="city.id"
        :info="city"
      />
    </div>
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
      weatherStore: useWeatherStore(),
    };
  },
  methods: {
    handleSubmit(cityName) {
      if (!cityName.trim()) return;
      this.weatherStore.fetchWeather(cityName);
      this.title = cityName;
    },
  },
};
</script>

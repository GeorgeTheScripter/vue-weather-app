<template>
  <div class="py-[20px]">
    <div class="max-w-xl mx-auto flex flex-col gap-2">
      <form @submit.prevent="handleWeather" class="flex gap-1 w-full px-[12px]">
        <input
          class="border border-sky-700 rounded-[12px] p-[12px] w-full"
          v-model="cityName"
          type="text"
        />
        <button class="bg-sky-700 p-[12px] rounded-[12px] text-white">
          <img src="./assets/icons/search.svg" alt="" />
        </button>
      </form>

      <div class="px-[12px]">
        <WeatherCard v-if="weatherStore.city" :city="city" />
      </div>

      <WeatherFavoriteList />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useWeatherStore } from "./stores/weatherStore";
import WeatherCard from "./components/WeatherCard.vue";
import WeatherFavoriteList from "./components/WeatherFavoriteList.vue";

const cityName = ref("");
const weatherStore = useWeatherStore();
const city = computed(() => weatherStore.cityWeather);

const handleWeather = async () => {
  await weatherStore.fetchWeather(cityName.value.trim());
  cityName.value = "";
};
</script>

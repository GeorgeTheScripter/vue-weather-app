<template>
  <div
    v-if="weatherStore.favorites.length > 0"
    class="flex flex-col gap-[12px]"
  >
    <div class="flex justify-between items-center text-[32px]/[100%] px-[12px]">
      <h2 class="my-[20px]">Избранные города</h2>
      <p v-if="weatherStore.favorites.length > 1">
        {{ weatherStore.favorites.length }}
      </p>
    </div>

    <div class="flex gap-[12px] overflow-x-scroll px-[12px]">
      <WeatherCard
        v-for="city in weatherStore.favorites"
        :store="weatherStore"
        :city="city"
        :key="city.id"
      />
    </div>
  </div>
</template>

<script setup>
import WeatherCard from "./WeatherCard.vue";
import { useWeatherStore } from "../stores/weatherStore";

const weatherStore = useWeatherStore();
</script>

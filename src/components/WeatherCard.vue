<template>
  <div
    class="bg-sky-700 flex flex-col gap-[24px] p-[20px] rounded-[12px] text-white"
  >
    <div class="flex w-full justify-between">
      <p class="text-sky-700 px-[12px] bg-white rounded-[4px]">
        {{ city.country }}
      </p>
      <p>{{ city.time }}</p>
    </div>

    <div class="flex justify-between">
      <div class="flex gap-[12px]">
        <img src="./assets/icons/feel.svg" alt="" />

        <div class="flex flex-col gap-[4px]">
          <h2 class="text-[32px]/[100%]">{{ city.name }}</h2>
          <p class="text-[20px]/[100%]">{{ city.description }}</p>
        </div>
      </div>

      <p class="text-[56px]/[100%]">{{ city.temp }} C</p>
    </div>

    <div class="flex gap-1">
      <div
        class="w-full flex flex-col items-center bg-blue-800 px-[8px] py-[12px] gap-[4px] rounded-[6px]"
        v-for="item in cityItems"
        :key="item.value"
      >
        <img :src="item.icon" alt="" />
        <p>{{ item.value }} {{ item.unit }}</p>
        <p>{{ item.title }}</p>
      </div>
    </div>

    <button
      v-if="!city.isFavorite"
      @click="weatherStore.addFavorite(city)"
      class="cursor-pointer text-sky-700 bg-white py-[12px] rounded-[6px]"
    >
      Добавить в избранное
    </button>
    <button
      v-else
      @click="weatherStore.removeFavorite(city.id)"
      class="cursor-pointer text-sky-700 bg-white py-[12px] rounded-[6px]"
    >
      Удалить
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useWeatherStore } from "../stores/weatherStore";
import feelIcon from "@/assets/icons/feel.svg";
import humidityIcon from "@/assets/icons/humidity.svg";
import pressureIcon from "@/assets/icons/pressure.svg";
import windIcon from "@/assets/icons/wind.svg";

const weatherStore = useWeatherStore();
const city = computed(() => weatherStore.cityWeather);

const cityItems = computed(() => [
  {
    value: city.feel,
    icon: feelIcon,
    unit: "C",
    title: "Ощущается",
  },
  {
    value: city.wind,
    icon: windIcon,
    unit: "м/с",
    title: "Ветер",
  },
  {
    value: city.humidity,
    icon: humidityIcon,
    unit: "%",
    title: "Влажность",
  },
  {
    value: city.pressure,
    icon: pressureIcon,
    unit: "Па",
    title: "Давление",
  },
]);
</script>

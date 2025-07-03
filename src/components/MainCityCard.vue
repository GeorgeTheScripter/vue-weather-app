<template>
  <div
    class="p-[20px] text-white bg-sky-600 flex flex-col gap-[24px] rounded-[12px]"
  >
    <div class="flex justify-between">
      <div
        class="bg-white py-[6px] px-[12px] text-sky-600 w-fit rounded-[8px] text-[12px]/[100%] font-medium"
      >
        {{ info.country }}
      </div>
      <p class="">{{ info.time }}</p>
    </div>

    <div class="flex justify-between">
      <div class="flex gap-[12px] items-center w-full">
        <img
          class="w-[60px]"
          :src="`https://openweathermap.org/img/wn/${info.icon}@2x.png`"
          alt="weather-icon"
        />
        <div class="w-full">
          <div class="flex justify-between w-full">
            <p class="text-[32px]/[100%]">{{ info.city }}</p>
            <p class="text-[32px]/[100%]">{{ info.temp }} °C</p>
          </div>
          <p>{{ info.description }}</p>
        </div>
      </div>
    </div>

    <div class="flex w-full gap-[6px]">
      <div
        v-for="item in weatherItems"
        :key="item.title"
        class="flex flex-col gap-[4px] items-center bg-sky-500 rounded-[8px] px-[8px] py-[12px] w-full"
      >
        <img class="w-[40px]" :src="item.icon" alt="" />
        <p class="text-[18px] font-semibold">
          {{ item.feelsLike }}{{ item.unit }}
        </p>
        <p class="text-[12px]">{{ item.title }}</p>
      </div>
    </div>

    <Button class="bg-white text-sky-600" @click="addTofavorite"
      >Сохранить город</Button
    >
  </div>
</template>

<script>
import { useWeatherStore } from "../stores/WeatherStore";
import feelIcon from "../assets/icons/feel.svg";
import humidityIcon from "../assets/icons/humidity.svg";
import pressureIcon from "../assets/icons/pressure.svg";
import windIcon from "../assets/icons/wind.svg";

export default {
  props: {
    info: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const weatherStore = useWeatherStore();

    const addTofavorite = () => {
      weatherStore.addToFavorites(props.info);
    };

    const weatherItems = [
      {
        title: "Ощущается",
        value: props.info.feelsLike,
        unit: "°C",
        icon: feelIcon,
      },
      {
        title: "Влажность",
        value: props.info.humidity,
        unit: "%",
        icon: humidityIcon,
      },
      {
        title: "Давление",
        value: props.info.pressure,
        unit: "Па",
        icon: pressureIcon,
      },
      {
        title: "Ветер",
        value: props.info.wind,
        unit: "м/с",
        icon: windIcon,
      },
    ];

    return {
      addTofavorite,
      weatherItems,
    };
  },
};
</script>

<template>
  <div>
    <h1>
      City name: <strong>{{ title }}</strong>
    </h1>
    <hr />
    <img
      :src="`https://openweathermap.org/img/wn/${weatherStore.getInfo.icon}@2x.png`"
      alt=""
    />
    <p>Time: {{ weatherStore.getInfo.time }}</p>
    <p>Description: {{ weatherStore.getInfo.description }}</p>
    <p>Temp: {{ weatherStore.getInfo.temp }} °C</p>
    <p>Feels like: {{ weatherStore.getInfo.feelsLike }} °C</p>
    <p>Humidity: {{ weatherStore.getInfo.humidity }} %</p>
    <p>Preasure: {{ weatherStore.getInfo.pressure }} mb</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: "Выберите город",
    },
    weatherStore: {
      type: Object,
      required: true,
    },
  },
};
</script>

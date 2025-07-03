<template>
  <form @submit.prevent="$emit('update', cityName)" class="flex gap-2">
    <Input v-model="cityName" />
    <Button>search</Button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cityName: "",
    };
  },
};
</script>

<template>
  <form @submit.prevent="handleUpdate" class="flex gap-2">
    <Input class="w-full" v-model="cityName" />
    <Button>Поиск</Button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      cityName: "",
    };
  },
  methods: {
    handleUpdate() {
      this.$emit("update", this.cityName);
      this.cityName = "";
    },
  },
};
</script>

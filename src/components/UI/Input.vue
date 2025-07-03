<template>
  <input
    type="text"
    :value="modelValue"
    @input="updateInput"
    class="px-4 py-2 outline-none border-1 border-solid border-sky-600 rounded-[12px]"
  />
</template>

<script>
export default {
  name: "Input",
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

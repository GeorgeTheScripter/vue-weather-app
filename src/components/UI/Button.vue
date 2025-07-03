<template>
  <button
    class="bg-blue-500 text-sky-50 rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600 transition ease-in-out"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

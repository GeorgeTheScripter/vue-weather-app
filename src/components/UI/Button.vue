<template>
  <button
    class="bg-sky-600 text-sky-50 rounded-[12px] text-[16px] px-4 py-2 cursor-pointer hover:bg-sky-700 transition ease-in-out"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

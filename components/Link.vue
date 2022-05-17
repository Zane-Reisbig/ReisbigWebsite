<template>
  <a class="custom-link" :href="to" target="_blank"><slot /></a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.custom-link {
  color: #466482;
}

.custom-link:hover {
  display: inline-block;
  margin: 0 10px;
  transition: all 0.2s ease-in-out;
  color: #638db8;
  transform: scale(1.1);
}

.custom-link:active {
  display: inline-block;
  margin: 0 5px;
  transition: all 0.2s ease-in-out;
  color: #697f95;
  transform: scale(1);
}
</style>
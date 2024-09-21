<template>
  <v-card class="category-card" elevation="0">
    <v-card-item>
      <div class="text-h5 font-weight-black mt-5">{{ categoryItem.name }}</div>
      <p class="shadow-text secondary-font font-weight-bold">{{ categoryItem.name }}</p>
      <v-btn
        :to="categoryItem.route"
        class="mt-10"
        rounded="lg"
        color="primary"
        variant="tonal"
      >
        View All
      </v-btn>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  categoryItem: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.category-card {
  height: 300px;
  width: 100%;
  padding: 20px 10px 20px 20px;
  // background: linear-gradient(rgb(255, 255, 255), rgba(222, 55, 0, 0.14) 130%);
  border: 1px solid #c3c3c343;
  border-radius: 26px;
  background-color: #f3f3f3bc;
  overflow: hidden;
  .text-h5 {
  }
}

.shadow-text {
  opacity: 0.3;
  color: #fff;
  font-size: 62px;
  text-shadow: 0px 0px 2px #000;
  font-weight: 700;
  white-space: nowrap;
  position: relative;
  left: 35px;
}
</style>

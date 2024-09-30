<template>
  <v-card class="feature-card">
    <v-card-item class="text-center mt-3">
      <v-img :src="'data:image/png;base64,' + company.logo" max-height="45"></v-img>
      <div class="comapny-info mt-5">
        <div class="text-subtitle-1 font-weight-bold">{{ company.name }}</div>
        <div class="text-subtitle-2 text-grey-darken-2 mt-2 font-weight-regular">
          {{ company.total_post }} Job post available
        </div>
      </div>
      <div class="text-subtitle-2 font-weight-regular mt-5">
        {{ company.tagline }}
      </div>
      <v-btn
        class="mt-8"
        :to="company.route"
        variant="tonal"
        color="primary"
        size="small"
        @click="$router.push(`/overview/${company.id}`)"
      >
        View Jobs
      </v-btn>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  company: {
    type: Object,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.feature-card {
  height: 360px;
  width: 100%;
  border-radius: 22px;
  border: 1px solid #c3c3c351;
  padding: 10px;
  box-shadow: rgba(149, 157, 165, 0.093) 0px 8px 24px;
  &:hover {
    box-shadow: 0px 14px 40px rgba(30, 10, 58, 0.1);
  }
}
.comapny-info {
  padding: 20px;
  background-color: rgb(129 155 145 / 9%);
  border-radius: 8px;
  height: 110px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>

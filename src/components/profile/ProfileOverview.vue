<script setup>
import { defineProps } from "vue";
const props = defineProps({
  companyItem: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="profile-overview">
    <v-container max-width="1100">
      <div class="profile-content d-flex">
        <div class="profile-img">
          <v-img
            :src="'data:image/png;base64,' + companyItem.logo"
            height="150"
            width="150"
            rounded="lg"
          >
          </v-img>
        </div>
        <div class="pt-10 ml-5 w-100">
          <div class="text-h5 font-weight-bold mt-5">{{ companyItem.name }}</div>
          <div class="text-subtitle-1 text-color font-weight-medium mt-1">
            {{ companyItem.tagline }}
          </div>
          <p class="text-color mt-2" style="font-size: 14px; line-height: 20px">
            {{ companyItem.description }}
          </p>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.profile-overview {
  width: 100%;
  background-color: #fff;
  position: relative;
  margin-top: -100px;
  z-index: 2;
  border-top-left-radius: 45px;
  border-top-right-radius: 45px;
}
.profile-content {
  margin-top: -60px;
}
.profile-img {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 16px;
  overflow: hidden;
  padding: 10px;
  max-height: 150px;
}
</style>

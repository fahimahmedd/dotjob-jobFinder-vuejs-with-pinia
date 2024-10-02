<template>
  <div class="page-top">
    <v-container>
      <JobSearch />
    </v-container>
  </div>
</template>

<script setup>
import JobSearch from "./JobSearch.vue";
</script>

<style lang="scss" scoped>
.page-top {
  background-image: url(../../assets/images/hero/hero-bg.png);
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 70px 0 20px 0;
  position: relative;
}
</style>

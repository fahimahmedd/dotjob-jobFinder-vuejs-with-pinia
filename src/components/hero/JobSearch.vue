<template>
  <div class="hero-search-container mx-auto mt-10 mb-10">
    <v-text-field
      placeholder="Search by keyword"
      hide-details
      density="compact"
      variant="plain"
      class="hero-search-input"
    ></v-text-field>
    <v-btn class="hero-search-btn" color="primary" size="large"> Search</v-btn>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero-search-container {
  max-width: 750px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.hero-search-input {
  height: 60px;
  background-color: #fff;
  padding: 10px 30px;
  border-radius: 35px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.hero-search-btn {
  width: 170px;
  height: 58px;
  border-radius: 35px !important;
}
</style>

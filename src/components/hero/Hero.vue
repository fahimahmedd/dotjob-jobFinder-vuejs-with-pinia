<template>
  <div class="hero" style="background-image: url('src/assets/images/hero/hero-bg.png')">
    <v-container class="d-flex justify-center align-center">
      <v-card
        width="100%"
        height="100%"
        class="text-center"
        elevation="0"
        color="transparent"
      >
        <div class="hero-title font-weight-black secondary-font">
          Find your job without <br />
          any hassle.
        </div>
        <div class="hero-search-container mx-auto mt-10 mb-10">
          <v-text-field
            placeholder="Search by keyword"
            hide-details
            density="compact"
            variant="plain"
            class="hero-search-input"
          ></v-text-field>
          <v-btn class="hero-search-btn" color="primary" size="large"> Search Job </v-btn>
        </div>
        <div class="text-subtitle-1 font-weight-regular text-grey-darken-4">
          Unlock your true ptential and discover a world of opportunities <br />
          that align with your skills , interests and aspiration.
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.hero {
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 150px;
  height: 100vh;
  max-height: 800px;
}
.hero-title {
  font-size: 80px;
  line-height: 92px;
}

.hero-search-container {
  max-width: 700px;
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
  width: 180px;
  height: 60px;
  border-radius: 35px !important;
}
.text-subtitle-1 {
  line-height: 26px;
}
</style>

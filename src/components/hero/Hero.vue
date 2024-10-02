<template>
  <div class="hero">
    <v-container class="d-flex justify-center align-center">
      <v-card
        width="100%"
        height="100%"
        class="hero-content text-center"
        elevation="0"
        color="transparent"
        z-index="2"
      >
        <div class="hero-title font-weight-black secondary-font">
          Find your job without <br />
          any hassle.
        </div>
        <JobSearch />
        <div class="text-subtitle-1 font-weight-regular text-grey-darken-4">
          Unlock your true ptential and discover a world of opportunities <br />
          that align with your skills , interests and aspiration.
        </div>
      </v-card>
    </v-container>
    <div class="hero-floating-container">
      <div class="floating-item floating-item-1">
        <v-img class="float-img" src="../../assets/images/hero/floating-2.jpeg"></v-img>
      </div>
      <div class="floating-item floating-item-2">
        <v-img class="float-img" src="../../assets/images/hero/floating-1.png"></v-img>
      </div>
      <div class="floating-item-outline floating-item-3"></div>
      <div class="floating-item-outline floating-item-4"></div>
      <div class="floating-item floating-item-5">
        <v-img class="float-img" src="../../assets/images/hero/floating-3.png"></v-img>
      </div>
      <div class="floating-item floating-item-6">
        <v-img class="float-img" src="../../assets/images/hero/floating-4.png"></v-img>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.hero {
  background-image: url(../../assets/images/hero/hero-bg.png);
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 150px;
  height: 100vh;
  max-height: 800px;
  position: relative;
}
.hero-title {
  font-size: 80px;
  line-height: 92px;
  color: #244034;
}

.text-subtitle-1 {
  line-height: 26px;
}

.floating-item {
  position: absolute;
  height: 80px;
  width: 80px;
  background-color: #fff;
  border-radius: 16px;
  opacity: 0.4;
  display: flex;
  justify-content: center;
  align-items: center;
  .float-img {
    filter: grayscale(100%);
    max-height: 70px;
    max-width: 70px;
    object-fit: contain;
  }
}
.floating-item-outline {
  position: absolute;
  height: 70px;
  width: 70px;
  border-radius: 16px;
  opacity: 0.5;
  border: 5px solid #fff;
  transform: rotate(-25deg);
}
.floating-item-1 {
  top: 20%;
  left: 10%;
}
.floating-item-2 {
  top: 20%;
  right: 10%;
}
.floating-item-3 {
  top: 40%;
  left: 20%;
}
.floating-item-4 {
  top: 40%;
  right: 20%;
}
.floating-item-5 {
  bottom: 30%;
  left: 5%;
}
.floating-item-6 {
  bottom: 30%;
  right: 5%;
}
.hero-content {
  z-index: 10;
}

@media (min-width: 280px) and (max-width: 960.98px) {
  .hero {
    padding-top: 120px;
    padding-bottom: 60px;
    height: auto;
    max-height: auto;
  }
  .hero-title {
    font-size: 60px;
    line-height: 66px;
  }
  .floating-item {
    height: 60px;
    width: 60px;
    .float-img {
      max-height: 50px;
      max-width: 50px;
    }
  }
  .hero-search-container {
    max-width: 750px;
    width: 100%;
    gap: 5px;
  }
  .text-subtitle-1 {
    font-size: 14px !important;
  }
  .text-subtitle-1 br {
    display: none;
  }
}
</style>

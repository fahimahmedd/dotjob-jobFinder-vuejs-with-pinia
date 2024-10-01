<template>
  <div class="add-job">
    <v-container>
      <div class="text-h2 secondary-font font-weight-black">
        Post Your Jobs, <br />
        Find Talent – Instantly!
      </div>
      <div class="text-subtitle-1 mt-2">
        Our platform is designed to help you connect with the right candidates efficiently
        and effectively.
      </div>

      <div class="guide-container">
        <div class="d-none d-md-flex">
          <v-img src="../../assets/images/feature/shape-line.svg" width="100"></v-img>
        </div>
        <div class="guide-content">
          <div class="guide-number">
            <span class="secondary-font"> 01 </span>
          </div>
          <p class="text-center mt-5">
            Start your journey by creating an account with just a few steps.
          </p>
        </div>
        <div class="screen-margin">
          <v-img src="../../assets/images/feature/shape-bow.svg" width="170"></v-img>
        </div>
        <div class="guide-content">
          <div class="guide-number">
            <span class="secondary-font"> 02 </span>
          </div>
          <p class="text-center mt-5">
            Craft a profile to showcase your company’s culture, values, and mission.
          </p>
        </div>
        <div class="screen-margin">
          <v-img src="../../assets/images/feature/shape-bow.svg" width="170"></v-img>
        </div>
        <div class="guide-content">
          <div class="guide-number">
            <span class="secondary-font"> 03 </span>
          </div>
          <p class="text-center mt-5">
            Your are ready to find the perfect candidate. Post your job!
          </p>
        </div>
        <div class="d-none d-md-flex">
          <v-img src="../../assets/images/feature/shape-line.svg" width="100"></v-img>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.add-job {
  background-color: #f2f9d8;
  padding: 80px 0;
}
.text-h2 {
  color: #244034;
}
.guide-container {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: auto;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  max-width: 1050px;
  margin: 100px auto 0;

  .guide-content {
    flex-direction: column;
    align-items: center;
    display: flex;
    .guide-number {
      background-color: #5d8d7933;
      border-radius: 8px 28px;
      justify-content: center;
      align-items: center;
      width: 95px;
      height: 90px;
      display: flex;
      span {
        color: #244034;
        font-size: 38px;
        font-weight: 900;
        line-height: 40px;
      }
    }
  }
}

@media (min-width: 280px) and (max-width: 991.98px) {
  .guide-container {
    flex-direction: column;
  }
  .screen-margin {
    margin: 20px 0;
  }
  .text-h2 {
    font-size: 50px !important;
  }
}
@media (min-width: 600px) and (max-width: 960.98px) {
  .guide-container {
    flex-direction: row;
  }
  .screen-margin {
    display: none;
  }
}
</style>

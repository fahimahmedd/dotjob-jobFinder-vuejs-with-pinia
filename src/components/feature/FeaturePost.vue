<template>
  <v-container class="section-padding">
    <div class="text-h4 text-center secondary-font font-weight-bold">
      Featured companies actively hiring
    </div>
    <v-row class="mt-10">
      <v-col cols="3">
        <v-card class="feature-card">
          <v-card-item class="text-center">
            <v-img src="../../assets/images/hero/floating-1.png" max-height="70"></v-img>
            <div class="text-h6 mt-2 secondary-font">BJ IT</div>
            <div class="text-subtitle-1 mt-1 secondary-font font-weight-bold">
              Assistance Manager- IT
            </div>
            <p class="text-subtitle-2 font-weight-regular mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, nobis!
            </p>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="3"> Crad </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped>
.feature-card {
  height: 360px;
  width: 100%;
  border-radius: 22px;
  border: 1px solid #c3c3c351;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.125) 0px 7px 29px 0px;
  }
}
</style>

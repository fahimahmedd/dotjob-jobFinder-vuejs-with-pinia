<template>
  <v-container>
    <v-row class="mt-10 mb-10 justify-center">
      <v-col cols="6" lg="3" md="4" v-for="(item, index) in 4" :key="index">
        <v-skeleton-loader
          class="mx-auto"
          elevation="1"
          max-width="100%"
          type="card, article"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>

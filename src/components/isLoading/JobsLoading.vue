<template>
  <v-container>
    <v-row class="mt-10 mb-10 justify-center">
      <v-col cols="12" lg="4" md="6" sm="6" v-for="(item, index) in 3" :key="index">
        <v-skeleton-loader
          class="mx-auto"
          elevation="1"
          max-width="100%"
          type="card, article"
          boilerplate
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup></script>

<style lang="scss" scoped></style>

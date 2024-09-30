<script setup>
import { useJobsStore } from "@/stores/useJobs";
import DetailContent from "./DetailContent.vue";
const jobs = useJobsStore();
</script>

<template>
  <v-navigation-drawer
    v-model="jobs.drawer"
    location="right"
    temporary
    width="800"
    elevation="1"
    class="auth-drawer"
  >
    <v-btn
      class="drawer-close"
      icon="mdi-close"
      elevation="0"
      variant="tonal"
      color="primary"
      size="small"
      @click.stop="jobs.drawerHandeler"
    >
    </v-btn>
    <div class="job-detail-container">
      <DetailContent />
    </div>
    <div class="drawer-head"></div>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.v-navigation-drawer__scrim {
  opacity: 0.1;
  z-index: 9999999 !important;
}
.v-navigation-drawer {
  z-index: 99999999 !important;
  transform: none !important;
  right: -805px !important;
  transition: right 0.3s ease !important;
  position: fixed !important;
  height: 100vh !important;
  top: 0 !important;
  border-top-left-radius: 35px !important;
  border-bottom-left-radius: 35px !important;
  overflow: hidden;
}
.v-navigation-drawer--active {
  right: 0 !important;
}

.auth-drawer {
  position: relative;
}
.drawer-close {
  position: absolute;
  right: 20px;
  top: 10px;
  z-index: 2;
}
.drawer-container {
  height: 100%;
}
.drawer-head {
  height: 30px;
  width: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
}
</style>

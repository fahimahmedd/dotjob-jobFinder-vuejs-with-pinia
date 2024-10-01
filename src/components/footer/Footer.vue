<template>
  <v-footer class="footer">
    <v-container>
      <div class="footer-logo">
        <v-img max-height="70" src="../../assets/images/logo/logo.png"></v-img>
      </div>
      <div class="mt-10 text-h3 secondary-font font-weight-bold text-center">
        Unlock new career paths <br />
        & explore a wide range of job listings.
      </div>
    </v-container>
  </v-footer>

  <div class="footer-bottom">
    <v-container class="d-flex justify-space-between">
      <div class="text-subtitle-2 text-white">All rights reserved © Fahim Ahmed</div>
      <ul>
        <li><RouterLink to="/"> Home </RouterLink></li>
        <li><RouterLink to="/"> Jobs </RouterLink></li>
        <li><RouterLink to="/"> Add Jobs </RouterLink></li>
      </ul>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.text-h3 {
  line-height: 1.2;
}
.footer {
  padding: 100px 0 60px 0;
}

.footer-bottom {
  background-color: var(--primary-color);
  padding: 1px 0;
}
ul {
  li {
    display: inline-block;
    margin-left: 20px;
    list-style: none;
    a {
      text-decoration: none;
      font-size: 14px;
      color: #fff;
      font-weight: 500;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }
}

// BreakPoint
@media (min-width: 280px) and (max-width: 599.98px) {
  .text-h3 {
    font-size: 30px !important;
  }
}
</style>

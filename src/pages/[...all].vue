<template>
  <div class="section text-center">
    <h1 class="error">404</h1>
    <div class="page">Ooops!!! The page you are looking for is not found</div>
    <v-btn variant="tonal" color="primary" to="/"> Back To Home </v-btn>
  </div>
</template>

<style scoped>
.section {
  padding: 4rem 2rem;
}

.section .error {
  font-size: 150px;
  color: var(--primary-color);
}

.page {
  margin: 2rem 0;
  font-size: 20px;
  font-weight: 600;
  color: #444;
}

.back-home {
  display: inline-block;
  border: 2px solid #222;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.75rem 1rem 0.6rem;
  transition: all 0.2s linear;
  box-shadow: 0 15px 15px -11px rgba(0, 0, 0, 0.4);
  background: #222;
  border-radius: 6px;
}
.back-home:hover {
  background: #222;
  color: #ddd;
}
</style>

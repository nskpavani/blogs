<template>
  <div>
    <header class="top-bar">
      <span class="brand">Rewaio</span>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.brand {
  font-weight: 700;
  letter-spacing: 0.6px;
}

.nav-links {
  display: flex;
  gap: 18px;
  font-size: 0.95rem;
  color: #c4cedd;
}

.nav-links a {
  position: relative;
  padding-bottom: 4px;
}

.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #6ef3d6;
  transition: width 0.2s ease;
}

.nav-links a:hover::after {
  width: 100%;
}
</style>

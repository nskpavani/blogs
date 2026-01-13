<template>
  <section class="page">
    <div class="card">
      <div class="status-pill">
        <span class="success-pulse"></span>
        Success signal live
      </div>
      <h2>You’re in.</h2>
      <p class="muted">Senior Full Stack Developers — Canada — Active</p>
      <p>This is how opportunities start finding you.</p>
      <RouterLink class="button" to="/dashboard">View My Dashboard</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

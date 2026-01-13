<template>
  <section class="page landing">
    <div class="card hero">
      <p class="eyebrow">Rewaio Readiness Network</p>
      <h1>Stop Chasing. Start Being Ready.</h1>
      <p class="muted lead">
        Signal your availability once. Stay visible. No waiting.
      </p>
      <div class="cta-row">
        <RouterLink class="button" to="/signup">Set Your Readiness</RouterLink>
        <span class="muted small-note">Built for professionals who move with intent.</span>
      </div>
    </div>
    <div class="card micro">
      <p class="muted">Visibility without chasing. Clarity without noise.</p>
      <div class="underline"></div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
.landing {
  display: grid;
  gap: 24px;
}

.hero h1 {
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  margin: 16px 0 12px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.75rem;
  color: #6ef3d6;
}

.lead {
  font-size: 1.1rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
}

.micro {
  position: relative;
  overflow: hidden;
}

.underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 120px;
  background: #6ef3d6;
  transition: width 0.3s ease;
}

.micro:hover .underline {
  width: 100%;
}
</style>

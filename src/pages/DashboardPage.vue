<template>
  <section class="page">
    <div class="card">
      <h2>Your Readiness Snapshot</h2>
      <p class="muted">A clear signal, always in your control.</p>
      <ul class="list">
        <li>
          <span>Readiness status</span>
          <strong>{{ readinessLabel }}</strong>
        </li>
        <li>
          <span>Pool membership</span>
          <strong>Senior Full Stack Developers — Canada — Active</strong>
        </li>
      </ul>
    </div>
    <div class="card" style="margin-top: 24px;">
      <h3>What you can unlock next</h3>
      <p class="muted">These are preview milestones you control.</p>
      <ul class="list">
        <li>
          <span>Signal an updated timeline</span>
          <span class="status-pill">Unlocked</span>
        </li>
        <li>
          <span>Share your focus areas</span>
          <span class="status-pill">Preview</span>
        </li>
        <li>
          <span>Invite trusted references</span>
          <span class="status-pill">Preview</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useReadinessState } from "../state/readiness";

const { state } = useReadinessState();

const readinessLabel = computed(() => {
  switch (state.readiness) {
    case "available-now":
      return "Available now";
    case "open-30-60":
      return "Open in 30–60 days";
    case "not-looking-open":
      return "Not looking, but open";
    default:
      return "Not set";
  }
});
</script>

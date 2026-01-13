<template>
  <section class="page">
    <div class="card">
      <div class="progress">
        <span class="progress-dot"></span>
        <span>Step 2 of 2</span>
      </div>
      <h2>What’s your current readiness?</h2>
      <p class="muted">Choose the signal that fits your timeline.</p>
      <div class="option-grid">
        <div
          v-for="option in options"
          :key="option.value"
          class="option-card"
          :class="{ active: option.value === selected }"
          @click="selectReadiness(option.value)"
        >
          <h3>{{ option.label }}</h3>
          <p class="muted">{{ option.description }}</p>
        </div>
      </div>
      <p class="small-note">You can change this anytime.</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useReadinessState } from "../state/readiness";

const router = useRouter();
const { state, setReadiness } = useReadinessState();

const selected = ref(state.readiness);

const options = [
  {
    value: "available-now",
    label: "Available now",
    description: "I’m ready to explore new opportunities right away.",
  },
  {
    value: "open-30-60",
    label: "Open in 30–60 days",
    description: "I’m planning ahead and want to be visible soon.",
  },
  {
    value: "not-looking-open",
    label: "Not looking, but open",
    description: "I’m focused, yet open to the right signal.",
  },
];

const selectReadiness = (value) => {
  selected.value = value;
  setReadiness(value);
  // Backend hook: persist readiness signal.
  router.push("/confirmation");
};
</script>

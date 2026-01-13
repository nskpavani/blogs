<template>
  <section class="page">
    <div class="card">
      <div class="progress">
        <span class="progress-dot"></span>
        <span>Step 1 of 2</span>
      </div>
      <h2>Start with the basics</h2>
      <p class="muted">We keep it simple so you can move fast.</p>
      <form class="form" @submit.prevent="handleSubmit">
        <label>
          <span>Name</span>
          <input v-model="name" class="input" placeholder="Jordan Lee" required />
        </label>
        <label>
          <span>Email</span>
          <input v-model="email" class="input" type="email" placeholder="you@company.com" required />
        </label>
        <label>
          <span>Password</span>
          <input v-model="password" class="input" type="password" placeholder="Create a password" required />
        </label>
        <button class="button" type="submit">
          Continue → Set Readiness
        </button>
        <p class="small-note">No uploads. No connections. Just intent.</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useReadinessState } from "../state/readiness";

const router = useRouter();
const { setProfile } = useReadinessState();

const name = ref("");
const email = ref("");
const password = ref("");

const handleSubmit = () => {
  setProfile({ name: name.value, email: email.value });
  // Backend hook: send profile data to a signup endpoint.
  router.push("/readiness");
};
</script>

<style scoped>
.form {
  display: grid;
  gap: 16px;
  margin-top: 24px;
}

label {
  display: grid;
  gap: 8px;
  font-size: 0.9rem;
  color: var(--muted);
}
</style>

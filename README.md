# Rewaio Onboarding (Frontend-Only)

Scaffolded Vue 3 onboarding flow for Rewaio. This is a frontend-only prototype using mock data and local state.

## Suggested Project Structure

```
src/
  assets/
    base.css
  pages/
    LandingPage.vue
    SignupPage.vue
    ReadinessPage.vue
    ConfirmationPage.vue
    DashboardPage.vue
  router/
    index.js
  state/
    readiness.js
  App.vue
  main.js
```

## Component Breakdown Per Page

- **LandingPage**: Brand headline, supporting subtext, primary CTA to start onboarding.
- **SignupPage**: Mocked form with name/email/password, progress hint (Step 1 of 2).
- **ReadinessPage**: Three selectable readiness options. Stores selection locally and redirects.
- **ConfirmationPage**: Success message with pool name and CTA to dashboard.
- **DashboardPage**: Skeleton dashboard showing readiness status, pool membership, and static unlocks.

## Example Components

### Landing Page

`src/pages/LandingPage.vue`

- Headline: “Stop Chasing. Start Being Ready.”
- Subtext: “Signal your availability once. Stay visible. No waiting.”
- CTA: “Set Your Readiness”
- Subtle motion: underline animation on hover

### Readiness Selection

`src/pages/ReadinessPage.vue`

- Question: “What’s your current readiness?”
- Options: “Available now”, “Open in 30–60 days”, “Not looking, but open”
- On selection: stores readiness locally and redirects to confirmation

## Minimal Styling Guidance

- Use a dark, professional palette with one bright accent color.
- Lean on rounded cards, soft borders, and subtle hover transitions.
- Favor clean typography and restrained spacing to keep the tone focused.

## Notes on Future Backend Hooks

Comments are embedded in the mocked submit/selection handlers to show where backend integration would go later (e.g., sending profile info or persisting readiness signals).

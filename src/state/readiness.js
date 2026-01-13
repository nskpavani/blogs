import { reactive } from "vue";

const state = reactive({
  name: "",
  email: "",
  readiness: "",
});

export function useReadinessState() {
  const setProfile = ({ name, email }) => {
    state.name = name;
    state.email = email;
  };

  const setReadiness = (value) => {
    state.readiness = value;
  };

  return {
    state,
    setProfile,
    setReadiness,
  };
}

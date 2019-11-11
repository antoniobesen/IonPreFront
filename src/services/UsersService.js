import Vue from "vue";

export default {
  index: () => Vue.axios.get("api/users")
};

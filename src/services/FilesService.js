import Vue from "vue";

export default {
  postCsv: formData => Vue.axios.post("events/import-csv", formData)
};

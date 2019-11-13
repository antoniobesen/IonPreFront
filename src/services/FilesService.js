import Vue from "vue";

export default {
  postCsv: formData =>
    Vue.axios.post("events/import-csv", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
};

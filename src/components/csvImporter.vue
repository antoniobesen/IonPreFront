<template>
  <v-row>
    <v-col>
      <v-file-input label="CSV file" ref="file" @change="handleFileUpload"></v-file-input>
    </v-col>
    <v-col>
      <v-btn @click="submitFile">Submit</v-btn>
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable no-debugger */
import FilesService from "@/services/FilesService.js";
export default {
  data() {
    return { file: "" };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      debugger;
    },
    async submitFile() {
      let formData = new FormData();
      try {
        formData.append("file", this.file);
        await FilesService.postCsv(formData);
      } catch (error) {
        window.alert(error);
      }
    }
  }
};
</script>
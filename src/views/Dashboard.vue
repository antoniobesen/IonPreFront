<template>
  <v-container>
    <v-row>
      <v-col>
        <v-file-input label="CSV file" ref="fileComponent" @change="handleFileUpload" :key="key"></v-file-input>
      </v-col>
      <v-col>
        <v-btn @click="submitFile">Submit</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="isLoading">
      <h1>Carregando</h1>
    </v-row>
    <template v-else>
      <v-template v-if="!isEventsEmpty">
        <v-row>
          <v-col xs="12" sm="8" lg="6" class="white" cols="12">
            <company-actions></company-actions>
          </v-col>
          <v-col xs="12" sm="8" lg="6" class="white">
            <most-used-part></most-used-part>
          </v-col>
        </v-row>
        <v-row>
          <v-col xs="12" sm="8" lg="6" class="white" cols="12">
            <latest-company-actions></latest-company-actions>
          </v-col>
          <v-col xs="12" sm="8" lg="6" class="white">
            <most-active-user></most-active-user>
          </v-col>
        </v-row>
      </v-template>
      <template v-else>
        <h1>Sem eventos cadastrados</h1>
        <h4>Importe arquivo csv</h4>
      </template>
    </template>
  </v-container>
</template>

<script>
/* eslint-disable no-debugger */
import FilesService from "@/services/FilesService.js";
import companyActions from "../components/companyActions.vue";
import mostUsedPart from "../components/mostUsedPart.vue";
import mostActiveUser from "../components/mostActiveUser.vue";
import latestCompanyActions from "../components/latestCompanyActions.vue";
import CompaniesService from "@/services/CompaniesService.js";
import EventsService from "@/services/EventsService.js";
import UsersService from "@/services/UsersService.js";
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    companyActions,
    mostUsedPart,
    mostActiveUser,
    latestCompanyActions
  },
  data() {
    return {
      loading: {
        companies: true,
        users: true,
        events: true
      },
      file: "",
      key: Date.now()
    };
  },
  mounted() {
    this.loadCompanies();
    this.loadUsers();
    this.loadEvents();
  },
  computed: {
    isLoading() {
      return (
        this.loading.companies || this.loading.users || this.loading.events
      );
    },
    ...mapGetters(["isEventsEmpty"])
  },
  methods: {
    async loadCompanies() {
      this.loading.companies = true;
      try {
        let companies = await CompaniesService.index();
        this.setCompanies(companies);
      } catch (error) {
        window.alert(error);
      }
      this.loading.companies = false;
    },
    async loadUsers() {
      this.loading.users = true;
      try {
        let users = await UsersService.index();
        this.setUsers(users);
      } catch (error) {
        window.alert(error);
      }
      this.loading.users = false;
    },
    async loadEvents() {
      this.loading.events = true;
      try {
        let events = await EventsService.index();
        this.setEvents(events);
      } catch (error) {
        window.alert(error);
      }
      this.loading.events = false;
    },
    handleFileUpload() {
      this.file = this.$refs.fileComponent.$refs.input.files[0];
    },
    async submitFile() {
      let formData = new FormData();
      try {
        formData.append("file", this.file);
        await FilesService.postCsv(formData);
      } catch (error) {
        window.alert(error);
      }
      this.loadEvents();
      this.key = Date.now();
    },
    ...mapMutations(["setCompanies", "setUsers", "setEvents"])
  }
};
</script>
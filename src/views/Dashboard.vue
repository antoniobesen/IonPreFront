
<template>
  <v-container class="grey lighten-10">
    <v-row v-if="isLoading">
      <h1>Carregando</h1>
    </v-row>
    <template v-else>
      <v-row>
        <v-col xs="12" sm="8" lg="6" class="white" cols="12">
          <companyActions></companyActions>
        </v-col>
        <v-col xs="12" sm="8" lg="6" class="white">
          <mostUsedPart></mostUsedPart>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="12" sm="8" lg="6" class="white" cols="12">
          <latest-company-actions></latest-company-actions>
        </v-col>
        <v-col xs="12" sm="8" lg="6" class="white">
          <mostActiveUser></mostActiveUser>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
/* eslint-disable no-debugger */
import companyActions from "../components/companyActions.vue";
import mostUsedPart from "../components/mostUsedPart.vue";
import mostActiveUser from "../components/mostActiveUser.vue";
import latestCompanyActions from "../components/latestCompanyActions.vue";
import CompaniesService from "@/services/CompaniesService.js";
import EventsService from "@/services/EventsService.js";
import UsersService from "@/services/UsersService.js";
import { mapMutations } from "vuex";

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
      }
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
    }
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
    ...mapMutations(["setCompanies", "setUsers", "setEvents"])
  }
};
</script>
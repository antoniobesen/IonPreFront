<template>
  <company-actions-card title="Visualizar ações por empresa">
    <template v-slot:body="{ selectedCompany }">
      <v-list v-show="selectedCompany">
        <v-list-item v-for="(event, index) in getCompanyEventsById(selectedCompany)" :key="index">
          <v-list-item-content>
            <v-list-item-title v-text="event.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
  </company-actions-card>
</template>


<script>
import { mapGetters } from "vuex";
import CompanyActionsCard from "@/components/CompanyActionsCard.vue";

export default {
  components: {
    CompanyActionsCard
  },
  data() {
    return {
      searchCompanyActions: false
    };
  },
  computed: {
    ...mapGetters(["getCompanyEventsById"])
  }
};
</script>
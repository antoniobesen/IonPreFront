<template>
  <v-container>
    <company-actions-card title="Pesquisar últimas ações por empresa">
      <template v-slot:body="{ selectedCompany }">
        <v-list v-show="searchCompanyActions">
          <v-list-item
            v-for="(event,index) in getLatestCompanyEventsById(selectedCompany)"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title v-text="event.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </company-actions-card>
  </v-container>
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
      selectedCompany: undefined,
      searchCompanyActions: true
    };
  },
  computed: {
    ...mapGetters(["getLatestCompanyEventsById"])
  }
};
</script>
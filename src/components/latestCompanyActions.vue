<template>
  <v-container>
    <v-row>
      <v-col lg="6" justify="space-around">
        <h4>Visualizar ações por empresa</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="6">
        <v-select
          label="Empresas"
          :items="companies"
          item-text="name"
          item-value="id"
          v-model="selectedCompany"
        ></v-select>
      </v-col>
      <v-col>
        <v-btn @click="searchCompanyActions = !searchCompanyActions">Pesquisar</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12">
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
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      selectedCompany: 0,
      searchCompanyActions: false
    };
  },
  computed: {
    ...mapState(["companies"]),
    ...mapGetters(["getCompanyEventsById", "getLatestCompanyEventsById"])
  }
};
</script>
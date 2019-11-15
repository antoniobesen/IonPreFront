<template>
  <v-container>
    <v-row>
      <v-col lg="6" justify="space-around">
        <h4>{{ title }}</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="6">
        <company-select v-model="selectedCompany"></company-select>
      </v-col>
      <v-col>
        <v-btn @click="searchCompanyActions = !searchCompanyActions">Pesquisar</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col lg="12">
        <slot name="body" v-bind:selectedCompany="selectedCompany"></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CompanySelect from "@/components/form/CompanySelect";

export default {
  components: {
    CompanySelect
  },
  props: {
    title: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      selectedCompany: undefined
    };
  }
};
</script>
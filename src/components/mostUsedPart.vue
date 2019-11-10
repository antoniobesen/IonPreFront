<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="700">
          <v-card-title>
            <p>Frequência de uso das funcionalidades do sistema</p>
          </v-card-title>
          <v-card-text>
            <p class="display-1 text--primary">{{ getMostUsedFuncionality.name }}</p>
            <div
              class="text--primary"
            >A função {{ getMostUsedFuncionality.name }} foi utilizada {{ getMostUsedFuncionality.occurences }} vezes</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getMostUsedFuncionality"])
  }
};
</script>
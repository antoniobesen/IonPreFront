<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" max-width="700">
          <v-card-title>
            <p>Frequência de uso dos usuários</p>
          </v-card-title>
          <v-card-text>
            <p class="display-1 text--primary">{{ getMostActiveUser.userEmail }}</p>
            <div class="text--primary">Empresa: {{ getMostActiveUser.companyName }}</div>
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
    ...mapGetters(["getMostActiveUser"])
  }
};
</script>
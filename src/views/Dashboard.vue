<template>
  <v-container class="grey lighten-10">
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


  </v-container>
</template>

<script>
import companyActions from '../components/companyActions.vue'
import mostUsedPart from '../components/mostUsedPart.vue'
import mostActiveUser from '../components/mostActiveUser.vue'
import latestCompanyActions from '../components/latestCompanyActions.vue'

export default {
  components: {
    companyActions,
    mostUsedPart,
    mostActiveUser,
    latestCompanyActions
},
  data(){
    return {

    }
  }
}
</script>
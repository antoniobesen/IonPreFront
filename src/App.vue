<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {};
  },
  created() {
    this.$http.get("localhost:3000/api/events").then(data => {
      this.$store.state.csvData = data.body.data;
    });
    this.$http.get("localhost:3000/api/users").then(data => {
      this.$store.state.users = data.body.data;
    });
    this.$http.get("localhost:3000/api/companies").then(data => {
      this.$store.state.companies = data.body.data;
    });
  }
};
</script>

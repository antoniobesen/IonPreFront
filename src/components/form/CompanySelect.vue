<template>
  <v-select
    label="Empresas"
    v-bind="$attrs"
    :items="companies"
    item-text="name"
    item-value="id"
    v-model="selectedCompany"
  ></v-select>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedCompany: { ...this.value }
    };
  },
  computed: {
    ...mapState(["companies"])
  },
  watch: {
    selectedCompany() {
      this.$emit("input", this.selectedCompany);
    }
  }
};
</script>
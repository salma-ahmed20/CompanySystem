<template>
  <form @submit.prevent="submitForm">
    <input type="date" placeholder="Start Date" v-model="model.startDate" />
    <input type="date" placeholder="End Date" v-model="model.endDate" />
    <button class="c-button">Filter</button>
  </form>
</template>
<script>
export default {
  name: "FilterChartComponent",
  data() {
    return {
      model: {
        startDate: "",
        endDate: "",
      },
    };
  },

  methods: {
    submitForm() {
      this.$emit('filterByDate', this.model);
    },
  },
};
</script>

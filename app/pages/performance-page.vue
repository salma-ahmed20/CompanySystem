<template>
  <div class="c-dashboard" id="performance-page">
    <div class="c-filters__container">
      <filter-chart-component @filterByDate="filterChartData($event)"/>
    </div>
    <div class="c-dashboard__header">
      <performance-chart-component :filterData="data"/>
    </div>
  </div>
</template>

<script>
import PerformanceChartComponent from "../components/vue-components/performance-chart.vue";
import FilterChartComponent from "../components/vue-components/filter-chart.vue"
export default {
  name: "AboutPageComponent",
  components: {
    PerformanceChartComponent,
    FilterChartComponent
  },
  data() {
    return {
      data:{}
    }
  },
  methods:{
    filterChartData(data){
      this.data = data
    }

  }
};
</script>
import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';

import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import FilterEmployeesComponent from './components/vue-components/filter-employees.vue';

angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
  'core',
]);

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vFilterEmployees', (createVueComponent) => {
  return createVueComponent(Vue.component('filterEmployeesComponent', FilterEmployeesComponent));
});

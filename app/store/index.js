import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import formatDate from '../utils/formatDate.js';

Vue.config.productionTip = false;
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    chartData: [],
  },
  mutations: {
    setChartData(state, data) {
      state.chartData = data;
    },
  },
  getters: {
    getData(state) {
      return state.chartData;
    },
    getFilteredData: (state) => (date) => {
      return state.chartData
        .filter(
          data=> (formatDate(data.date_ms) >= date.startDate &&
           formatDate(data.date_ms) <= date.endDate)
        );
    },
  },
  actions: {
    getChartData(context) {
      axios.get('https://fe-task.getsandbox.com/performance').then(response=>{
        context.commit('setChartData', response.data);
      });
    },
  },
});
export default store;

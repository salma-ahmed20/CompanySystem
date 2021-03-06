<template>
  <div class="c-chart__container" id="performance-chart">
    <v-chart ref="chart" :option="chartOptions" />
  </div>
</template>

<script>
import moment from "moment";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import VChart from "vue-echarts";
import store from "../../store/index";
import axios from 'axios'
use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
]);


export default {
  name: "PerformanceChartComponent",
  props: ["filterData"],
  components: {
    VChart,
  },

  created() {
    store.dispatch("getChartData");
  },

  computed: {
    chartData() {
      if (this.filterData.startDate) {
        return store.getters.getFilteredData(this.filterData);
      } else {
        return store.getters.getData;
      }
    },

    initOptions() {
      return {
        width: "auto",
        height: "300px",
      };
    },

    chartOptions() {
      return {
        title: {
          text: "Team Performance Index",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          transitionDuration: 0,
          confine: false,
          hideDelay: 0,
          //padding: 0,
          backgroundColor:'#16253f',
          padding: 16,        
          textStyle:{
            color:'#fff',
            width:100
          }
        },
        grid: {
          left: "30px",
          right: "12px",
          bottom: "2px",
          top: "6px",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          showGrid: false,
          data: this.xAxisData,
          axisLine: {
            show: true,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            fontSize: 11,
          },
        },
        yAxis: {
          axisLabel: { show: true },
          axisTick: { show: true },
          splitLine: { show: true },
        },
        visualMap: {
          top: 50,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 50,
              color: "#f4674c",
            },
            {
              gt: 50,
              lte: 80,
              color: "#fbdb10",
            },
            {
              gt: 80,
              lte: 100,
              color: "#01984f",
            },
          ],
          outOfRange: {
            color: "#999",
          },
        },
        series: [
          {
            name: "Team Performance Index :",
            data: this.yAxisData,
            type: "line",
            symbol: "circle",
            symbolSize: 2,
            cursor: "default",
            lineStyle: {
              width: 2,
            },
            tooltip:{
            }
           
          },
        ],
      };
    },

    xAxisData() {
      return (
        this.chartData &&
        this.chartData.map((item) => this.formatDate(item.date_ms))
      );
    },

    yAxisData() {
      return (
        this.chartData && this.chartData.map((item) => +item.performance * 100)
      );
    },
  },

  methods: {
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },
  },
};
</script>

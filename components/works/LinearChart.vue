<template>
  <div class="main flex flex-column">
    <div class="input flex flex-row">
      <div>
        <span v-show="this.$store.state.fa">تعداد داده</span>
        <span v-show="!this.$store.state.fa">count of data</span>
        <span>{{count}}</span>
      </div>
      <input
        class="input-slider"
        type="range"
        min="5"
        max="50"
        step="1"
        v-model="count"
      />
    </div>
    <div class="chart flex">
      <div class="chart-title flex flex-row">
        <div class="chart-title-text flex">
          <span v-show="this.$store.state.fa">
            پیشرفت شما
          </span>
          <span v-show="!this.$store.state.fa">
            Your Progress
          </span>
        </div>
        <span class="counter flex" id="counter"> </span>
      </div>
      <div id="chart">
        <svg
          class="chart-line"
          width="100%"
          height="100%"
          id="chart"
          viewBox="0 0 100 50"
        >
          <defs id="defs">
            <clipPath width="100%" height="100%" id="clip" class="clip">
              <rect id="clip-rect" x="0" y="0" width="0" height="100%"></rect>
            </clipPath>
            <linearGradient id="gradient-1" x1="0%" y1="0%" x2="0%" y2="100%">
              >
              <stop offset="0" stop-color="#FB5607" stop-opacity="0.7" />
              <stop offset="0.3" stop-color="#FB5607" stop-opacity="0.4" />
              <stop offset="1" stop-color="#FB5607" stop-opacity="0" />
            </linearGradient>
          </defs>
          <g style="clip-path: url(#clip)" :id="chartId"></g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import apiServices from "~/api/apiServices";
  import Slider from "../fun/Slider";
  export default {
    name: "LinearChart",
      components: {Slider},
      props: ["chartId"],
    data() {
      return {
        chart: {
          width: "100",
          height: "100",
          marginTop: 0.35,
          marginBottom: 0.4,
          marginLeft: 0,
          marginRight: 0
        },
        normalizedData: [],
        count: null,
        chartData: []
      };
    },
    mounted() {
      this.count = 20;
    },
    computed: mapState(["fa"]),
    watch: {
      fa(newValue) {
        let styleElem = document.head.appendChild(
          document.createElement("style")
        );
        if (!newValue) {
          styleElem.innerHTML =
            "input: { direction: ltr}";
        } else {
          styleElem.innerHTML =
            "input: { direction: rtl}";
        }
        this.fa = newValue;
      },
      count(count) {
        apiServices.methods.getRandomXY(count).then(response => {
          this.chartData = response;
        });
      },
      chartData(chartData) {
        document.getElementById("clip-rect").classList.remove("grow");
        document.getElementById("clip-rect").classList.add("hide");
        let chart = this.getById("chart");
        chart.style.width = this.chart.width + "%";
        chart.style.height = this.chart.height + "%";
        this.normalizedData = [];
        this.chartData.forEach(d => {
          let dxy = {};
          dxy.x = d[Object.keys(d)[0]];
          dxy.y = d[Object.keys(d)[1]];
          this.normalizedData.push(dxy);
        });
        setTimeout(() => {
          if (document.getElementById("chart-line")) {
            document.getElementById("chart-line").remove();
            document.getElementById("area").remove();
          }
          this.drawChart(this.normalizedData, this.chartId);
          this.drawArea(this.normalizedData, this.chartId);
          document.getElementById("clip-rect").classList.remove("hide");
          document.getElementById("clip-rect").classList.add("grow");
        }, 1000);
      }
    },
    methods: {
      drawArea(data, id) {
        let i;
        let stepX = this.chart.width / (this.normalizedData.length - 1);
        let maxX = Math.max.apply(
          Math,
          data.map(function(d) {
            return d.x;
          })
        );
        let minX = Math.min.apply(
          Math,
          data.map(function(d) {
            return d.x;
          })
        );
        // let dx = maxX - minX;

        let maxY = Math.max.apply(
          Math,
          data.map(function(d) {
            return d.y;
          })
        );
        let minY = Math.min.apply(
          Math,
          data.map(function(d) {
            return d.y;
          })
        );
        let dy = maxY - minY;
        let chart = this.getById(id);

        let d1 = data[0];
        let yRange =
          this.chart.height / 2 -
          ((this.chart.marginBottom + this.chart.marginTop) * this.chart.height) /
            2;
        let yBasePos =
          this.chart.height / 2 -
          ((this.chart.marginBottom * this.chart.height) / 2 +
            ((d1.y - minY) / dy) * yRange);
        let attr = "M 0 " + yBasePos;
        for (i = 1; i < data.length; i++) {
          let d2 = data[i];
          let x2Pos = stepX * i;
          let y2Pos =
            this.chart.height / 2 -
            ((this.chart.marginBottom * this.chart.height) / 2 +
              ((d2.y - minY) / dy) * yRange);
          let at = " L " + x2Pos + " " + y2Pos + " ";
          attr += at;
        }
        attr += " V " + this.chart.height / 2 + " H  0  V " + yBasePos;
        let chartLine = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        chartLine.setAttribute("d", attr);
        chartLine.setAttribute("id", "area");
        chartLine.style.opacity = "0.8";
        chartLine.style.fill = "url(#gradient-1)";
        chartLine.style.strokeLinejoin = "round";
        chartLine.style.strokeLinecap = "round";
        chart.appendChild(chartLine);
      },
      drawChart(data, id) {
        let i;
        let stepX = this.chart.width / (this.normalizedData.length - 1);
        let lastY = data[data.length - 1].y;
        let lastMinusOneY = data[data.length - 2].y;
        let maxX = Math.max.apply(
          Math,
          data.map(function(d) {
            return d.x;
          })
        );
        let minX = Math.min.apply(
          Math,
          data.map(function(d) {
            return d.x;
          })
        );
        let dx = maxX - minX;

        let maxY = Math.max.apply(
          Math,
          data.map(function(d) {
            return d.y;
          })
        );
        let minY = Math.min.apply(
          Math,
          data.map(function(d) {
            return d.y;
          })
        );
        let dy = maxY - minY;
        let chart = this.getById(id);
        let d1 = data[0];
        let yRange =
          this.chart.height / 2 -
          ((this.chart.marginBottom + this.chart.marginTop) * this.chart.height) /
            2;
        let yBasePos =
          this.chart.height / 2 -
          ((this.chart.marginBottom * this.chart.height) / 2 +
            ((d1.y - minY) / dy) * yRange);
        let attr = "M 0 " + yBasePos;
        for (i = 1; i < data.length; i++) {
          let d2 = data[i];
          let x2Pos = stepX * i;
          let y2Pos =
            this.chart.height / 2 -
            ((this.chart.marginBottom * this.chart.height) / 2 +
              ((d2.y - minY) / dy) * yRange);
          let at = " L " + x2Pos + " " + y2Pos + " ";
          attr += at;
        }
        let chartLine = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "path"
        );
        chartLine.setAttribute("d", attr);
        chartLine.setAttribute("id", "chart-line");
        chartLine.style.strokeWidth = "0.5px";
        chartLine.style.stroke = "#FB5607";
        chartLine.style.opacity = "1";
        chartLine.style.fill = "transparent";
        chartLine.style.strokeLinejoin = "round";
        chartLine.style.strokeLinecap = "round";
        chart.appendChild(chartLine);

        setTimeout(() => {
          let counter = this.getById("counter");
          let title = this.getById("title");
          let time = 500;
          let difference = lastY - lastMinusOneY;
          let interval = time / Math.abs(difference);
          if (difference > 0) {
            let c = 1;
            let counterInterval = setInterval(() => {
              if (c > difference) {
                clearInterval(counterInterval);
              }
              counter.innerText = "▲" + c;
              c++;
            }, interval);
          } else if (difference < 0) {
            let c = -1;
            let counterInterval = setInterval(() => {
              if (c < difference) {
                clearInterval(counterInterval);
              }
              counter.innerText = "▼" + c.toString().slice(1);
              c--;
            }, interval);
          } else {
            counter.style.color = "grey";
            counter.innerText = "-";
          }
        }, 500);
      },
      getById(id) {
        return document.getElementById(id);
      },
      getByName(name, i) {
        return document.getElementsByClassName(name)[i];
      }
    }
  };
</script>

<style scoped>
  .main {
    padding: 3vh 0;
  }
  .input {
    width: 500px;
    justify-content: space-between;
  }
  .input > div > span {
    font-size: 1.1em;
    margin: 0.5vw;
  }
  .input-slider {
    width: 60%
  }
  .chart {
    background-color: var(--text-color);
    position: relative;
    width: 500px;
    height: 250px;
    margin: 2vh 0;
    border-radius: 8px;
  }
  .chart-title {
    position: absolute;
    width: 100%;
    top: 5%;
    padding: 0 2vw;
    font-size: 1.3em;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
  }
  .chart-title-text{
    flex: 1;
    justify-content: flex-start;
  }
  .chart-title-text > span {
    color: var(--contrast-color);
  }
  .counter {
    flex: 1;
    justify-content: flex-end;
    color: var(--contrast-color);
  }
  #g {
    width: 100%;
    height: 100%;
  }

  .grow {
    -webkit-animation: 1500ms grow ease-in-out forwards;
  }
  .hide {
    -webkit-animation: 1000ms hide ease-in-out forwards;
  }
  .chart-line {
    width: 100%;
    height: 100%;
  }
  .chart {
    position: relative;
    border-radius: 8px;
  }

  @media screen and (max-width: 864px) {
    .input {
      width: 90vw;
    }
    .chart {
      width: 90vw;
      height: 45vw;
    }
    .chart-title {
      font-size: 0.9em;
    }
  }
</style>

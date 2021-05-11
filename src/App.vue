<template>
  <div id="app">
    <g-gantt-chart
    :chartWidth=100
    chartBackground="white"
    ></g-gantt-chart>
    <div class="test-wrapper">
      <button id="btn" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">button</button>
        <tooltip :isShowTooltip="showTooltip" :direction="BOTTOM_LEFT"
        :tooltipPosition="{ left: '100px', top: '70px' }"
        roundColor="#2ecc71"
        >
          <span>14:15 - 18:00</span>
      </tooltip>
    </div>
  </div>
</template>

<script>
import GGanttChart from './components/GGanttChart.vue'
import Tooltip from './components/Tooltip.vue'
import {
  BOTTOM_LEFT
  // BOTTOM_RIGHT,
  // BOTTOM_CENTER,
  // TOP_LEFT,
  // TOP_CENTER,
  // TOP_RIGHT
} from './constant.js'
import moment from 'moment'
const time = moment('2020-03-03 06:30')
console.log(time)

export default {
  name: 'App',
  components: {
    GGanttChart,
    Tooltip
  },
  data() {
    return {
      showTooltip: true,
      BOTTOM_LEFT
    }
  },
  methods: {
    onMouseEnter() {
      this.showTooltip = true
    },
    onMouseLeave() {
      this.showTooltip = false
    }
  }
}
</script>

<style lang="scss">
body,
html{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.test-wrapper {
  position: relative;
  padding: 100px;
  #btn{
    padding: 20px 50px;
    background: #00a8ff;
    border: 1px solid #00a8ff;
    outline: none;
    border-radius: 4px;
    color: #fff;
    transition: all .3s;
    cursor: pointer;
    font-size: 18px;
    &:hover{
      background: #54c6ff;
    }
    &:focus{
      box-shadow: 0 0 0 5px rgba(46, 176, 241, 0.5);
    }
  }
}

</style>

<template>
  <div id="g-gantt-chart" :style="{ width:chartWidth + '%', background: chartBackground }" ref="ganttChart">
    <g-gantt-timeaxis :date="chartDate"></g-gantt-timeaxis>
    <g-gantt-gride :userList="rowList"></g-gantt-gride>
  </div>
</template>

<script>
import GGanttTimeaxis from './GGanttTimeaxis.vue'
import GGanttGride from './GGanttGride.vue'
import { chartDate, rowList } from '../data.js'
export default {
  name: 'GGanttChart',
  props: {
    // 宽度
    chartWidth: {
      type: Number,
      default: 100
    },
    // 背景颜色
    chartBackground: {
      type: String,
      default: '#fff'
    }
  },
  components: {
    GGanttTimeaxis,
    GGanttGride
  },
  data() {
    return {
      chartDate,
      rowList
    }
  }
}
</script>

<style scoped lang='scss'>
</style>

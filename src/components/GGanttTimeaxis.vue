<template>
  <div class="g-gantt-timeaxis">
    <g-gannt-chart-pointer></g-gannt-chart-pointer>
    <div class="g-timeaxis-empty-space"
      :style="{ width: 100 - dateRowWidth +'%' }"
    ></div>
    <div class="g-timeaxis-days"
      :style="{ width: dateRowWidth +'%' }"
    >
    <template v-for="item of date">
      <timeaxis-date  :key="item.id" :dateData="item"></timeaxis-date>
    </template>
    </div>
  </div>
</template>

<script>
import GGanntChartPointer from './GGanntChartPointer.vue'
import TimeaxisDate from './TimeaxisDate.vue'

export default {
  name: 'GGanttTimeaxis',
  props: {
    // 日期容器宽度 百分比
    dateRowWidth: {
      type: Number,
      default: 80
    },
    // 日期
    date: {
      type: Array,
      default: () => []
    }
  },
  components: {
    TimeaxisDate,
    GGanntChartPointer
  }
}
</script>

<style scoped lang='scss'>
.g-gantt-timeaxis{
  position: relative;
  width: 100%;
  display: flex;
  box-shadow: 0px 1px 3px 2px rgba(50, 50, 50, .5);
  .g-timeaxis-empty-space {
    background: #fff;
  }
  .g-timeaxis-days{
    display: flex;
  }
}

</style>

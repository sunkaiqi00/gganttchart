<template>
  <div class="g-gantt-row">
    <div class="g-gantt-row-user" :style="{width: 100 - ganttTableWidth +'%'}">
      <div class="user-name">{{ userData.userName }}</div>
    </div>
    <div class="g-gantt-row-table" :style="{width: ganttTableWidth +'%'}">
      <div class="table-item" v-for="item of 24" :key="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GGanttRow',
  props: {
    // 表格容器宽度
    ganttTableWidth: {
      type: Number,
      default: 80
    },
    userData: Object
  }
}
</script>

<style scpoed lang='scss'>
.g-gantt-row {
  height: 40px;
  display: flex;
  .g-gantt-row-user {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f6fa;
    transition: background .2s;
    font-weight: bold;
    &:hover {
      background: #dfe4ea;
    }
  }
  .g-gantt-row-table {
    display: flex;
    border-bottom: 1px solid #dcdde1;
    box-sizing: border-box;
    .table-item {
      position: relative;
      height: 100%;
      flex: 1;
      border-left: 1px solid #dcdde1;
      box-sizing: border-box;
      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        height: 100%;
        width: 1px;
        background: #dcdde1;
      }
      &:nth-child(6),
      &:nth-child(7),
      &:nth-child(18),
      &:nth-child(19) {
        border-left: 2px solid #74b9ff;
      }
    }
  }
}
</style>

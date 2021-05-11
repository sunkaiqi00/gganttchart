<template>
  <div class="g-gannt-gride">
    <template v-for="item of userList">
      <g-gantt-row :userData="item" :key="item.id"></g-gantt-row>
    </template>
  </div>
</template>

<script>
import GGanttRow from './GGanttRow.vue'

export default {
  name: 'GGanttGride',
  props: {
    userList: {
      type: Array,
      default: () => []
    }
  },
  components: {
    GGanttRow
  }
}
</script>

<style scpoed lang='scss'>
</style>

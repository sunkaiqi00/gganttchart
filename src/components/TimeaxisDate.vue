<template>
  <div class="timeaxis-date">
    <div class="date-title"
     :style="{ background: dateTitleBackground }"
    >
      {{ dateTitle }}
    </div>
    <ul class="mouth-day">
      <li v-for="item of 24" :key="item">
        <span class="date-time">{{ formatDate(item) }}</span>
        <span class="date-pointer"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TimeaxisDate',
  props: {
    dateTitle: {
      type: String,
      default: ''
    },
    dateTitleBackground: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    formatDate(day) {
      const num = day - 1
      return num < 10 ? '0' + num : num
    }
  }
}
</script>

<style scoped lang='scss'>
.timeaxis-date {
  flex: 1;
  display: flex;
  flex-direction: column;
  .date-title,
  .mouth-day {
    flex: 1;
  }
  .date-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 40px;
  }
  .mouth-day {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #95a5a6;
    padding-top: 15px;
    background: #f5f6fa;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .date-pointer {
        height: 10px;
        border-left: 1px solid#95a5a6;
      }
    }
  }
}

</style>

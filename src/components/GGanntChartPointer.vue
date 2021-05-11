<template>
  <div class="g-gannt-chart-pointer" ref="chartPointer" v-if="pointerShow"></div>
</template>

<script>
export default {
  name: 'GGanntChartPointer',
  data() {
    return {
      // 指针是否显示
      pointerShow: false
    }
  },
  methods: {
    pointerSlide(event) {
      const pointElement = this.$refs.chartPointer
      !this.pointerShow && (this.pointerShow = true)
      pointElement && (pointElement.style.left = event.clientX - pointElement.offsetWidth + 'px')
    }
  },
  mounted() {
    window.addEventListener('mousemove', this.pointerSlide, false)
  }
}
</script>

<style scoped lang='scss'>
.g-gannt-chart-pointer{
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 2px;
  background: #2c3e50;
}
</style>

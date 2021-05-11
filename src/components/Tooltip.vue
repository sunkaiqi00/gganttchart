<template>
  <transition name="fade">
    <div class="tooltip-wrapper" v-show="isShowTooltip"
      :style="tooltipPosition"
    >
      <div class="tooltip-round" :style="{ backgroundColor: roundColor }"></div>
      <div class="tooltip-content">
        <slot></slot>
      </div>
      <div class="trinagle" :style="tooltipStyle"></div>
    </div>
  </transition>
</template>

<script>
import {
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_CENTER,
  TOP_LEFT,
  TOP_CENTER,
  TOP_RIGHT
} from '../constant.js'
export default {
  name: 'ToolTip',
  props: {
    // tooltip 定位 位置
    tooltipPosition: Object,
    // 三角方向
    direction: {
      type: String,
      default: BOTTOM_LEFT
    },
    roundColor: {
      type: String,
      default: '#2ecc71'
    },
    isShowTooltip: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    tooltipStyle() {
      let style = {}
      switch (this.direction) {
        case BOTTOM_LEFT:
          style = { top: '100%', left: '10%' }
          break
        case BOTTOM_RIGHT:
          style = { top: '100%', right: '10%' }
          break
        case BOTTOM_CENTER:
          style = { top: '100%', left: '50%', transform: 'teanslateX(-50%)' }
          break
        case TOP_LEFT:
          style = {
            top: 0,
            transform: 'translateY(-100%)',
            borderColor: 'transparent transparent black transparent'
          }
          break
        case TOP_CENTER:
          style = {
            top: 0,
            left: '50%',
            transform: 'translate(-50%, -100%)',
            borderColor: 'transparent transparent black transparent'
          }
          break
        case TOP_RIGHT:
          style = {
            top: 0,
            right: '10%',
            transform: 'translateY(-100%)',
            borderColor: 'transparent transparent black transparent'
          }
          break
      }
      return style
    }
  }
}
</script>

<style scoped lang='scss'>
.tooltip-wrapper {
  position: absolute;
  display: inline-flex;
  align-items: center;
  background: rgba(0, 0, 0, .9);
  color: #fff;
  font-size: 14px;
  padding: 3px 6px;
  border-radius: 5px;
  .tooltip-round {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .trinagle {
    position: absolute;
    width: 0;
    height: 0;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
.fade-leave,
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s;
}
</style>

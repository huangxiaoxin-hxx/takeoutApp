<template>
  <view class="grace-sbody">
    <!-- 头部导航 -->
    <view v-if="customHeader">
      <view
        class="grace-page-header"
        :style="{
          'z-index': headerIndex,
          background: headerBG,
        }"
      >
        <!-- 沉浸式状态栏 -->
        <view
          class="grace-page-status-bar"
          :style="{ height: statusBarHeight + 'px', background: statusBarBG }"
        ></view>
        <!-- 头部核心 -->
        <view
          class="grace-page-header-nav"
          :style="{ height: headerHeight + 'px' }"
        >
          <view class="grace-header-main">
            <slot name="gHeader"></slot>
          </view>
        </view>
      </view>
    </view>
    <!-- 页面主体 -->
    <view class="grace-page-body">
      <slot></slot>
      <slot name="gBody"></slot>
    </view>
    <!-- 右下角悬浮按钮 -->
    <view
      class="gui-page-rb-area"
      :style="{
        right: rbRight + 'rpx',
        bottom: rbBottom + 'rpx',
        width: rbWidth + 'rpx',
        zIndex: rbIndex
      }"
    >
      <slot name="gRTArea"></slot>
    </view>
    <!-- 全屏 loading -->
    <view
      class="grace-page-loading"
      @tap.stop
      @touchmove.stop
      :style="{ background: loadingBG }"
      v-show="isLoading"
    >
      <loading-heart />
    </view>
  </view>
</template>

<script>
import loadingHeart from './loading/loading5.vue'
export default {
  name: 'cloudPage',
  components: {
    loadingHeart
  },
  data() {
    return {
      statusBarHeight: 0,
    }
  },
  props: {
    // 头部props
    customHeader: { type: Boolean, default: true }, // 是否展示头部组件
    statusBarBG: { type: String, default: "#fa6581" }, // 状态栏颜色
    headerIndex: { type: Number, default: 1 }, // 头部index
    headerBG: { type: String, default: "none" }, // 头部背景色
    headerHeight: { type: Number, default: 44 }, // tabbar高度
    // 右下角悬浮按钮props
    rbWidth: { type: Number, default: 100 }, // 右下角悬浮按钮宽度
    rbBottom: { type: Number, default: 100 }, // 右下角悬浮按钮高度
    rbRight: { type: Number, default: 20 }, // 右下角悬浮按钮right
    rbIndex: { type: Number, default: 1 }, // 右下角悬浮按钮 z-index
    // loading
    loadingBG: { type: String, default: "rgba(255,255,255, 0.3)" }, // loading背景颜色
    isLoading: { type: Boolean, default: false }, // loading是否展示
  },
  created() {
    var systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight;
  }
}
</script>

<style>
/* #ifndef MP */
page {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
}
/* #endif */
.grace-sbody {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  flex: 1;
}
/* #ifdef MP */
.grace-sbody {
  min-height: 100vh;
}
/* #endif */
.grace-page-status-bar {
  width: 100%;
  height: 0;
  position: fixed;
  z-index: 100;
}
.gui-page-rb-area {
  width: 100rpx;
  position: fixed;
  right: 20rpx;
  bottom: 100rpx;
  z-index: 1;
}
.grace-page-loading {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.grace-page-header-nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  box-sizing: border-box;
  /* background-color: #000; */
}
.grace-header-main {
  width: 300rpx;
  flex: auto;
  overflow: hidden;
}
.grace-page-body {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
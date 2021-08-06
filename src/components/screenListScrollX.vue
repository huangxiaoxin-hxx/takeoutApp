<template>
  <view class="bg_gray screen_box">
    <view class="scroll-x">
      <view class="nowrap">
        <p
          class="screen_list font-24"
          :class="selectScreen[item.type] ? 'select_screen' : ''"
          v-for="item in screenData"
          :key="item.id"
          @click="handleScreen(item)"
        >
          {{ item.name }}
        </p>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "screenListScrollX",
  props: {
    screenData: { type: Array, default: () => [] },
  },
  data() {
    return {
      selectScreen: {},
    };
  },
  methods: {
    // 筛选类别函数
    handleScreen(item) {
      if (!this.selectScreen.hasOwnProperty(item.type)) {
        this.selectScreen = { ...this.selectScreen, [item.type]: true };
      } else if (this.selectScreen[item.type]) {
        this.selectScreen[item.type] = false;
      } else {
        this.selectScreen[item.type] = true;
      }
      this.$emit("handleScreen", this.selectScreen);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/common/common.scss";
.screen_box {
  padding-top: 40rpx;
  padding-bottom: 20rpx;
  background-color: #f1f1f1;
  .screen_list {
    background-color: $color-white;
    padding: 10rpx 16rpx;
    display: inline-block;
    margin-right: 20rpx;
    border-radius: 10rpx;
  }
  .select_screen {
    background-color: $color-main;
    color: #fff;
  }
}
</style>

<template>
  <cloudPage>
    <u-navbar :is-fixed="false" slot="gHeader" :is-back="false" :background="headerBackground" :title-color="headerTitleColor">
      <view class="slot-wrap">
				<cloudLocation />
			</view>
      <view slot="right" class="right-wrap">
        <u-icon name="bell-fill" color="#fff" size="40rpx"></u-icon>
        <u-badge :is-dot="true" type="success"></u-badge>
      </view>
    </u-navbar>
    <view class="home_container">
      <!-- 虚假输入框 -->
      <view class="top_info_box">
        <!-- 搜索框吸顶 -->
        <u-sticky bg-color="#f1f1f1" offset-top="-88">
          <view class="bg_gray">
            <view class="fake_input flex al_center mb-20">
              <u-icon name="search" color="#aaa" size="36" class="search_icon"></u-icon>
              <text class="search_placeholder flex1">{{placeholderData && placeholderData.placeholder}}</text>
              <view class="button">搜索</view>
            </view>
          </view>
        </u-sticky>
        <view class="hot_box flex al_center">
          <view class="flex1 flex al_center">
            <view class="hot_item font-24" v-for="(item, index) in placeholderData && placeholderData.hotData" :key="index">
              {{item}}
            </view>
            <view class="rule font-24">资质规则</view>
          </view>
        </view>
      </view>
    </view>
  </cloudPage>
</template>

<script>
import { getPlaceholder } from '../../api/home'
export default {
  name: "home",
  data() {
    return {
      placeholderData: null
    }
  },
  onLoad() {
    getPlaceholder().then(res => {
      this.placeholderData = res.data
      console.log(this.placeholderData)
    })
  }
}
</script>

<style scoped lang="scss">
@import "../../common/common.scss";
.slot-wrap {
  width: 400rpx;
}
.right-wrap {
  padding-right: 20rpx;
}
.home_container {
  width: 100%;
  background-color: #f1f1f1;
  padding: 0 32rpx;
  box-sizing: border-box;
  height: 200vh;
}
.top_info_box {
  width: 100%;
  .bg_gray {
    background: #f1f1f1;
    width: 100%;
    padding: 20rpx 0;
  }
  .fake_input {
    width: 100%;
    height: 68rpx;
    border-radius: 50rpx;
    border: 1px solid $color-main;
    position: relative;
    background-color: #f1f1f1;
    .search_icon {
      margin: 0 20rpx;
    }
    .search_placeholder {
      color: #aaa;
    }
    .button {
      width: 120rpx;
      height: 68rpx;
      line-height: 68rpx;
      text-align: center;
      background-color: $color-main;
      border-radius: 50rpx;
      color: $color-white;
    }
  }
  .hot_item {
    min-width: 40rpx;
    padding: 0 16rpx;
    height: 40rpx;
    background-color: rgba($color-main, 0.3);
    color: $color-white;
    line-height: 40rpx;
    border-radius: 20rpx;
    margin-right: 16rpx;
  }
  .rule {
    padding-left: 20rpx;
    height: 40rpx;
    line-height: 40rpx;
    border-left: 1px solid $color-black;
  }
}
</style>
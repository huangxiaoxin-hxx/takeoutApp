<template>
  <cloudPage :isLoading="isLoading" :headerHeight="68">
    <u-navbar height="68" :is-fixed="false" slot="gHeader" :is-back="false" :background="headerBackground" :title-color="headerTitleColor">
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
        <u-sticky bg-color="#f1f1f1" :offset-top="input_offset">
          <view class="bg_gray header_bg_gray">
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
      <!-- 五大大分类 -->
      <view class="flex space_between al_center mt-40">
        <view class="category_item" v-for="item in fiveCategory" :key="item.id">
          <image :src="item.image" class="category_item_image" />
          <view class="category_item_name font-24 mt-10">{{item.name}}</view>
        </view>
      </view>
      <!-- 筛选类别 -->
      <u-sticky bg-color="#f1f1f1" :offset-top="screen_offset">
        <view class="bg_gray screen_box">
          <view class="scroll-x">
            <view class="nowrap">
              <p class="screen_list font-24" v-for="item in screenData" :key="item.id">{{item.name}}</p>
            </view>
          </view>
        </view>
      </u-sticky>
      <view class="list_box">
        
      </view>
    </view>
  </cloudPage>
</template>

<script>
import { getPlaceholder, getTakeoutList } from '../../api/home'
const fiveCategory = [
  {
    id: 1,
    image: '/static/home/food.png',
    name: "美食",
    type: "food"
  },
  {
    id: 2,
    image: '/static/home/drink.png',
    name: "甜点饮品",
    type: "drink"
  },
  {
    id: 3,
    image: '/static/home/supermarket.png',
    name: "超市便利",
    type: "supermarket"
  },
  {
    id: 4,
    image: '/static/home/fresh.png',
    name: "生鲜果蔬",
    type: "fresh"
  },
  {
    id: 5,
    image: '/static/home/flower.png',
    name: "鲜花蛋糕",
    type: "flower"
  },
]
const screenData = [
  {
    name: "天天神券",
    type: "discount",
    id: 1,
  },
  {
    name: "减配送费",
    type: "distribution",
    id: 2,
  },
  {
    name: "点评高分",
    type: "top",
    id: 3,
  },
  {
    name: "美团专送",
    type: "special",
    id: 4,
  },
  {
    name: "高额满减",
    type: "fullminus",
    id: 5,
  },
]
export default {
  name: "home",
  data() {
    return {
      placeholderData: null,
      isLoading: false,
      fiveCategory: fiveCategory,
      screenData: screenData,
      input_offset: -88,
      screen_offset: 0,
      takeoutList: []
    }
  },
  async onLoad() {
    // #ifdef  APP-PLUS
    var systemInfo = uni.getSystemInfoSync();
    this.input_offset = systemInfo.statusBarHeight + 26;
    this.screen_offset = systemInfo.statusBarHeight + 140
    // #endif
    this.isLoading = true
    const data = await getPlaceholder()
    const takeout_list = await getTakeoutList({type: 'discount'})
    this.takeoutList = takeout_list.data
    this.placeholderData = data.data
    this.isLoading = false
    
  }
}
</script>

<style scoped>
page {
  background: #f1f1f1;
}
</style>

<style scoped lang="scss">
@import "../../common/common.scss";
.slot-wrap {
  width: 500rpx;
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
  // #ifdef  APP-PLUS
  padding-top: 40rpx;
  // #endif
  .bg_gray {
    background: #f1f1f1;
    width: 100%;
    padding: 20rpx 0;
  }
  // #ifdef  APP-PLUS
  // .header_bg_gray {
  //   padding-top: 80rpx;
  // }
  // #endif
  .fake_input {
    width: 100%;
    height: 68rpx;
    border-radius: 50rpx;
    border: 4rpx solid $color-main;
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
.category_item {
  .category_item_image {
    width: 100rpx;
    height: 100rpx;
  }
  .category_item_name {
    text-align: center;
    color: $color-black
  }
}
.screen_box {
  padding-top: 40rpx;
  background-color: #f1f1f1;
  .screen_list {
    background-color: $color-white;
    padding: 10rpx 16rpx;
    display: inline-block;
    margin-right: 20rpx;
    border-radius: 10rpx;
  }
}

</style>
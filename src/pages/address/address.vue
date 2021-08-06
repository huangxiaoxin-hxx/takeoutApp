<template>
  <cloudPage :isLoading="isLoading">
    <u-navbar
      slot="gHeader"
      :background="headerBackground"
      :title-color="headerTitleColor"
      title="选择收获地址"
      :back-icon-color="headerBackColor"
    >
      <view slot="right" class="right-wrap font-24">
        <text>新增地址</text>
      </view>
    </u-navbar>
    <view class="address_container">
      <u-sticky :offset-top="statusBarHeight">
        <view class="bg_white">
          <!-- 头部搜索以及定位 -->
          <view class="flex p20">
            <view
              class="city flex al_center space_between"
              @click="handleNavTo({ url: '/pages/address/selectCity' })"
            >
              <u-icon
                name="location"
                custom-prefix="custom-icon"
                color="#000"
                size="36rpx"
              ></u-icon>
              <text>{{
                address.address ? address.address.city : "请选择"
              }}</text>
              <u-icon
                name="arrow-right"
                custom-prefix="custom-icon"
                color="#000"
              ></u-icon>
            </view>
            <u-input
              type="text"
              :border="true"
              class="flex1"
              @input="handleInput"
              border-color="#fa6581"
              height="60"
              @focus="handleFocus"
              @blur="handleBlur"
            />
          </view>
          <!-- 我的当前位置 -->
          <view class="my_position flex space_between p20">
            <p class="font-28">当前收获地址</p>
            <p class="font-28 ellipsis_one w-350 text_align_r">
              {{
                address.address ? address.address.poiName : "无法获取,请选择"
              }}
            </p>
          </view>
        </view>
      </u-sticky>
      <!-- 我的收获地址 -->
      <view class="my_address">
        <u-sticky :offset-top="my_address_height">
          <view class="my_address_title">
            <u-icon name="home" color="#000" size="32"></u-icon>
            <text class="ml-10 color-b font-28">我的收获地址</text>
          </view>
        </u-sticky>
        <!-- #ifdef APP-PLUS -->
        <view class="mt-50"></view>
        <!-- #endif -->
        <view
          class="my_address_list al_center"
          v-for="(item, index) in addressList.data"
          :key="index"
          @click="handleAddress(item)"
        >
          <view class="address_name mb-10">
            <text class="label mr-20 font-24">{{ item.label }}</text>
            {{ item.address }}
          </view>
          <view class="font-24">
            <text class="mr-10">{{ item.name }}</text>
            <text class="mr-30">{{ item.sex }}</text>
            <text>{{ item.phone }}</text>
          </view>
        </view>
      </view>
      <!-- 周边位置信息 h5获取不到，需真机调试 -->
      <!-- #ifdef APP-PLUS -->
      <view class="around_address">
        <u-sticky :offset-top="around_address_height">
          <view class="around_address_title">
            <u-icon
              name="location"
              custom-prefix="custom-icon"
              color="#000"
              size="32rpx"
            ></u-icon>
            <text class="ml-10 color-b font-28">附近地址</text>
          </view>
        </u-sticky>
        <view
          class="around_address_list al_center"
          v-for="(item, index) in aroundList"
          :key="index"
          @click="handleAround(item)"
        >
          {{ item.name }}
        </view>
      </view>
      <!-- #endif -->
    </view>
  </cloudPage>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { getAddressList } from "@/api/address";
// import amap from "@/utils/js_sdk/amap-wx";
import amapPlugin from "@/utils/amapPlugin";
export default {
  name: "addressPage",
  data() {
    return {
      isLoading: false,
      addressList: [],
      aroundList: [],
      my_address_height: 186,
      around_address_height: 266,
    };
  },
  computed: {
    ...mapState("address", ["address"]),
  },
  methods: {
    ...mapMutations("address", ["selelctAddress"]),
    handleInput(e) {
      console.log(e);
    },
    handleFocus() {},
    handleBlur() {},
    handleAddress(item) {
      this.selelctAddress({
        id: item.id,
        name: item.address,
      });
    },
    handleAround(item) {
      this.selelctAddress({
        id: null,
        name: item.name,
      });
    },
  },
  async onLoad() {
    // #ifdef  APP-PLUS
    var systemInfo = uni.getSystemInfoSync();
    this.my_address_height =
      this.my_address_height + systemInfo.statusBarHeight + 100;
    this.around_address_height =
      this.around_address_height + systemInfo.statusBarHeight + 100;
    // #endif
    this.isLoading = true;
    const addressList = await getAddressList();
    this.addressList = addressList.data;
    this.isLoading = false;
  },
  async onShow() {
    amapPlugin.getRegeo({
      type: "gcj02", //map 组件使用的经纬度是国测局坐标， type 为 gcj02
      success: (res) => {
        this.aroundList = res[0].regeocodeData.pois;
      },
      fail: (res) => {
        console.log(JSON.stringify(res));
      },
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/common/common.scss";
.right-wrap {
  color: $color-white;
  margin-right: 20rpx;
}
.address_container {
  width: 100%;
  .city {
    width: 160rpx;
    margin-right: 20rpx;
  }
  .my_position {
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  .my_address {
    width: 100%;
    // height: 600rpx;
    padding: 0 30rpx;
    .my_address_title {
      height: 80rpx;
      line-height: 80rpx;
      background-color: #fff;
    }
    .my_address_list {
      width: 100%;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      min-height: 120rpx;
      padding: 20rpx 0;
      box-sizing: border-box;
      .address_name {
        font-size: 28rpx;
        font-weight: 500;
        .label {
          padding: 4rpx 10rpx;
          background-color: rgba(0, 0, 0, 0.1);
          font-size: 24rpx;
          display: inline-block;
          border-radius: 4rpx;
          color: $color-main;
        }
      }
    }
  }
  .around_address {
    width: 100%;
    padding: 0 30rpx;
    .around_address_title {
      height: 80rpx;
      line-height: 80rpx;
      background-color: #fff;
    }
    .around_address_list {
      width: 100%;
      height: 100rpx;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      line-height: 100rpx;
    }
  }
}
</style>

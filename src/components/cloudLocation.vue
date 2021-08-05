<template>
  <view
    class="location_box flex al_center"
    @click="handleNavTo({ url: '/pages/address/address' })"
  >
    <u-icon
      name="location"
      custom-prefix="custom-icon"
      color="#fff"
      size="36rpx"
    ></u-icon>
    <text class="address font-24 color-w">{{
      address.address ? address.address.poiName : "定位信息失败"
    }}</text>
    <u-icon
      name="arrow-right"
      custom-prefix="custom-icon"
      color="#fff"
    ></u-icon>
  </view>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "cloudLocation",
  mounted() {
    uni.getLocation({
      type: "gcj02",
      geocode: true,
      success: (res) => {
        console.log(res);
        this.setAddress(res);
      },
      fail: function() {
        uni.showToast({
          title: "获取地址失败，将导致部分功能不可用",
          icon: "none",
        });
      },
    });
  },
  computed: {
    ...mapState("address", ["address"]),
  },
  methods: {
    ...mapMutations("address", ["setAddress"]),
  },
};
</script>

<style scoped lang="scss">
.location_box {
  padding: 0rpx 20rpx;
  box-sizing: border-box;
  .address {
    margin: 0 20rpx;
    max-width: 300rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>

<template>
  <view class="location_box flex al_center">
    <u-icon name="location" custom-prefix="custom-icon" color="#fff" size="36rpx"></u-icon>
    <text class="address font-24 color-w">{{ address ? address.poiName : '定位信息失败' }}</text>
    <u-icon name="arrow-right" custom-prefix="custom-icon" color="#fff"></u-icon>
  </view>
</template>

<script>
export default {
  name: 'cloudLocation',
  data() {
    return {
      address: null
    }
  },
  created() {
    uni.getLocation({
      type: 'gcj02',
      geocode:true,
      success: function (res) {
        this.address = res.address
      },
      fail: function () {
				uni.showToast({
				  title: '获取地址失败，将导致部分功能不可用',
					icon:'none'
				});
			}

    });
  }
}
</script>

<style scoped lang="scss">
.location_box {
  padding: 0rpx 20rpx;
  box-sizing: border-box;
  .address {
    margin: 0 20rpx;
  }
}
</style>
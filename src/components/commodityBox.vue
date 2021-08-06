<template>
  <view class="commodity_list flex">
    <image :src="commodityData.image" />
    <view class="flex1 commodity_content">
      <view class="title flex al_center">
        <image
          v-if="commodityData.discount"
          src="/static/home/list/discount.jpeg"
          class="discount_icon"
        />
        <view class="name">{{ commodityData.name }}</view>
      </view>
      <view class="flex commodity_info font-24 mt-10">
        <view class="score mr-10">
          <u-icon name="star-fill" color="#fa6581" size="24"></u-icon>
          {{ commodityData.score }}
        </view>
        <view class="month mr-20">月售{{ commodityData.monthly_sale }}</view>
      </view>
      <view class="flex font-24 delivery_info mt-10">
        <view class="delivery_start"
          >起送 ¥{{ commodityData.start_delivery }}</view
        >
        <view class="delivery_fee"
          >配送 ¥{{
            commodityData.delivery_fee > 0
              ? commodityData.delivery_fee
              : "免配送费"
          }}</view
        >
        <view class="flex1 text_align_r">
          {{ commodityData.delivery_time }}分钟
          {{ checkDistance(commodityData.delivery_distance) }}
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "commodityBox",
  props: {
    commodityData: { type: Object, default: () => {} },
  },
  methods: {
    checkDistance(distance) {
      if (distance < 1000) {
        return distance + "m";
      } else {
        return distance / 1000 + "km";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/common/common.scss";
.commodity_list {
  width: 100%;
  height: 186rpx;
  margin-bottom: 20rpx;
  background-color: #fff;
  border-radius: 10rpx;
  padding: 20rpx 20rpx;
  box-sizing: border-box;
  image {
    width: 146rpx;
    height: 146rpx;
    border-radius: 10rpx;
  }
}

.commodity_content {
  padding: 0 10rpx;
  .title {
    .discount_icon {
      width: 36rpx;
      height: 36rpx;
      margin-right: 20rpx;
    }
    .name {
      width: 400rpx;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .commodity_info {
    .score {
      color: $color-main;
    }
  }
}
</style>

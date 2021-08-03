<template>
	<!-- 动画 4 -->
	<view class='loader-ring'>
	  <view class='loader-ring-light'></view>
	  <view class='loader-ring-track'></view>
	</view>

</template>

<script>
	export default {
		name: 'loading4',
		data() {
			return {

			};
		}
	}
</script>

<style>
	/* 动画 4 样式 */
	.loader-ring {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  margin: -120rpx 0 0 -120rpx;
	  width: 240rpx;
	  height: 240rpx;
	}
	
	.loader-ring-light {
	  width: 240rpx;
	  height: 240rpx;
	  -moz-border-radius: 240rpx;
	  -webkit-border-radius: 240rpx;
	  border-radius: 240rpx;
	  -moz-box-shadow: 0 4rpx 0 #00abf2 inset;
	  -webkit-box-shadow: 0 4rpx 0 #00abf2 inset;
	  box-shadow: 0 4rpx 0 #00abf2 inset;
	  animation: rotate-360 2s linear infinite;
	}
	
	.loader-ring-track {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 240rpx;
	  height: 240rpx;
	  -moz-border-radius: 240rpx;
	  -webkit-border-radius: 240rpx;
	  border-radius: 240rpx;
	  -moz-box-shadow: 0 0 10rpx 4rpx rgba(0, 0, 0, 0.3) inset;
	  -webkit-box-shadow: 0 0 10rpx 4rpx rgba(0, 0, 0, 0.3) inset;
	  box-shadow: 0 0 10rpx 4rpx rgba(0, 0, 0, 0.3) inset;
	}
	
	@keyframes rotate-360 {
	  from {
	    -moz-transform: rotate(0);
	    -ms-transform: rotate(0);
	    -webkit-transform: rotate(0);
	    transform: rotate(0);
	  }
	  to {
	    -moz-transform: rotate(360deg);
	    -ms-transform: rotate(360deg);
	    -webkit-transform: rotate(360deg);
	    transform: rotate(360deg);
	  }
	}

</style>

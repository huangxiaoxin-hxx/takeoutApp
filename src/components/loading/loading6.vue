<template>
	<!-- 动画 6 -->
	<view class="ring">
		加载中...
		<text></text>
	</view>
</template>

<script>
	export default {
		name: 'loading6',
		data() {
			return {

			};
		}
	}
</script>

<style>
	/* 动画 6 样式 */
	.ring {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 150rpx;
		height: 150rpx;
		background: transparent;
		border: 3rpx solid #3c3c3c;
		border-radius: 50%;
		text-align: center;
		line-height: 150rpx;
		font-family: sans-serif;
		font-size: 20rpx;
		color: #fff000;
		letter-spacing: 4rpx;
		text-transform: uppercase;
		text-shadow: 0 0 10rpx #fff000;
		box-shadow: 0 0 20rpx rgba(0, 0, 0, .5);
	}

	.ring:before {
		content: '';
		position: absolute;
		top: -3rpx;
		left: -3rpx;
		width: 100%;
		height: 100%;
		border: 3rpx solid transparent;
		border-top: 3rpx solid #fff000;
		border-right: 3rpx solid #fff000;
		border-radius: 50%;
		animation: animateC 2s linear infinite;
	}

	text {
		display: block;
		position: absolute;
		top: calc(50% - 2rpx);
		left: 50%;
		width: 50%;
		height: 4rpx;
		background: transparent;
		transform-origin: left;
		animation: animate 2s linear infinite;
	}

	text:before {
		content: '';
		position: absolute;
		width: 16rpx;
		height: 16rpx;
		border-radius: 50%;
		background: #fff000;
		top: -6rpx;
		right: -8rpx;
		box-shadow: 0 0 20rpx #fff000;
	}

	@keyframes animateC {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes animate {
		0% {
			transform: rotate(45deg);
		}

		100% {
			transform: rotate(405deg);
		}
	}
</style>

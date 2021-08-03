<template>
	<!-- 动画 5 -->
	<view class="heart"></view>

</template>

<script>
	export default {
		name: 'loading5',
		data() {
			return {

			};
		}
	}
</script>

<style>
	/* 动画 5 样式 */
	.heart {
	  background-color: crimson;
	  display: inline-block;
	  width: 80rpx;
	  height: 80rpx;
	  position: relative;
	  top: 0;
	  transform: rotate(-45deg);
	  position: absolute;
	  left: 45%; 
	  top: 45%;
	  animation: heartbeat 1.25s infinite;
	}
	
	.heart::before,
	.heart::after {
	  content: "";
	  background-color: crimson;
	  width: 80rpx;
	  height: 80rpx;
	  border-radius: 50%;
	  position: absolute;
	  animation: pulsecolor 1.25s infinite;
	}
	
	.heart::before {
	  top: -40rpx;
	  left: 0;
	}
	
	.heart::after {
	  top: 0;
	  left: 40rpx;
	}
	
	@keyframes heartbeat {
		0% {
	    transform: scale(1)
	               rotate(-45deg);
		  }
		10% {
	    transform: scale(1.25)
	               rotate(-45deg);
	    background-color: #EF395E;
		  }
	  100% {
	      transform: scale(1)
	                 rotate(-45deg);
	  }
	}
	
	@keyframes pulsecolor {
	  10% {
	  background-color: #EF395E;
	  }
	}


</style>

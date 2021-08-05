import Vue from "vue";

Vue.mixin({
  data() {
    return {
      // 全局header背景颜色
      headerBackground: {
        // backgroundColor: '#001f3f',

        // 导航栏背景图
        // background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
        // 还可以设置背景图size属性
        // backgroundSize: 'cover',

        // 渐变色
        backgroundImage: "linear-gradient(45deg, #fa6581, #f74f71)",
      },
      headerTitleColor: "#fff",
      headerBackColor: "#fff",
      statusBarHeight: 0,
    };
  },
  methods: {
    // 跳转封装
    handleNavTo({ url, type = "navigateTo", animation = true }) {
      uni[type]({
        url,
        ...(animation === true
          ? { animationType: "pop-in", animationDuration: 100 }
          : animation),
      });
    },
    // 全局返回跳转
    handleNavBack({ animation = true } = {}) {
      uni.navigateBack({
        ...(animation === true
          ? { delta: 1, animationType: "pop-out", animationDuration: 100 }
          : animation),
      });
    },
  },
  onLoad() {
    // #ifdef  APP-PLUS
    var systemInfo = uni.getSystemInfoSync();
    this.statusBarHeight = systemInfo.statusBarHeight + 108;
    // #endif
  },
});

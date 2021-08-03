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
        backgroundImage: 'linear-gradient(45deg, #fa6581, #f74f71)'
      },
      headerTitleColor: "#fff"
    }
  }
})
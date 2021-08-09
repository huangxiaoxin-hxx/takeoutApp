<template>
  <cloudPage :isLoading="isLoading">
    <u-navbar
      slot="gHeader"
      :background="headerBackground"
      :title-color="headerTitleColor"
      :back-icon-color="headerBackColor"
    >
      <input
        type="text"
        placeholder="请输入搜索内容"
        class="search_input"
        placeholder-style="color: rgba(255,255,255, 0.6)"
      />
      <view slot="right" class="right-wrap font-24">
        <u-button :custom-style="searchBtnStyle">搜索</u-button>
      </view>
    </u-navbar>
    <view class="search_container">
      <view class="hot_search mb-20">
        <view class="hot_search_title">热门搜索</view>
        <view class="hot_box">
          <view
            class="hot_item mb-20 mr-20"
            v-for="(item, index) in hotSearchList && hotSearchList.data"
            :key="index"
            @click="handleHotSearch(item)"
          >
            {{ item }}
          </view>
        </view>
      </view>
      <view class="hot_search" v-if="historySearchList">
        <view class="hot_search_title">历史搜索</view>
        <view class="hot_box">
          <view
            class="hot_item mb-20 mr-20"
            v-for="(item, index) in historySearchList"
            :key="index"
          >
            {{ item }}
          </view>
        </view>
      </view>
    </view>
  </cloudPage>
</template>

<script>
import { getSearchHot } from "@/api/search";
import { setStorage, getStorage } from "@/utils";
export default {
  name: "search",
  data() {
    return {
      isLoading: false,
      searchBtnStyle: {
        width: "100rpx",
        height: "58rpx",
        fontSize: "24rpx",
        fontWeight: 500,
        lineHeight: "58rpx",
      },
      hotSearchList: null,
      historySearchList: null,
    };
  },
  methods: {
    joinHistory(history) {
      if (!this.historySearchList) {
        this.historySearchList = [history];
      } else {
        this.historySearchList = [history, ...this.historySearchList];
      }
    },
    handleHotSearch(item) {
      this.joinHistory(item);
      console.log(this.historySearchList);
    },
  },
  onLoad() {
    getSearchHot().then((res) => {
      this.hotSearchList = res.data;
    });
    this.historySearchList = getStorage("history_search");
  },
  beforeDestroy() {
    setStorage("history_search", this.historySearchList);
  },
};
</script>

<style lang="scss" scoped>
@import "@/common/common.scss";
.right-wrap {
  width: 120rpx;
}
.search_input {
  width: 530rpx;
  border-radius: 20rpx;
  border: 1px solid #fff;
  height: 58rpx;
  font-size: 24rpx;
  color: #fff;
  padding: 0 20rpx;
  box-sizing: border-box;
}
.search_container {
  padding: 20rpx;
  box-sizing: border-box;
  .hot_search {
    .hot_search_title {
      font-size: 26rpx;
      font-weight: 500;
      margin-bottom: 20rpx;
    }
    .hot_item {
      display: inline-block;
      padding: 6rpx 20rpx;
      background-color: rgba($color-main, 0.6);
      font-size: 20rpx;
      color: $color-white;
      border-radius: 10rpx;
    }
  }
}
</style>

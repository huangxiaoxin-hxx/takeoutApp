<template>
  <cloudPage>
    <u-navbar
      slot="gHeader"
      :background="headerBackground"
      :title-color="headerTitleColor"
      title="选择城市"
      :back-icon-color="headerBackColor"
    >
    </u-navbar>
    <ss-select-city
      v-model="value"
      :hot-citys="hotCitys"
      @on-select="handleCity"
    />
  </cloudPage>
</template>

<script>
const hotCitys = [
  "杭州",
  "天津",
  "北京",
  "上海",
  "深圳",
  "广州",
  "成都",
  "重庆",
  "厦门",
];

import ssSelectCity from "@/components/ss-select-city/city.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "selectCity",
  components: {
    ssSelectCity,
  },
  data() {
    return {
      value: "北京",
      hotCitys: hotCitys,
    };
  },
  computed: {
    ...mapState("address", ["address"]),
  },
  methods: {
    ...mapMutations("address", ["selectCity"]),
    handleCity(city) {
      this.selectCity({ city: city });
      this.handleNavBack();
    },
  },
  mounted() {
    if (this.address.address) {
      this.value = this.address.address.city;
    }
  },
};
</script>

<style></style>

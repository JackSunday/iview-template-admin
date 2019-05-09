<template>
  <div :class="classObj">
    <sideBar class="sidebar-container" />
    <div class="main-container">
      <app-main />
    </div>
  </div>
</template>
<script>
import { sideBar, appMain } from "./components";
import { mapGetters } from "vuex";
export default {
  name: "layout",
  components: {
    sideBar,
    appMain
  },
  computed: {
    ...mapGetters(["sideBar"]),
    classObj() {
      return {
        hideSildebar: !this.sideBar.opened,
        openSildebar: this.sideBar.opened
      };
    }
  }
};
</script>

<style lang="scss">
@import url("~~@/style/index.scss");
.openSildebar {
  min-height: 100%;
  .main-container {
    margin-left: 200px;
  }
}
.hideSildebar {
  min-height: 100%;
  .main-container {
    margin-left: 84px;
  }
  .ivu-icon-ios-arrow-down {
    display: none;
  }
}
</style>

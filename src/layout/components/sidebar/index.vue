<template>
  <div>
    <Sider hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
      <Menu theme="dark" mode="vertical" width="auto" :class="menuitemClasses">
        <sidebarItem v-for="route in routes" :key="route.path" :item="route" />
      </Menu>
    </Sider>
  </div>
</template>
<script>
import sidebarItem from "./sidebarItem";
export default {
  name: "",
  computed: {
    routes() {
      return this.$router.options.routes;
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    isCollapsed() {
      return !this.$store.getters.sideBar.opened;
    }
  },
  components: {
    sidebarItem
  }
};
</script>
<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>

<template>
  <Layout>
    <Header :style="{ padding: 0 }" class="layout-header-bar">
      <Icon
        @click.native="collapsedSider"
        :class="rotateIcon"
        :style="{ margin: '0 20px' }"
        type="md-menu"
        size="24"
      ></Icon>
    </Header>
    <Content :style="{ marginTop: '10px', background: '#fff' }">
      <router-view />
    </Content>
  </Layout>
</template>
<script>
export default {
  name: "appMain",
  computed: {
    isCollapsed() {
      return !this.$store.getters.sideBar.opened;
    },
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  methods: {
    collapsedSider() {
      this.$store.dispatch("app/toggleSideBar");
    }
  }
};
</script>
<style lang="scss" scoped>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>

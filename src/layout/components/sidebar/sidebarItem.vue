<template>
  <div v-if="!item.hidden">
    <template
      v-if="hasShowOneChild(item.children, item) && !onlyOneChild.children"
    >
      <app-link :to="resolvePath(item.path)">
        <MenuItem :name="resolvePath(item.path)">
          <Icon :type="item.meta.icon"></Icon>
          <span>{{ item.meta.title }}</span>
        </MenuItem>
      </app-link>
    </template>
    <Submenu :name="resolvePath(item.path)" v-else>
      <template slot="title">
        <Icon :type="item.meta.icon"></Icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <template v-for="child in item.children">
        <sidebarItem :item="child" :key="child.name" />
      </template>
    </Submenu>
  </div>
</template>
<script>
import AppLink from "../Link";
export default {
  name: "sidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      onlyOneChild: null
    };
  },
  components: { AppLink },
  methods: {
    hasShowOneChild(children = [], parent) {
      const showChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showChildren.length === 1) {
        return true;
      }
      if (showChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      window.console.log(routePath);
      if (routePath.includes("/")) {
        let path = routePath.replace(/\\/g, "-");
        return path;
      }
    }
  }
};
</script>

<template>
  <MdListItem 
    v-bind="$attrs" 
    @click="hideSidebar"
  >
    <slot>
      <MdIcon>{{ link.icon }}</MdIcon>
      <p>{{ link.name }}</p>
    </slot>
  </MdListItem>
</template>
<script>
export default {
  name: 'SidebarLink',
  inject: {
    autoClose: {
      default: true,
    },
  },
  props: {
    link: {
      type: [String, Object],
      default: () => {
        return {
          name: '',
          path: '',
          icon: '',
        }
      },
    },
    tag: {
      type: String,
      default: 'router-link',
    },
  },
  methods: {
    hideSidebar() {
      if (
        this.autoClose &&
        this.$sidebar &&
        this.$sidebar.showSidebar === true
      ) {
        this.$sidebar.displaySidebar(false)
      }
    },
  },
}
</script>
<style>
</style>

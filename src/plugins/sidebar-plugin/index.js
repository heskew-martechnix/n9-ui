import SideBar from '@plugins/sidebar-plugin/sidebar.vue'
import SidebarLink from '@plugins/sidebar-plugin/sidebar-link.vue'

const SidebarStore = {
  showSidebar: false,
  displaySidebar(value) {
    this.showSidebar = value
  },
}

const SidebarPlugin = {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          sidebarStore: SidebarStore,
        }
      },
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get() {
        return this.$root.sidebarStore
      },
    })
    Vue.component('side-bar', SideBar)
    Vue.component('sidebar-link', SidebarLink)
  },
}

export default SidebarPlugin

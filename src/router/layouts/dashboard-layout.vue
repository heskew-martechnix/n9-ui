<template>
  <div class="{'nav-open': $sidebar.showSidebar}">
    <Notifications />

    <SideBar>
      <MobileMenu slot="content" />
      <SidebarLink to="/eloquafieldcomparison">
        <MdIcon>dashboard</MdIcon>
        <p>Eloqua Field Comparison</p>
      </SidebarLink>
      <SidebarLink to="/eloquafieldcomparison2">
        <MdIcon>dashboard</MdIcon>
        <p>Eloqua Field Comparison Full View</p>
      </SidebarLink>
      <SidebarLink to="/user">
        <MdIcon>person</MdIcon>
        <p>Activity Log</p>
      </SidebarLink>
      <SidebarLink to="/user">
        <MdIcon>person</MdIcon>
        <p>Users</p>
      </SidebarLink>
      <SidebarLink to="/table">
        <MdIcon>content_paste</MdIcon>
        <p>Billing</p>
      </SidebarLink>
      <SidebarLink to="/notifications">
        <MdIcon>notifications</MdIcon>
        <p>Notifications</p>
      </SidebarLink>
      <SidebarLink 
        to="/upgrade" 
        class="active-pro"
      >
        <MdIcon>unarchive</MdIcon>
        <p>Upgrade to ABC</p>
      </SidebarLink>
    </SideBar>

    <div class="main-panel content">
      <div class="content-wrap">
        <TopNavbar />

        <DashboardContent />
      </div>
      <ContentFooter v-if="!$route.meta.hideFooter" />
    </div>
  </div>
</template>

<script>
import TopNavbar from './top-navbar.vue'
import ContentFooter from './content-footer.vue'
import DashboardContent from './dashboard-content.vue'
import MobileMenu from '@layouts/mobile-menu.vue'
import SideBar from '@plugins/sidebar-plugin/sidebar.vue'
import SidebarLink from '@plugins/sidebar-plugin/sidebar-link.vue'

export default {
  components: {
    TopNavbar,
    DashboardContent,
    ContentFooter,
    MobileMenu,
    SideBar,
    SidebarLink,
  },
}
</script>
<style>
.content {
  position: relative;
  min-height: 100vh;
}
.content-wrap {
  padding-bottom: 75px; /* footer height*/
}
</style>

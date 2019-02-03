<template>
  <div 
    class="sidebar" 
    :data-color="activeColor" 
    :style="sidebarStyle"
  >
    <div class="logo margin-left-side-bar">
      <a
        href="https://www.martechnix.com"
        target="_blank"
        class="simple-texcct logo-normal logo-font"
      >
        {{ $t('components.sideBar.title') }}
      </a>
    </div>
    <div class="sidebar-wrapper">
      <slot name="content" />
      <MdList class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <SidebarLink
            v-for="(link,index) in sidebarLinks"
            :key="link.name + index"
            :to="link.path"
            :link="link"
          />
        </slot>
      </MdList>
    </div>
  </div>
</template>
<script>
import SidebarLink from './sidebar-link.vue'

export default {
  name: 'SideBar',
  components: {
    SidebarLink,
  },
  props: {
    title: {
      type: String,
      default: 'MARTECHNIX',
    },
    backgroundImage: {
      type: String,
      default: require('@assets/images/sidebar-2.jpg'),
    },
    imgLogo: {
      type: String,
      default: require('@assets/images/martechnix4.png'),
    },
    activeColor: {
      type: String,
      default: 'purple',
      validator: value => {
        let acceptedValues = ['', 'purple', 'blue', 'green', 'orange', 'red']
        return acceptedValues.indexOf(value) !== -1
      },
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
  },
  provide() {
    return {
      autoClose: this.autoClose,
    }
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundColor: `${this.activeColor}`,
      }
    },
  },
}
</script>
<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
.logo-font {
  font-family: 'Titillium Web', sans-serif;
  font-size: 28px;
  color: #ffffff !important;
  text-transform: uppercase;
  padding: 5px 0px;
  display: block;
  /* font-weight: 400; */
  line-height: 30px;
  text-decoration: none;
}

.margin-left-side-bar {
  margin-left: 30px;
}
</style>

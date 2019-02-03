<template>
  <footer class="footer footer-bottom">
    <div class="container">
      <nav>
        <ul>
          <li>
            <router-link :to="{path:'/dashboard'}">
              Home
            </router-link>
          </li>
          <li>
            <a href="#">
              Company
            </a>
          </li>
          <li>
            <a href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a
          href="https://www.martechnix.com"
          target="_blank"
        >
          Martechnix
        </a>, making your Martech stack sing
      </div>
    </div>
  </footer>
</template>
<script>
export default {}
</script>
<style>
.footer-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 75px;
}
</style>

<script>
import appConfig from '@src/app.config'
// import Layout from '@layouts/main'
import Layout from '@layouts/dashboard-layout'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <h1>Home Page</h1>jjjjjjjjjjkkkkkkkkkkkk
    <img 
      src="@assets/images/logo.png" 
      alt="Logo"
    >
  </Layout>
</template>

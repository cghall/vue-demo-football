<template>
  <div id="app">
      <PageLayout>
        <router-view></router-view>
      </PageLayout>      
  </div>
</template>

<script>
import PageLayout from './PageLayout.vue'

export default {
  name: 'app',
  components: {
    PageLayout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

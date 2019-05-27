<template>
  <div id="app">
    <NavBar />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

 <script>
  import NavBar from '@/components/NavBar.vue'
  import { BContainer } from 'bootstrap-vue/es/components';

  export default {
    components: {
      NavBar,
      BContainer
    }
  }
</script>

<style>
.container {
  padding-top: 80px;
}
</style>

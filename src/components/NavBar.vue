<template>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand><b-link :to="{name: 'host-list'}" class="Brand">Analize Server App</b-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item><b-link :to="{name: 'host-list'}">History</b-link></b-nav-item>
          <b-nav-item><b-link :to="{name: 'host-analize'}">Analize</b-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
import { 
  BNavbar, 
  BNavbarNav, 
  BNavItem, 
  BNavbarBrand, 
  BNavbarToggle,
  BCollapse,
  BLink } from 'bootstrap-vue/es/components';

export default {
  components: {
    BNavbar,
    BNavbarNav,
    BNavItem,
    BNavbarBrand,
    BNavbarToggle,
    BCollapse,
    BLink
  }
};
</script>

<style scoped>
.router-link-active {
  color: white;
}

.nav-link a {
  color: white;
}
</style>
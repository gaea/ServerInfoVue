<template>
  <router-link class="host-link" :to="{name: 'host-detail', params: { domain: host.host}}">
    <b-card :title="host.title" :sub-title="host.host" tag="article">
      <b-card-text>
        <BaseIcon name="server">{{ host.servers.length}} servers</BaseIcon>
      </b-card-text>
    </b-card>
  </router-link> 
</template>

<script>
import { BCard } from 'bootstrap-vue/es/components';

export default {
  components: {
    BCard
  },
  props: {
    host: Object
  }
};
</script>

<style scoped>
.host-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
  margin-top: 20px;
}

.card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
</style>

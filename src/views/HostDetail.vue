<template>
  <b-card 
    :header="host.host"
    :title="host.title" 
    tag="article">
    <b-list-group flush>
      <b-list-group-item>
        <p>Logo <span class="font-weight-bold">{{ host.logo }}</span></p>
        <p>SSL grade <span class="font-weight-bold">{{ host.ssl_grade }}</span></p>
        <p>Previous SSL grade <span class="font-weight-bold">{{ host.previous_ssl_grade }}</span></p>
        <p>Servers changed <span class="font-weight-bold">{{ host.servers_changed }}</span></p>
        <p>Is down <span class="font-weight-bold">{{ host.is_down }}</span></p>
      </b-list-group-item>
      <b-list-group-item>
        <BaseIcon name="server"><h4>Servers: {{ host.servers ? host.servers.length : 0 }}</h4></BaseIcon>
        <b-card-group deck deck>
          <ServerCard v-for="server in host.servers" :server="server"/>
        </b-card-group>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
import ServerCard from '@/components/ServerCard.vue';
import EventService from '@/services/HostService.js';
import { 
  BCardGroup,
  BCard,
  BListGroupItem,
  BListGroup } from 'bootstrap-vue/es/components';

export default {
  components: {
    ServerCard,
    BCardGroup,
    BCard,
    BListGroupItem,
    BListGroup
  },
  props: ['domain'],
  data() {
    return {
      host: {}
    }
  },
  created() {
    EventService.getHostDetail(this.domain)
      .then(response => {
        this.host = response.data;
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      });
  }
};
</script>

<style scoped>
</style>

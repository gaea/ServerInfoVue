<template>
  <div>
    <h1>Search History</h1>
    <b-card-group deck deck>
      <HostCard v-for="host in hosts" :host="host"/>
    </b-card-group>
  </div>
</template>

<script>
import HostCard from '@/components/HostCard.vue';
import EventService from '@/services/HostService.js';
import { BCardGroup } from 'bootstrap-vue/es/components';

export default {
  components: {
    HostCard,
    BCardGroup
  },
  data() {
    return {
      hosts: []
    }
  },
  created() {
    EventService.getSearches()
      .then(response => {
        this.hosts = response.data.items;
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      });
  }
};
</script>

<template>
  <b-card 
    :header="server.address"
    :title="server.server_name" 
    tag="article">
    <b-list-group flush>
      <b-list-group-item>
        <p>SSL grade <span class="font-weight-bold">{{ server.ssl_grade }}</span></p>
        <p>Country <span class="font-weight-bold">{{ server.country }}</span></p>
        <p>owner <span class="font-weight-bold">{{ server.owner }}</span></p>
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
import { BCard } from 'bootstrap-vue/es/components';

export default {
  components: {
    BCard
  },
  props: {
    server: Object
  }
}
</script>

<style scoped>
.card {
  margin-top: 20px;
  min-width: 20rem;
}
</style>

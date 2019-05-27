<template>
  <div>
    <h1>Analize a Domain</h1>
    <b-form @submit.prevent="analize">
      <b-form-group
        id="group-domain"
        label=""
        label-for="domain"
        description="Please type the domain to analize"
      >
        <b-form-input
            id="domain"
            v-model="host.domain"
            type="text"
            required
            placeholder=""
          ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <b-modal id="bv-modal-analize" ref="modal-analize" hide-footer>
      <template slot="modal-title">
        Analisys Status
      </template>
      <div class="d-block text-center">
        <h3>{{ error.message }}</h3>
      </div>
    </b-modal>
  </div>
</template>

<script>
import EventService from '@/services/HostService.js';
import { 
  BForm,
  BFormGroup,
  BFormInput,
  BButton,
  BModal } from 'bootstrap-vue/es/components';

export default {
  components: {
    BForm,
    BFormGroup,
    BButton,
    BFormInput,
    BModal
  },
  data() {
    return {
      host: {
        domain: ''
      },
      error: {
        message: ''
      }
    }
  },
  methods: {
    analize() {
      EventService.analizeDomain(this.host.domain)
      .then(response => {
        console.log(response.data);
        this.$router.push('/host/' + response.data.host)
      })
      .catch(error => {
        this.error.message = error.response.data.message;
        this.$refs['modal-analize'].show();
      });
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>

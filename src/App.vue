<template>
  <div id="app">
    <div>
      <h2 class="title is-2">Donation Form</h2>
    </div>
      <p>Step: {{ step + 1 }}</p>
      <SchemaWizard
        :schema="schema"
        :step="step"
        v-model="userData"
      >
        <b-button
          v-if="step < schema.length - 1"
          @click="step++">
          Next
        </b-button>
        <b-button
          v-if="step > 0"
          @click="step--">
          Back
        </b-button>
      </SchemaWizard>
  </div>
</template>

<script>
import { SchemaWizard } from 'formvuelatte';
import Input from './components/Input';

const SCHEMA = [
  {
    firstName: {
      component: Input,
      label: 'First Name',
    },
    lastName: {
      component: Input,
      label: 'Last Name',
    }
  },
  {
    email: {
      component: Input,
      label: 'Your email',
      required: true,
      config: {
        type: 'email'
      }
    }
  },
  {
    address: {
      component: Input,
      label: 'Work address'
    }
  }
];

export default {
  components: {
    SchemaWizard
  },
  data() {
    return {
      userData: [],
      step: 0
    }
  },
  computed: {
    schema() {
      return SCHEMA
    }
  }
}
</script>
<style lang="scss">
 #app {
   h2 {
     margin-bottom: 40px;
   }
   button {
     margin-top: 20px;
   }
    display: flex;
    flex-direction: column;
    align-items: center;
 }
</style>

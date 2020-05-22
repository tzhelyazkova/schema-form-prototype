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
          type="is-primary"
          v-if="step < schema.length - 1"
          @click="step++">
          Next
        </b-button>
        <b-button
          type="is-primary"
          v-if="step > 0"
          @click="step--">
          Back
        </b-button>
      </SchemaWizard>
      <pre>{{ userData }}</pre>
  </div>
</template>

<script>
import { SchemaWizard } from 'formvuelatte';
import Input from './components/Input';
import RadioGroup from './components/RadioGroup';
import Checkbox from './components/Checkbox';

const SCHEMA = [
  // Name
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
  // Payment Method
  {
    payment: {
      component: RadioGroup,
      name: 'payment',
      default: 'bankTransfer',
      options: [
        {
          label: 'Credit Card',
          radio: 'creditCard',
        },
        {
          label: 'Bank Transfer',
          radio: 'bankTransfer',
        },
        {
          label: 'Paypal',
          radio: 'paypal',
        }
      ]
    }
  },
  // Contact info
  {
    address: {
      component: Input,
      label: 'Work address'
    },
    email: {
      component: Input,
      label: 'Your email',
      required: true,
      config: {
        type: 'email'
      }
    }
  },
  // Preferences
  {
    receipt: {
      component: Checkbox,
      label: 'I want a receipt for my donation'
    },
    newsletter: {
      component: Checkbox,
      label: 'I want to receive wmde\'s newsletter'
    }
  }
];

export default {
  components: {
    SchemaWizard
  },
  data() {
    return {
      userData: [
      ],
      step: 0
    }
  },
  computed: {
    schema() {
      return SCHEMA
    },
    default() {
      return 'creditCard'
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
     margin-right: 20px;
   }
    display: flex;
    flex-direction: column;
    align-items: center;
 }
</style>

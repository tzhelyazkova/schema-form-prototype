<template>
  <div id="app">
    <h1 class="title is-1">Donation Form</h1>
    <SchemaForm :schema="mySchema" :value="formData" />
  </div>
</template>

<script>
import { SchemaForm } from 'formvuelatte';

export default {
  components: {
    SchemaForm
  },
  data() {
    return {
      formData: {},
      mySchema: { 
        //some schema here
      }
    }
  }
}
</script>


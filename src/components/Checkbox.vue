<template>
<div class="field">
     <b-checkbox v-on="$listeners">{{ label }}</b-checkbox>
</div>
</template>

<script>
export default {
    props: [
        'label',
    ]
}
</script>

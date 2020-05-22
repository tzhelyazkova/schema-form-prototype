<template>
<div>
    <div class="field" v-for="option in options"
        :key="option.radio"
    >
        <b-radio
            :name="name"
            :value="value"
            @input="$emit('input', option.radio)"
            :native-value="option.radio"
        >
            {{ option.label }}
        </b-radio>
    </div>
</div>
</template>

<script>
export default {
    props: [
        'name',
        'options',
        'value',
        'default',
    ],
    created() {
        if (!this.value && this.default) {
            this.$emit('input', this.default)
        }
    }
}
</script>
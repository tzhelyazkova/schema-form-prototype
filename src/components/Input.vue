<template>
    <div>
        <b-field :label="label">
            <b-input :input="input" v-on="$listeners">
            </b-input>
        </b-field>
    </div>
</template>

<script>
export default {
    props: [
        'label',
        'input'
    ]
}
</script>
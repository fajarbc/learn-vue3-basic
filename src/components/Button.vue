<template>
    <button class="btn py-2 px-4 rounded shadow" @click="onClick()">
        <FAIcon :icon="icon" /> 
        {{ text }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: String,
        icon: String,
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        },
    },
}
</script>
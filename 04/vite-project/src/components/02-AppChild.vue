<template>
    <p>子组件</p>
    <p>{{ num }}</p>
    <button @click="hdClick"></button>
</template>

<script setup lang="ts">
import { } from 'vue'

defineProps({
    num: {
        type: Number,
        default: 20
    }

})
const emit = defineEmits<{
    (event: 'update:num'): void
}>()

const hdClick = () => {
    emit('update:num', 40)
}

</script>

<style lang=less scoped>

</style>
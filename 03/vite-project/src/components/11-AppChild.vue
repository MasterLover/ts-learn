<template>
    <p>这是子组件</p>
    <p>{{ num }}</p>
    <button @click="hdClick">按钮</button>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps({
    num: {
        type: Number,
        default: 100
    }
})

const emit = defineEmits<{
    (event: 'fn'): void
}>()
const hdClick = () => {
    emit('fn')
}
</script>

<style scoped>

</style>
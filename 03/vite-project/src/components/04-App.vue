<template>
    <p ref="op">这是标签</p>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from 'vue'

export default defineComponent({
    setup() {
        let op = ref();
        console.log("setup:", op.value);

        // onMounted(() => {
        //     console.log("onmounted:",op)
        //     console.log("onmounted:",op.value)
        // })
        nextTick(() => {
            console.log("onmounted:", op)
            console.log("onmounted:", op.value)
        })
        return { op }
    }
})
</script>

<style scoped>

</style>
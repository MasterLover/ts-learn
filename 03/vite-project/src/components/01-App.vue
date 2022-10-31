<template>
    <div>
        <h1>这是第一个App</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from 'vue';

export default defineComponent({
    setup() {
        console.log("执行了 setup")
        onBeforeMount(() => {
            console.log("执行了 onBeforeMount")
        })
        onMounted(() => {
            console.log("执行了 onMount")
        })
    }
})

</script>

<style lang="less" scoped>

</style>

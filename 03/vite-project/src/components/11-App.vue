<template>
    <Child :num="num" @fn="changeNum"></Child>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Child from "./11-AppChild.vue"
let num = ref(20)

const changeNum = () => {
    num.value++;
}

</script>

<style scoped>

</style>
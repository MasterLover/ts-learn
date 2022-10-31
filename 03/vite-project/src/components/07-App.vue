<template>
    <div>
        <p>{{ num }}</p>
        <button @click="num++">hello</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';

let obj = {
    num: 20
}

const objRef = reactive(obj)
let { num } = toRefs(objRef)
</script>

<style scoped>

</style>
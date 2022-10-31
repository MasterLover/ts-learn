<template>
    <div>
        <p>{{ num }}</p>
        <button @click="num++">按钮</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs, watch, watchEffect } from 'vue';

// let num = ref(20)
// watch(num, (newvalue, oldvalue) => {

//     console.log("newvalue:", newvalue)
//     console.log("oldvalue", oldvalue)
// })


let obj = { num: 30 };

let objRet = reactive(obj)

let { num } = toRefs(objRet)

watch(num, (newV, oldV) => {
    console.log("newvalue:", newV)
    console.log("oldvalue", oldV)
})

watchEffect( () => {
    console.log("effect", objRet)
})
</script>

<style scoped>

</style>
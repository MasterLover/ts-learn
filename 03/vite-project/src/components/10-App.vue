<template>
    <div>
        <p>{{ dbNum }}</p>
        <p>{{ dbNum2 }}</p>
    </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';


let num = ref(20)

let dbNum = computed(() => {
    return num.value * 2;
})

let obj = {
    num: 10
}
let objRet = reactive(obj)

let dbNum2 = computed(() => {
    return objRet.num * 2;
})
</script>

<style scoped>

</style>
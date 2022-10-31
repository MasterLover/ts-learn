<template>
    <input type="checkbox" v-model="checkAll">全选/全部选
    <ul>
        <li v-for=" item, index in list" :key="index">
            <input type="checkbox" v-model="checkList[index]">{{ item }}
        </li>
    </ul>
</template>

<script setup lang="ts">

import { computed, reactive, ref, toRefs } from 'vue'

let data = {
    list: [10, 20, 30, 40],
    checkList: [false, false, false, false]
};
let { list, checkList } = toRefs(reactive(data))

let checkAll = computed({
    get() {
        return !data.checkList.includes(false)
    },
    set(value: boolean) {
        console.log();
        checkList.value = checkList.value.map(() => value)

    }
})

</script>

<style scoped>

</style>
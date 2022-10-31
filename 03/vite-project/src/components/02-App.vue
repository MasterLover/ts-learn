<template>
    <div>
        <p>{{ num }}</p>
        <button @click="num++"> 按钮++</button>
        <button @click="hdClick"> 按钮</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {

        // let num = 20
        let num = ref(20)
        const hdClick = () => {
            num.value++;
            console.log(num.value);

        }
        return {
            num,
            hdClick
        }
    }
})
</script>

<style lang="less">

</style>
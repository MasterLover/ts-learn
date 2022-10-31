<template>
    <div>
        <p>{{ objRef.num }}</p>
        <button @click="objRef.num++"> 按钮++</button>
        <button @click="hdClick"> 按钮</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {

        let objRef = ref({
            num: 30
        })
        console.log(objRef);

        const hdClick = () => {
            objRef.value.num++;
        }
        return {
            objRef,
            hdClick
        }
    }
})
</script>

<style scoped>

</style>
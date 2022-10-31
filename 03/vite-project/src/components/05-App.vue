<template>
    <div>
        <p>{{ objRef.num }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    setup() {
        let obj = {
            num: 20
        }
        const objRef = reactive(obj)
        console.log(objRef);
        return {
            objRef
        }
    }
})
</script>

<style scoped>

</style>
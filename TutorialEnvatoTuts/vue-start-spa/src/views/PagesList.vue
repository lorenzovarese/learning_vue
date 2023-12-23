<template>
    <p>{{ counter }}</p> <!--Second option requires data.counter-->
    <button class="btn btn-primary" @click.prevent="increment">Increment</button>
</template>

<script setup>
// After the composition API
import { reactive, ref } from 'vue';

// First option
let counter = ref(0); // {value: 0}

function increment() {
    counter.value++;
}

// Second option
// const data = reactive({
//     counter: 0
// });

// function increment() {
//     data.counter++;
// }

// Before the composition API
// export default {
//     data() {
//         return {
//             counter: 0
//         }
//     },
//     methods: {
//         increment() {
//             this.counter++;
//         }
//     }
// }
</script>
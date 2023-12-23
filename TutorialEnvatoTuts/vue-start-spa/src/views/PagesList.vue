<template>
    <h4>Pages</h4>
    <div class="text-end">
        <router-link 
            to="pages/create"
            class="btn btn-primary btn-sm"
            active-class="active"
            aria-current="page"
        >Create Page</router-link >
    </div>
    <table class="table table-striped table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Text</th>
                <th>Is published</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(page, index) in $pages.getAllPages()"
                :key="index"
            >
                <td>{{ page.pageTitle }}</td>
                <td>{{ page.link.text }}</td>
                <td>{{ page.published ? 'yes' : 'no'}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
// After the composition API
import { reactive, ref, inject } from 'vue';

// First option
// let counter = ref(0); // {value: 0}

// function increment() {
//     counter.value++;
// }

// Second option
// const data = reactive({
//     counter: 0
// });

// function increment() {
//     data.counter++;
// }

const $pages = inject('$pages');

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
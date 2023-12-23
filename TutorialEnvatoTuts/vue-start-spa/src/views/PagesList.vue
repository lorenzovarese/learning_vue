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
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Title</th>
                <th>Link Text</th>
                <th>Is published</th>
            </tr>
        </thead>
        <tbody>
            <!--Add the logic of redirect to edit page then we click on the table row tr-->
            <tr v-for="(page, index) in $pages.getAllPages()"
                :key="index"
                @click.prevent="goToPage(index)"
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
import { useRouter } from 'vue-router';

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
const router = useRouter();

function goToPage(index) {
    router.push({path: `/pages/${index}/edit`});
}

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

<style scoped>
.table.table-hover tr:hover {
    cursor: pointer;
}
</style>
<template>
    <navbar></navbar>

    <router-view></router-view>

    <!-- v-show generate the element but hides it (css' display none), v-if instead inject the element iff the value is true-->
    <!-- <div v-show="false">hide this content</div>
    <page-viewer 
        v-if="pages.length > 0"
        :page="pages[activePage]">
    </page-viewer>

    <create-page
        @page-created="pageCreated"
    ></create-page> -->
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
    components: {
        Navbar
    },
    methods:{
        pageCreated(page) {
            this.pages.push(page);
        }
    }
}
</script>

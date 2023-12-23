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
import PageViewer from './components/PageViewer.vue'
import Navbar from './components/Navbar.vue';
import CreatePage from './components/CreatePage.vue';

export default {
    components: {
        PageViewer,
        Navbar,
        CreatePage
    },
    methods:{
        pageCreated(page) {
            this.pages.push(page);
        }
    }
}
</script>

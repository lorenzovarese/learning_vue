<template>
    <navbar 
        :pages="pages" 
        :active-page="activePage"
        :nav-link-click="(index) => activePage = index">
    </navbar>

    <!-- v-show generate the element but hides it (css' display none), v-if instead inject the element iff the value is true-->
    <div v-show="false">hide this content</div>
    <page-viewer 
        v-if="pages.length > 0"
        :page="pages[activePage]">
    </page-viewer>
</template>

<script>
import PageViewer from './components/PageViewer.vue'
import Navbar from './components/Navbar.vue';

export default {
    components: {
        PageViewer,
        Navbar
    },
    created() {
        this.getPages();
    },
    data() {
        return {
            activePage: 0,
            pages: []
        };
    },
    methods:{
        async getPages() {
            const result = await fetch('pages.json');
            const pages = await result.json();
            this.pages = pages;
        }
    }
}
</script>

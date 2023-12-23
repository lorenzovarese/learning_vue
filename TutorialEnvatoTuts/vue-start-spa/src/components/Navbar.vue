<template>
    <nav class="navbar navbar-expand-lg" :class="[`navbar-${theme}`, `bg-${theme}`, navbar, navbar - expand - lg]">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav">
                <li v-for="(page, index) in publishedPages" class="nav-item" :key="index">
                    <navbar-link 
                        :page="page" 
                        :isActive="activePage === index"
                        @click.prevent="navLinkClick(index)"
                    ></navbar-link>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle</button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default {
    components: {
        NavbarLink
    },
    created() {
        this.getThemeSetting();
    },
    computed: {
        publishedPages() {
            return this.pages.filter(page => page.published);
        }
    },
    props: ['pages', 'activePage', 'navLinkClick'],
    data() {
        return {
            theme: 'light'
        }
    },
    methods: {
        changeTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
            this.storeThemeSetting();
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme);
        },
        getThemeSetting() {
            const theme = localStorage.getItem('theme');
            if (theme) {
                this.theme = theme;
            }
        }
    }
}
</script>
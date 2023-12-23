<template>
    <nav class="navbar navbar-expand-lg" :class="[`navbar-${theme}`, `bg-${theme}`, navbar, navbar - expand - lg]">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav">
                    <navbar-link 
                        v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                        :page="page"
                        :index="index"
                    ></navbar-link>

                    <li>
                        <!--Now if we move to the create (that is a different component) the router works properly
                            in case of the same component (i.e. from Home to About) the routing works only after additional work-->
                        <router-link 
                            to="/create"
                            class="nav-link" 
                            active-class="active"
                            aria-current="page"
                        >Create</router-link >
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

        this.pages = this.$pages.getAllPages();
    },
    computed: {
        publishedPages() {
            return this.pages.filter(page => page.published);
        }
    },
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
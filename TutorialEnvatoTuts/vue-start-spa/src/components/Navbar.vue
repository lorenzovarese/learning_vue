<template>
    <nav class="navbar navbar-expand-lg" :class="[`navbar-${theme}`, `bg-${theme}`, navbar, navbar - expand - lg]">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav">
                <li v-for="(page, index) in pages" class="nav-item" :key="index">
                    <!-- v-bind:href=page.url is equal to :href=page.url-->
                    <a class="nav-link" :class="{ active: activePage === index }" aria-current="page" :href=page.link.url
                        :title="`This title goes to the ${page.link.text} page`" v-on:click.prevent="navLinkClick(index)">
                        <!-- v-on:click is equal to @click -->
                        <!-- v-on:click.prevent prevent the move tho href link-->
                        <!-- to use string interpolation, we need to use backticks -->
                        {{ page.link.text }}
                    </a>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['pages', 'activePage', 'theme', 'navLinkClick'],
    data() {
        return {
            theme: 'light'
        }
    },
    methods: {
        changeTheme() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark';
        }
    }
}
</script>
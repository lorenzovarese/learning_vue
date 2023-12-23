<template>
    <li>
        <a 
            class="nav-link" 
            :class="activeClasses" 
            aria-current="page" 
            :href=page.link.url
            :title="`This title goes to the ${page.link.text} page`"
            @click.prevent="$bus.$emit('navbarLinkActivated', index)">
            <!-- v-on:click is equal to @click -->
            <!-- v-on:click.prevent prevent the move tho href link-->
            <!-- to use string interpolation, we need to use backticks -->
            {{ page.link.text }}
        </a>
    </li>
</template>

<script>
export default {
    props: ['page', 'index', 'isActive'],
    computed: {
        activeClasses() {
            return {
                active: this.isActive,
                emphasize: this.isActive
            };
        }
    }
}
</script>
<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>
<template>
    <li>
        <router-link 
            :to="`/${index}`"
            class="nav-link" 
            active-class="active"
            aria-current="page" 
            :title="`This title goes to the ${page.link.text} page`">
            <!-- v-on:click is equal to @click -->
            <!-- v-on:click.prevent prevent the move tho href link-->
            <!-- to use string interpolation, we need to use backticks -->
            {{ page.link.text }}
        </router-link >
    </li>
</template>

<script>
export default {
    props: ['page', 'index'],
}
</script>
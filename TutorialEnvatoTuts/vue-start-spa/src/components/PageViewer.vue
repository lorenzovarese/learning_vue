<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
        <!-- <h1 class="emphasize">Page Title</h1>
        <p>{{this.$route.params.index}}</p> -->
    </div>
</template>

<script>
export default{
    created(){
        //console.log(this.$route.params);
        this.page = this.$pages.getSinglePage(this.$route.params.index);
    },
    data(){
        return {
            page: null
        }
    }
}
</script>

<style scoped>
    .emphasize {
        color: blue;
    }
</style>
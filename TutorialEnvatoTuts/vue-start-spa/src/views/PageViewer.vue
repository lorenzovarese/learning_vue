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
    props: ['index'],
    inject: ['$pages'],
    created(){
        //console.log(this.$route.params);
        
        this.page = this.$pages.getSinglePage(this.index);
        //this.page = this.$pages.getSinglePage(this.$route.params.index);

        // this.$watch(() =>  this.$route.params, (newParms, oldParams) => {
        //     this.page = this.$pages.getSinglePage(newParms.index);
        // });
    },
    data(){
        return {
            page: null
        }
    },
    watch: {
        index(newIndex, oldIndex){
            this.page = this.$pages.getSinglePage(newIndex);
        }
    }
}
</script>

<style scoped>
    .emphasize {
        color: blue;
    }
</style>
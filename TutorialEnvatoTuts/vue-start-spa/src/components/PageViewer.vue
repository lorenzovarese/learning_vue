<template>
    <div class="container">
        <!-- <h1 class="emphasize">{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p> -->
        <h1 class="emphasize">Page Title</h1>
        <p>Content</p>
    </div>
</template>

<script>
export default{
    props: {
        page: {
            type: Object,
            default(rawPromps) {
                return {
                    pageTitle: '',
                    content: ''
                }
            
            }
        }
    }
}
</script>

<style scoped>
    .emphasize {
        color: blue;
    }
</style>
<template>
    <form action="" class="container mb-3">
        <div class="row">
            <div class="col-md-8">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Page Title
                    </label>
                    <input type="text" class="form-control" v-model="pageTitle">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Content</label>
                    <textarea type="text" class="form-control" rows="5" v-model="content"></textarea>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary" :disabled="isFormInvalid" @click.prevent="submitForm">Create
                        Page</button>
                </div>
            </div>
            <div class="col">
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link Text
                    </label>
                    <input type="text" class="form-control" v-model="linkText">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">
                        Link URL
                    </label>
                    <input type="text" class="form-control" v-model="linkUrl">
                </div>
                <div class="row mb-3">
                    <div for="" class="form-check">
                        <input type="checkbox" class="form-check-input" v-model="published">
                        <label for="gridCheck1" class="form-check-label">
                            Published
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    emits: {
        pageCreated(page){
            console.log('This is a log after pageCreation')
        }
    },
    computed: {
        isFormInvalid() {
            return !this.pageTitle || !this.content || !this.linkText || !this.linkUrl;
        }
    },
    data() {
        return {
            pageTitle: '',
            content: '',
            linkText: '',
            linkUrl: '.html',
            published: false
        }
    },
    methods: {
        submitForm() {
            if (this.isFormInvalid) {
                alert('Please fill out all fields');
                return;
            }

            this.$emit('pageCreated', {
                pageTitle: this.pageTitle,
                content: this.content,
                link: {
                    text: this.linkText,
                    url: this.linkUrl
                },
                published: this.published
            });

            this.clearForm();
        },
        clearForm() {
            this.pageTitle = '';
            this.content = '';
            this.linkText = '';
            this.linkUrl = '.html';
            this.published = false;
        }
    },
    watch: {
        pageTitle(newTitle, oldTitle) {
            if (this.linkText === oldTitle) {
                this.linkText = newTitle
            }
        },
        linkText(newLinkText, oldLinkText) {
            if (this.linkUrl === `${oldLinkText}.html`) {
                this.linkUrl = `${newLinkText}.html`
            }
        }
    }
}
</script>
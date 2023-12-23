import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:index?', // The question mark makes the index parameter optional.
            component: PageViewer,
            props: true
        },
        {
            path: '/create',
            component: CreatePage
        }
    ]
});

export default router;
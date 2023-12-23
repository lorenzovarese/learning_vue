import {createRouter, createWebHashHistory} from 'vue-router';
import PageViewer from './views/PageViewer.vue';
import CreatePage from './views/CreatePage.vue';
import Pages from './views/Pages.vue';
import PagesList from './views/PagesList.vue';
import PageEdit from './views/PageEdit.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/:index?', // The question mark makes the index parameter optional.
            component: PageViewer,
            props: true
        },
        {
            path: '/pages',
            component: Pages,
            children: [
                {
                    path: '',
                    component: PagesList,
                    props: true
                },
                {
                    path: 'create',
                    component: CreatePage
                },
                {
                    path: ':index/edit',
                    component: PageEdit,
                    props: true
                }
            ]
        }
    ]
});

export default router;
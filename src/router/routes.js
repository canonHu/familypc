import Page404 from '../components/page-404.vue';
import Home from '../components/home.vue';

export default [
    {
        name: 'home',
        path: '/',
        component: Home,
        meta: { title: '首页' },
    },
    {
        name: '404',
        path: '*',
        component: Page404,
        meta: { title: '404 当前页面不存在！' },
    }
]
import { App } from 'vue';
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import("../views/login/login.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes//路由配置
})

export const initRouter = (app: App<Element>) => {
    app.use(router)
}

export default router
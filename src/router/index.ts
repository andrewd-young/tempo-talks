import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Albums from '@/views/Albums.vue';
import Songs from '@/views/Songs.vue';
import Profile from '@/views/Profile.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/albums',
            name: 'Albums',
            component: Albums,
        },
        {
            path: '/songs',
            name: 'Songs',
            component: Songs,
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
        },
    ],
});

export default router;

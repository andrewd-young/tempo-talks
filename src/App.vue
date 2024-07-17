<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-blue-600 text-white p-4">
            <div class="container mx-auto flex justify-between items-center">
                <router-link
                    to="/"
                    class="text-2xl font-bold"
                    >MusicReview</router-link
                >
                <div>
                    <router-link
                        to="/"
                        class="mr-4"
                        >Home</router-link
                    >
                    <router-link
                        to="/albums"
                        class="mr-4"
                        >Albums</router-link
                    >
                    <router-link
                        to="/songs"
                        class="mr-4"
                        >Songs</router-link
                    >
                    <router-link to="/profile">Profile</router-link>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'App',
    };
</script>

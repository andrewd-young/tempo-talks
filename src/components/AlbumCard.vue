<template>
    <div class="bg-white p-4 rounded-lg shadow-md">
        <img
            :src="album.coverUrl"
            :alt="album.title"
            class="w-full h-48 object-cover rounded-md mb-4" />
        <h3 class="text-lg font-semibold mb-2">{{ album.title }}</h3>
        <p class="text-gray-600 mb-2">{{ album.artist }}</p>
        <div class="flex items-center">
            <span class="text-yellow-500 mr-1">★</span>
            <span>{{ album.rating }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'AlbumCard',
        props: {
            album: {
                type: Object,
                required: true,
            },
        },
    };
</script>

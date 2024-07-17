<template>
    <div class="bg-white p-4 rounded-lg shadow-md flex items-center">
        <img
            :src="song.albumCoverUrl"
            :alt="song.album"
            class="w-16 h-16 object-cover rounded-md mr-4" />
        <div>
            <h3 class="text-lg font-semibold">{{ song.title }}</h3>
            <p class="text-gray-600">{{ song.artist }}</p>
        </div>
        <div class="ml-auto flex items-center">
            <span class="text-yellow-500 mr-1">★</span>
            <span>{{ song.rating }}</span>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'SongListItem',
        props: {
            song: {
                type: Object,
                required: true,
            },
        },
    };
</script>

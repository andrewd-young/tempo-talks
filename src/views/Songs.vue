<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-4xl font-bold mb-8">Songs</h1>
        <div class="space-y-4">
            <song-list-item
                v-for="song in songs"
                :key="song"
                :song="song" />
        </div>
    </div>
</template>

<script lang="ts">
    import SongListItem from '@/components/SongListItem.vue';

    export default {
        name: 'Songs',
        components: {
            'song-list-item': SongListItem,
        },
        data() {
            return {
                songs: [
                    // Fetch songs data from API or store
                ],
            };
        },
    };
</script>

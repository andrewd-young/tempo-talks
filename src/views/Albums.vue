<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-4xl font-bold mb-8">Albums</h1>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <album-card
                v-for="album in albums"
                :key="album"
                :album="album" />
        </div>
    </div>
</template>

<script lang="ts">
    import AlbumCard from '@/components/AlbumCard.vue';

    export default {
        name: 'Albums',
        components: {
            'album-card': AlbumCard,
        },
        data() {
            return {
                albums: [
                    // Fetch albums data from API or store
                ],
            };
        },
    };
</script>

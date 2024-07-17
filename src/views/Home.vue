<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-4xl font-bold mb-8">Welcome to MusicReview</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">Recent Album Reviews</h2>
                <!-- Add a list or grid of recent album reviews here -->
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">Top Rated Songs</h2>
                <!-- Add a list of top-rated songs here -->
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">Community Activity</h2>
                <!-- Add a feed of recent user activity here -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Home',
    };
</script>

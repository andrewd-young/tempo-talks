<template>
    <div class="container mx-auto mt-8">
        <div class="bg-white p-8 rounded-lg shadow-md">
            <h1 class="text-4xl font-bold mb-8">User Profile</h1>
            <div class="flex items-center mb-8">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile Picture"
                    class="w-24 h-24 rounded-full mr-6" />
                <div>
                    <h2 class="text-2xl font-semibold">Username</h2>
                    <p class="text-gray-600">Joined: January 1, 2023</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-semibold mb-4">Recent Reviews</h3>
                    <!-- Add a list of recent reviews here -->
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-4">Favorite Albums</h3>
                    <!-- Add a grid of favorite albums here -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Profile',
    };
</script>

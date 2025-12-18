<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
    title: 'Admin',
});

definePage({
    meta: {
        requireAuth: true,
    },
});
</script>
<template>
    <div>Admin page</div>
</template>

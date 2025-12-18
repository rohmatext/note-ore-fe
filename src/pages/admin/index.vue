<script setup lang="ts">
import AppLayout from '@/components/layouts/AppLayout.vue';
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
    <AppLayout> Dump </AppLayout>
</template>

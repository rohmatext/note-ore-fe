<script setup lang="ts">
import { RouterLink } from 'vue-router';

const props = defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div class="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div class="w-full max-w-sm">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col items-center gap-4">
                    <RouterLink to="/" class="flex flex-col items-center gap-2 font-medium">
                        <div class="mb-1 flex h-9 w-9 items-center justify-center rounded-md">
                            <img src="/vite.svg" class="size-9" />
                        </div>
                        <span class="sr-only">{{ props.title }}</span>
                    </RouterLink>
                    <div class="space-y-2 text-center">
                        <h1 class="text-xl font-medium">{{ props.title }}</h1>
                        <p class="text-muted-foreground text-center text-sm">{{ props.description }}</p>
                    </div>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>

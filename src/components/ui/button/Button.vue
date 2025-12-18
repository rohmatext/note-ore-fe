<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-vue-next';
import type { PrimitiveProps } from 'reka-ui';
import { Primitive } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { ButtonVariants } from '.';
import { buttonVariants } from '.';

interface Props extends PrimitiveProps {
    variant?: ButtonVariants['variant'];
    size?: ButtonVariants['size'];
    class?: HTMLAttributes['class'];
    isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    as: 'button',
});
</script>

<template>
    <Primitive data-slot="button" :as="as" :data-loading="isLoading" :as-child="asChild" :class="cn(buttonVariants({ variant, size }), props.class)">
        <Loader2 class="loading absolute animate-spin" v-if="isLoading" />
        <slot />
    </Primitive>
</template>

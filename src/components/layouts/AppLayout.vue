<script setup lang="ts">
import AppSidebar from '@/components/layouts/components/app/AppSidebar.vue';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import type { Breadcrumb as BreadcrumbType } from '@/types/page';
import type { RouterLink } from 'vue-router';

const props = defineProps<{
    breadcrumbs?: BreadcrumbType[];
}>();
</script>

<template>
    <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <header
                class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
            >
                <div class="flex items-center gap-2 px-4">
                    <SidebarTrigger class="-ml-1" />
                    <Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <template v-for="breadcrumb in props.breadcrumbs">
                                <BreadcrumbItem class="hidden md:block" v-if="breadcrumb.url">
                                    <BreadcrumbLink as-child>
                                        <RouterLink :to="breadcrumb.url">{{ breadcrumb.title }}</RouterLink>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem v-else>
                                    <BreadcrumbPage>{{ breadcrumb.title }}</BreadcrumbPage>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator class="hidden md:block" />
                            </template>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
                <slot />
            </div>
        </SidebarInset>
    </SidebarProvider>
</template>

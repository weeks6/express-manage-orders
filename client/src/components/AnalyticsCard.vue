<template>
    <div class="flex flex-col gap-4 border rounded border-gray-300 shadow-2xs p-8">
        <span class="font-semibold">
            {{ text }}
        </span>
        <span class="font-bold text-4xl text-blue-900">
            {{ data }}
        </span>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    text: string,
    data?: number | string
}>()
</script>

<style></style>
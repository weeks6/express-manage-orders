<template>
    <div class="flex items-center gap-2">
        <label class="flex flex-col">
            ID
            <input
                class="border border-gray-300 rounded px-2 py-1"
                placeholder="ID"
                type="number"
                v-model="formData.productId"
            />
        </label>
        <label class="flex flex-col">
            Количество
            <input
                class="border border-gray-300 rounded px-2 py-1"
                placeholder="Количество"
                type="number"
                v-model="formData.quantity"
            />
        </label>
        <label class="flex flex-col">
            Цена
            <input
                class="border border-gray-300 rounded px-2 py-1"
                placeholder="Цена"
                type="number"
                v-model="formData.price"
            />
        </label>

        <button
            class="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded self-end cursor-pointer"
            :class="{
                'pointer-events-none opacity-50': !(formData.productId && formData.price && formData.quantity > 0)
            }"
            @click="onAddClick"
        >+</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { OrderItem } from '../api/types';

const formData = ref({
    productId: 1,
    price: 0,
    quantity: 1
})

const emit = defineEmits<{
    (e: 'add', item: OrderItem): void
}>()

function onAddClick() {
    emit('add', formData.value)

    formData.value = {
        productId: 1,
        price: 0,
        quantity: 1
    }
}
</script>

<style></style>
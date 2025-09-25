<template>
    <div
        class="flex items-center justify-between gap-2 border border-gray-200 rounded p-2 cursor-pointer hover:bg-blue-100"
        @click="router.push({
            name: 'order',
            params: {
                id: order.id
            }
        })"
    >
        <h2 class="text-slate-800">Заказ #{{ order.id }}</h2>
        <div class="flex items-end flex-col gap-2">
            <span>
                {{ order.items.length }} товаров на сумму {{ orderSum }}
            </span>
            <span>
                {{ new Date(order.createdAt).toLocaleString() }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { Order } from '../api/types';
import { useRouter } from 'vue-router';

const props = defineProps<{
    order: Order
}>()

const router = useRouter()

const orderSum = computed(() => props.order.items.reduce((acc, i) => {
    acc += i.price * i.quantity
    return acc
}, 0))
</script>

<style></style>
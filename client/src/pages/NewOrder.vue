<template>
    <h1>
        Новый заказ
    </h1>

    <h2 class="font-semibold mt-2">Товары</h2>
    <div v-for="item in items">
        Товар #{{ item.productId }} - {{ item.price }} x {{ item.quantity }}
    </div>

    <NewOrderItem
        @add="onAddItem"
        class="mt-2"
    />

    <button
        class="mt-4 bg-blue-500 text-white rounded px-2 py-1 cursor-pointer"
        :class="{
            'pointer-events-none opacity-50': isLoading || !items.length
        }"
        @click="onSubmit"
    >Создать
    </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMutation } from '@pinia/colada';

import { ENDPOINT_URL } from '../api/fetch';
import type { OrderItem } from '../api/types';
import NewOrderItem from '../components/NewOrderItem.vue';

const router = useRouter()

const HARDCODED_USER_ID = 1

const {
    mutateAsync: createOrder,
    error,
    isLoading
} = useMutation({
    mutation: (data: {
        customerId: number,
        items: OrderItem[],
    }) =>
        fetch(`${ENDPOINT_URL}/orders`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        }),
})

const items = ref<OrderItem[]>([])

function onAddItem(item: OrderItem) {
    items.value.push(item)
}

async function onSubmit() {
    const { status } = await createOrder({
        customerId: HARDCODED_USER_ID,
        items: items.value
    })

    if (status === 201) {
        router.push({ name: 'orders' })
    }
}
</script>

<style></style>
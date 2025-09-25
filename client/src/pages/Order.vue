<template>
    <h1 v-if="isLoading">Загрузка...</h1>
    <span v-else-if="error">Заказ не найден</span>
    <div
        v-else
        class="flex flex-col"
    >
        <div class="flex items-center gap-2">
            <h1>Заказ {{ orderId }}</h1>
            <span
                v-if="data?.isBigOrder"
                class="px-2 py-1 rounded-full text-green-950 text-[12px] font-medium border border-green-300 bg-green-100"
            >
                Большой заказ
            </span>
        </div>

        <h2 class="font-semibold mt-2">Товары</h2>
        <div v-for="item in data?.items">
            Товар #{{ item.productId }} - {{ item.price }} x {{ item.quantity }}
        </div>

        <h2 class="font-semibold mt-2">Итого</h2>
        {{ data?.totalSum }}
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import type { OrderItem } from '../api/types';
import { ENDPOINT_URL } from '../api/fetch';
import { useQuery } from '@pinia/colada';


const route = useRoute();

const orderId = computed(() => route.params.id)

const { data, isLoading, error } = useQuery<{
    items: OrderItem[],
    totalSum: number,
    isBigOrder: boolean,
}>({
    key: ['order', Number(route.params.id)],
    query: () => fetch(`${ENDPOINT_URL}/orders/${route.params.id}`).then((res) => {
        if (res.status === 200) return res.json()
        else throw res.json()
    }),
})
</script>

<style></style>
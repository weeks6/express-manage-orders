<template>
    <div>
        <h1 class="mb-4">Заказы</h1>

        <h2 v-if="isLoading">Загрузка</h2>
        <div v-else-if="error">
            {{ error.message }}
        </div>
        <div
            v-else-if="data?.data?.length"
            class="flex flex-col gap-2"
        >
            <OrderCard
                v-for="order in data.data"
                :order="order"
                :key="order.id"
            />
        </div>
        <div v-else>
            Не найдено заказов
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@pinia/colada';
import { ENDPOINT_URL } from '../api/fetch';
import type { Order } from '../api/types';
import OrderCard from '../components/OrderCard.vue';


const { data, isLoading, error } = useQuery<{ data: Order[] }>({
    key: ['orders'],
    query: () => fetch(`${ENDPOINT_URL}/orders`).then((res) => res.json()),
})
</script>

<style></style>
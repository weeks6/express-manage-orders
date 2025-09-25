<template>
    <h1 class="mb-4">
        Недельная аналитика
    </h1>

    <div class="grid grid-cols-2 gap-4">
        <AnalyticsCard
            text="Всего заказов"
            :data="data?.ordersCount"
        />
        <AnalyticsCard
            text="Сумма"
            :data="data?.totalAmount"
        />
        <AnalyticsCard
            text="Больших заказов"
            :data="data?.bigOrdersCount"
        />
        <AnalyticsCard
            text="уникальных клиентов"
            :data="data?.uniqueCustomers"
        />
    </div>
</template>

<script lang="ts" setup>
import { useQuery } from '@pinia/colada';
import { ENDPOINT_URL } from '../api/fetch';
import AnalyticsCard from '../components/AnalyticsCard.vue';


const { data } = useQuery<{
    ordersCount: number,
    totalAmount: number,
    bigOrdersCount: number,
    uniqueCustomers: number,
}>({
    key: ['analytics'],
    query: () => fetch(`${ENDPOINT_URL}/analytics/weekly`).then((res) => res.json()),
})
</script>

<style></style>
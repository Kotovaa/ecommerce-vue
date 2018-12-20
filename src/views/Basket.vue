<template>
    <main class="basket">
        <h1 class="basket__h1">Корзина</h1>
        <basket-list />
    </main>
</template>

<script>
import BasketList from '../components/BasketList.vue';

export default {
    name: 'Basket',
    components: { BasketList }
}
</script>


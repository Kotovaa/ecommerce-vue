<template>
    <div class="card">
        <div class="card__list" options="options">
            <div class="card__item" v-for="(product, index) in options" :key="index">
                <div class="card__img">
                    <img :src="product.img" alt="">
                </div>
                <div class="card__title">{{ product.name }}</div>
                <div class="card__wrapper">
                    <div class="card__price">
                        <span>Цена:</span>
                        <em>{{ formatCurrency(product.price) }} ₽</em>
                    </div>
                    <div class="card__btn" @click="addToBasket(product)">Купить</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        options: {
            name: String,
            img: String,
            price: Number
        }
    },
    methods: {
        formatCurrency(val) {
            let value = (val/1).toFixed(0).replace(' ')
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        },
        addToBasket(product) {
           this.$store.dispatch('addToBasket', product);
        }
    }
}
</script>

<style lang="scss">
.card {
    &__list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 40px;
    }
    &__item {
        padding: 20px;
        box-shadow: 0 10px 48px 0 rgba(176, 192, 237, 0.52);
        margin-bottom: 30px;
        border-radius: 11px;
    }
    &__title {
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        margin-top: 10px;
    }
    &__wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    }
    &__btn {
        height: 40px;
        background: #fbd156;
        text-align: center;
        font-size: 14px;
        line-height: 40px;
        color: #222;
        min-width: 140px;
        border-radius: 5px;
        cursor: pointer;
    }
    &__price {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        em {
            font-style: normal;
            margin-left: 10px;
            font-weight: bold;
        }
    }
}
</style>


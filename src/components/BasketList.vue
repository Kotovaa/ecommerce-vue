<template>
    <div class="basket__list">
        <div v-if="items.length" class="basket__list-wrapper">
            <ul>
                <li class="basket__item" v-for="(item, index) in items" :key="index">
                    <div class="basket__item-img">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="basket__item-name">{{ item.name }}</div>
                    <div class="basket__item-price">{{ item.price }} ₽</div>
                    <div class="basket__quantity">
                        <button class="basket__quantity-btn" @click="quantityUp(item)">+</button>
                        <div class="basket__quantity-num">{{ item.quantity }}</div>
                        <button class="basket__quantity-btn" @click="quantityDown(item)">-</button>
                    </div>
                    <button class="basket__delete" @click="removeItem(index)">Удалить</button>
                </li>
            </ul>
            <div class="basket__footer">
                <div class="basket__totalPrice">На сумму: {{ formatCurrency(this.summ) }} ₽</div>
                <div class="basket__btns">
                    <button>Оформить заказ</button>
                    <button>Заказать в 1 клик</button>
                </div>
            </div>
        </div>
        <h2 v-else>Вы пока ничего не добавили в корзину</h2>
    </div>
</template>

<script>
export default {
    name: 'BasketList',
    computed: {
        items() {
            return this.$store.getters.getBasketItems; 
        },
        summ() {
            return this.$store.getters.getSumm;
        }
    },
    methods: {
        quantityUp(product) {
            this.$store.dispatch('quantityUp', product)
        },
        quantityDown(product) {
            this.$store.dispatch('quantityDown', product)
        },
        formatCurrency(val) {
            let value = (val/1).toFixed(0).replace(' ')
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        },
        removeItem(index) {
            this.$store.dispatch('removeItem', index);
        }
    }
}
</script>

<style lang="scss">
.basket {
    &__list {
        ul {
            margin: 0;
            padding: 0;
        }
    }
    &__item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        list-style: none;
        align-items: center;
        margin-bottom: 20px;
        img {
            max-height: 50px;
        }
        &-name {
            font-size: 22px;
            line-height: 25px;
            margin-left: 50px;
        }
        &-price {
            font-size: 18px;
            line-height: 21px;
            margin-left: 30px;
        }
    }
    &__footer {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        &-btns {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
        }
    }
    &__quantity {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-left: 15px;
        &-num {
            margin: 0 10px;
        }
    }
}
</style>



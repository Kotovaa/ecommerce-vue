<template>
    <header class="header">
        <div class="header__logo">
            <img src="../assets/logo.png" alt="">
        </div>
        <nav class="header__basket"> 
            <router-link to="/basket">
                <span v-if="this.total > 0"> {{ this.total }} товар у вас в корзине</span>
                <em v-else>Корзина</em>
            </router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header_block',
    computed: {
        total() {
           return this.$store.getters.getTotalInBasket
        }
    }
}
</script>

<style lang="scss">
    .header {
        width: 100%;
        height: 70px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        &__logo {
            align-self: center;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90%;
            img {
                max-width: 200px;
                margin: o auto;
                display: block;
            }
        }
        &__basket {
            position: absolute;
            right: 0;
            a {
                text-decoration: none;
                color: #000;
                position: relative;
                font-size: 14px;
                &:before {
                    width: 16px;
                    height: 16px;
                    background-image: url('../assets/img/carts.svg');
                    background-position: left center;
                    background-repeat: no-repeat;
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -25px;
                }
                &:hover {
                    &:before {
                        background-position: -16px 0;
                    }
                }
            }
        }
    }
</style>


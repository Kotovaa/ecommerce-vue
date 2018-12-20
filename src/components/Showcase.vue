<template>
    <div class="showcase">
        <Card :options="products"/>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
import axios from 'axios';

export default {
    name: 'Showcase',
    components: { Card },
    data() {
        return {

        }
    },
    computed: {
        products() {
            return this.$store.getters.getAllProducts;
        }
    },
    mounted() {
        this.$store.dispatch('getProducts');
    }
}
</script>

<template>
    <main class="main">
        <Header_block />
        <Showcase/>
    </main>
</template>

<script>
import Header_block from '../components/Header_block.vue';
import Showcase from '../components/Showcase.vue';

export default {
    components: { Header_block, Showcase }
}
</script>

<style lang="scss">
main {
    width: 100%;
}
</style>


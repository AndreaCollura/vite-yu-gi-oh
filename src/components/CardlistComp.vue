<template>

    <section class="container mt-5">
        <!-- inserire qui eventuale form -->
        <!-- <form action=""></form> -->
        <div class="row p-5">
            <CardboxComp v-for="(card, index) in store.cardList" :key="card.id" :card="card" />
        </div>
    </section>
</template>

<script>
import CardboxComp from './CardboxComp.vue'
import { store } from '../data/store';

export default {
    name: 'CardlistComp',
    components: {
        CardboxComp
        
    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

    .row{

        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

</style>
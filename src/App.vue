<template>
  <HeaderComp/>
  <main>
    <CardlistComp/>
  </main>
</template>

<script>
import CardlistComp from './components/CardlistComp.vue'
import HeaderComp from './components/HeaderComp.vue';
import { store } from './data/store';
import axios from 'axios';

  export default {
    name: 'App',
    components: {
      HeaderComp,
      CardlistComp

    },
    data(){
      return{
        store
      }
    },
    methods: {
      getCards() {
      const url = store.baseUrl + store.endpoint;
      axios.get(url).then((res) => {
        store.cardList = res.data.data;
        console.log(store.cardList);
        
      });
    }

    },
    mounted(){
      this.getCards()

    }

    
    
  }
</script>

<style lang="scss" scoped>

</style>
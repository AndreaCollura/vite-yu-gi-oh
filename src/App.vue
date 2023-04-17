<template>
  <div>
    
  </div>
</template>

<script>
import { store } from './data/store';
import axios from 'axios';

  export default {
    name: 'App',
    components: {

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
        console.log(res.data.data);
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
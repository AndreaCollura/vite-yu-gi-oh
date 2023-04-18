<template>
  <HeaderComp />
  <main>
    <FormComp @searchChange="getCards"/>
    <CardlistComp />
    <div v-if="store.errortxt" class="alert alert-danger text-center">{{ store.errortxt }}</div>
  </main>
</template>

<script>
import FormComp from './components/FormComp.vue';
import CardlistComp from './components/CardlistComp.vue'
import HeaderComp from './components/HeaderComp.vue';
import { store } from './data/store';
import axios from 'axios';


export default {
  name: 'App',
  components: {
    HeaderComp,
    CardlistComp,
    FormComp,
    


  },
  data() {
    return {
      store,
      
      
    }
  },
  methods: {
    getCards() {
      
      store.errortxt= '';
      store.loadingscreen = true;
      const url = store.baseUrl + store.endpoint;
      let selections= {}
      let params = {}
      for(let key in store.inputs){
        if(store.inputs[key]){
          params[key] = store.inputs[key]
        }
      }
      if (Object.keys(params).length > 0 ) {
        selections.params = params;
      }
      // console.log(selections);
      axios.get(url, selections).then((res) => {
        store.cardList = res.data.data;
        // console.log(store.cardList);

      }).catch((error)=>{
      console.log(error);
      store.cardList.length = 0
      store.errortxt = 'No card found!'
      }).finally(() => {
        store.loadingscreen = false;
      })

    
      
    }

  },
  mounted() {
    this.getCards()
    

  }



}
</script>

  

<style lang="scss" scoped>




</style>
import { reactive } from 'vue';

export const store = reactive({
    cardList: [],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
    endpoint: '&num=50&offset=0',
    inputs:{
        fname: '',
        archetype: ''
        

    },
    errortxt: '',

    loadingscreen: false
    
})
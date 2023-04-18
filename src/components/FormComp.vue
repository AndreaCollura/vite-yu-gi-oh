<template>
    <div class="container d-flex justify-content-center">
        <form @submit.prevent="startSearch" class="row d-flex g-5">
            <div class="col">
                <div class="form-outline">
                    <input placeholder="Search by name..." type="text" id="cardName" class="form-control" v-model.trim="store.inputs.fname" />
                </div>
            </div>
            <select class="selectpicker" id="searchName" v-model="store.inputs.archetype">
                <option selected value>Search by archetype...</option>
                <option></option>
                <option :value="option.archetype_name" v-for="(option, index) in archetypeOptions" :key="index">
                    {{ option.archetype_name }}
                </option>
            </select>
            <div class="d-flex justify-content-center mt-4">
                <button type="submit" class="btn btn-primary me-3">Search</button>
                <button @click="newSearch" type="reset" class="btn btn-danger">Clean</button>
            </div>
            <div class="d-flex justify-content-center mt-4">
            </div>
        </form>
    </div>
</template>

<script>
import { store } from '../data/store';
import axios from 'axios';
export default {
    name: 'FormComp',
    data() {
        return {
            store,
            archetypeOptions: this.archetypeOptions,


        }
    },
    methods: {
        startSearch() {
            this.$emit('searchChange');
            // console.log(store.inputs.archetype);
        },
        newSearch() {
            store.inputs.fname = '';
            store.inputs.archetype = 0;
            this.$emit('searchChange');
        }


    },
    mounted() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((res) => {

            this.archetypeOptions = res.data;
            // console.log(this.archetypeOptions);
        })
    }

}
</script>

<style lang="scss" scoped>
.selectpicker {
    width: 20rem;
    height: 40px;
    border-radius: 8px;
}
</style>
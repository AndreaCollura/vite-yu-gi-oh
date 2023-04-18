<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
        <div class="text-center">
            <img :src="card.card_images[0].image_url" :alt="card.name">
            <h4>{{ card.name }}</h4>
            <span class="text-uppercase">{{ card.archetype}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardboxComp',
    props: ['card']
}
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }

    h4{
        color: gold;
        font-size: 1.2rem;
        padding-top: 10px;
    }
    span{
        color: white;
    }

</style>
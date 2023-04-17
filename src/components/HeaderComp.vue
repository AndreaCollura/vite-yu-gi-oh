<template>
    <header>
        <div class="container-fluid">
            <div class="logo">
                <img class="" src="../assets/img/yugioh-logo.png" alt="">
                
            </div>
            <div>
                <h1 class="text-center text-uppercase">Data base</h1>
            </div>
            
        </div>
        
    </header>
</template>

<script>
    export default {
        name: 'HeaderComp',
        props: { 
            
        }
        
        
    }
</script>

<style lang="scss" scoped>



    .logo{
        width: 200px;
        height: 140px;
        margin: 0 auto;
        img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    
    }

    h1{
        font-size: 1.4rem;
        color: gold;
    }



</style>
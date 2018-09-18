<template>
<div class="red-zone">
    <el-row   :gutter="10">
        <el-col :span="8" v-for="wine of red_wines " :key="wine.id" >
            <wine-card :wine="wine" @wineupdate="handleUpdate"></wine-card>
        </el-col>
    </el-row>   
</div>
</template>

<script>


import WineCard from './WineCard';

export default {
    name: "RedZone",
    props: {
        red_wines: Array
        },
    data(){
        return {
            
            }
    },
     methods: {
         handleUpdate(wine){
            this.red_wines.forEach(old_wine => {
                 if (old_wine.id == wine.id){
                     old_wine.count = wine.count;
                 }
             });  
             console.log(this.red_wines);
             this.$emit("update", this.red_wines);

                      
         }
  },
    components: {
        WineCard
    }
}   
</script>
<style>
.title {
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 10px; 
    display: inline-block;
}

.description {
    display: block;
    font-size: 15px;
    padding-left: 5px;
    line-height: 40px;
}
.description::before{
    content: "-"
}
#price {
    margin-top: 10px;
}
#price::before {
    content: ""
}
.bottled {
    max-height: max-content;
}

</style>

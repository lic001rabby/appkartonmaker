<template>
<div class="red-zone">
    <el-row   :gutter="10">
        <el-col :span="8" v-for="wine of red_wines " :key="wine.name" >
            <wine-card :wine=wine></wine-card>
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

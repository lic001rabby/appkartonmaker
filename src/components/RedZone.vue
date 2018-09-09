<template>
<div class="red-zone">
    <el-row   :gutter="10">
        <el-col :span="8" v-for="wine of red_wines " :key="wine.name" >
            <el-card 
            :body-style="{ padding: '0px' }"
            class="bottled"
            >
             <el-row type="flex" class="row-bg" justify="center">
                
                <el-col :span="8" style=""><img :src="`static/${wine.id}.jpg`" style="width:100%"/></el-col>
                <el-col :span="14" >
                    
                    <span class="title">{{ wine.name }}</span>
                    <span class="description">{{ wine.info1 }}</span>
                    <span class="description">{{ wine.info2 }}</span>
                    <span class="description">{{ wine.info3 }}</span>
                    <span class="title" id="price">&euro;{{ wine.price}}</span>
                   <div id="infobox"> 
                    <count-setter></count-setter>
                    </div>

                </el-col>
            </el-row>
            </el-card>
        </el-col>
    </el-row>   
</div>
</template>

<script>

import CountSetter from './CountSetter.vue';
export default {
    name: "RedZone",
    props: {
        red_wines: Object
        },
    data(){
        return {
            
            }
    },
     methods: {
  },
    components: {
        CountSetter
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

<template>
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
                    <count-setter :count=1></count-setter>
                    </div>

                </el-col>
            </el-row>
        </el-card>
</template>

<script>
import CountSetter from './CountSetter.vue';
export default {
    name:"WineCard",
    props: {
        wine: Object
    },

    components: {
        CountSetter
    }

}
</script>

<style>

</style>

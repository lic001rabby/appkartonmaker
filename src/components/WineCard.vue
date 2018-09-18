<template>
    
        <el-card 
                :body-style="{ padding: '0px' }"
                class="bottled"
                >
                
                <el-row type="flex" class="row-bg" justify="center">
                    <div class="boxoverlay" v-if="count.count===0"></div>
                    
                    <el-col :span="8" ><img :src="`static/${wine.id}.jpg`" style="height:170px; width:auto;"/></el-col>
                    <el-col :span="14" >
                        
                        <span class="title">{{ wine.name }}</span>
                        <span class="description">{{ wine.info1 }}</span>
                        <span class="description">{{ wine.info2 }}</span>
                        <span class="description">{{ wine.info3 }}</span>
                        <span class="title" id="price">&euro;{{ wine.price * wine.count}}</span>
                    <div id="infobox"> 
                        <count-setter :wine="wine" @change="handleChange"></count-setter>
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
    data() {
        return {
            count : this.wine
        }
    },
    methods: {
        handleChange(value){
            console.log(this.wine)
            this.wine.count = value;
            console.log(this.wine.count);
            this.$emit ("wineupdate", this.wine);
        }
    },

    components: {
        CountSetter
    }

}
</script>

<style>
.title {
    font-size: 15px;
}
.boxoverlay {
    position:absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>

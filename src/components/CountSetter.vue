<template>
  <el-input-number size="medium" v-model="winecount" @change="handleChange" :min="0" :max="10"></el-input-number>
</template>
<script>
  export default {
    name: "CountSetter",
    props: {
        wine:Object
    },
    data() {
      return {
          counter:0
      };
    },
    methods: {
      handleChange(value) {
        console.log(this.wine)
        console.log('getter'+ this.$store.getters.getCountById(this.wine.id));
        this.counter=value;
        this.wine.count = value;
        this.$emit("change",value);
        this.$store.commit('wineupdate', this.wine)
      },  
    },
    computed: {
      
      winecount: {
        get: function() {
          var temp = this.$store.getters.winecase;
          var count = 0;
          console.log(temp);
          console.log('store above');
          temp.forEach(element => {
            if(element.id == this.wine.id) count= element.count;
          }); 
          return count;
        },
        set: function(newVal){
          this.counter = newVal;

        }
      }
    }
  };
</script>
<style>

</style>

<template>
  <div class="block">
    
    <el-slider id="ranger"
      v-model="totalslider"
      range
      show-stops
      :min='230'
      :max="430"
      :step="50"
      tooltip-class= "price-tooltip"
      @change="change()"
      >
    </el-slider>
  </div>
</template>

<script>
  export default {
    name: 'RangeSlider',
    props: {
      slider_value: Array
    },
    data() {
      return {
        localslider : []
      }
    },
    methods: {
      change: function(){
        
      }
    },
    computed: {
      totalslider: {
        get: function() {
          return this.$store.getters.slider;
        },
        set: function(newVal){
        console.log (newVal)
        //this.localslider = newVal; 
        this.$store.commit("change", newVal)
        }
      }
    }
  }
</script>
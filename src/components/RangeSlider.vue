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
        
      }
    },
    methods: {
      change: function(){
        this.$store.commit('change', this.totalslider)
      }
    },
    computed: {
      totalslider: {
        get: function() {
          return this.slider_value
        },
        set: function(newVal){
          this.totalslider[newVal[0]]= newVal[1]; 

        }
      }
    }
  }
</script>
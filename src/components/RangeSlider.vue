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
        localslider : this.slider_value
      }
    },
    methods: {
      change: function(val){
        this.$store.commit('change', val)
      }
    },
    computed: {
      totalslider: {
        get: function() {
          return this.$store.getters.slider;
        },
        set: function(newVal){
        this.localslider[newVal[0]]= newVal[1]; 

        }
      }
    }
  }
</script>
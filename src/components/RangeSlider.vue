<template>
  <div class="block">
    
    <el-slider
      v-model="slider_value"
      range
      show-stops
      :min='230'
      :max="430"
      :step="50"
      tooltip-class= "price-tooltip"
      >
    </el-slider>
  </div>
</template>

<script>
  export default {
    name: 'RangeSlider',
    data() {
      return {
        slider_value: [230, 430]
      }
    }
  }
</script>
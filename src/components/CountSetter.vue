<template>
  <el-input-number size="medium" v-model="count" @change="handleChange" :min="0" :max="10"></el-input-number>
</template>
<script>
  export default {
    name: "CountSetter",
    props: {
        count:Number
    },
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  };
</script>
<style>

</style>

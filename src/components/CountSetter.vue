<template>
  <el-input-number size="medium" v-model="winecount" @change="handleChange" :min="0" :max="10"></el-input-number>
</template>
<script>
  export default {
    name: "CountSetter",
    props: {
        count:Number
    },
    data() {
      return {
          winecount:this.count
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
        this.winecount =value;
      }
    }
  };
</script>
<style>

</style>

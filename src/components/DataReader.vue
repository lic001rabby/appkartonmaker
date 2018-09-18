<template>
<el-popover
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="winecase">
    <el-table-column width="150" property="date" label="date"></el-table-column>
    <el-table-column width="100" property="name" label="name"></el-table-column>
    <el-table-column width="300" property="address" label="address"></el-table-column>
  </el-table>
  <el-button slot="reference">Click to activate</el-button>
</el-popover>
</template>

<script>
  export default {
    name: "DataReader",
    data() {
      return {
        winecase: this.$store.getters.winecase
      };
    }
  };
</script>
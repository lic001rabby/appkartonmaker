<template>
<el-popover
  placement="right"
  border

  trigger="click"
  >
  <el-table :data="winecase"
    height = 600px
  show-summary
  :summary-method="getSummaries" class="datareader">
    <el-table-column width="200" property="name" label="Name" id="#winename"></el-table-column>
    <el-table-column width="70" property="type" label="Type"></el-table-column>
    <el-table-column width="70" property="count" label="Count"></el-table-column>
    <el-table-column width="70" property="price" label="Price/U"></el-table-column>
    <el-table-column width="70" property="totalprice" label="Total"></el-table-column>
  </el-table>
  <el-button slot="reference">Mix Details</el-button>
</el-popover>
</template>

<script>
  export default {
    name: "DataReader",
    data() {
      return {
        
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = 'Total Cost';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = ((index === 2)? '' : '$') + values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      }
    },
    computed: {
        winecase : {
            get: function(){
                var allwines = this.$store.getters.winecase;
                var selectwines = [];
                allwines.forEach(element => {
                    if(element.count>0) {selectwines.push(element);}
                });
                selectwines.forEach(element=>{
                    element.totalprice = element.count*element.price
                })
                return selectwines;
            }
        }
    }
  };
</script>
<style>
.datareader {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 12px;
}
.el-table {
    font-size: 12px;
}
#winename {
    font-size: 12px!important; 
}
</style>

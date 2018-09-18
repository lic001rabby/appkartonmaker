<template>
<el-popover
  placement="right"
  border

  trigger="click"
  >
  <el-table :data="winecase"
    height = "400"
  show-summary
  :summary-method="getSummaries">
    <el-table-column width="150" property="name" label="Name"></el-table-column>
    <el-table-column width="150" property="type" label="Type"></el-table-column>
    <el-table-column width="100" property="count" label="Count"></el-table-column>
    <el-table-column width="100" property="price" label="Unit Price"></el-table-column>
    <el-table-column width="100" property="totalprice" label="Total"></el-table-column>
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
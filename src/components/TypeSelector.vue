<template>
    <div>
        <el-button 
        :type=red_button_type
        size="small"
        @click="red_button_handler"
        >Red</el-button>
        <el-button 
        :type=white_button_type
        size="small"
        @click="white_button_handler"
        >White</el-button>
        <el-button 
        :type=wnr_button_type
        size="small"
        @click="wnr_button_handler"
        >Red &amp; White</el-button>
    </div>
</template>
<script>
  export default {
    name: 'TypeSelector',
    data() {
      return {
          type_choice: 1,
          red_button_type: 'primary',
          white_button_type: 'default',
          wnr_button_type: 'default'
      }
    },
  methods: {
    red_button_handler: function() {
      this.red_button_type = "primary"
      this.white_button_type = "default"
      this.wnr_button_type = "default"
      this.type_choice = 1
    },
    white_button_handler: function() {
      this.white_button_type = "primary"
      this.red_button_type = "default"
      this.wnr_button_type = "default"
      this.type_choice = 2
    },
    wnr_button_handler: function() {
      this.white_button_type = "default"
      this.red_button_type = "default"
      this.wnr_button_type = 'primary'
      this.type_choice = 3
    }

  }
  }
</script>
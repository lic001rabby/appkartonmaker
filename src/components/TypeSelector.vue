<template>
    <div>
        <el-button 
        :type=red_button_type
        @click="red_button_handler"
        >Red</el-button>
        <el-button 
        :type=white_button_type
        @click="white_button_handler"
        >White</el-button>
        <el-button 
        :type=white_button_type
        @click="white_button_handler"
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
          white_button_type: "default",
      }
    },
  methods: {
    red_button_handler: function() {
      this.red_button_type = "primary"
      this.white_button_type = "default"
    },
    white_button_handler: function() {
      this.white_button_type = "primary"
      this.red_button_type = "default"
    },

  }
  }
</script>
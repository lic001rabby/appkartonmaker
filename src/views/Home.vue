<template>

<el-container>
  <!--header start -->
  <el-header class="no-right-padding">
    <el-row type="flex" class="row-bg" justify="space-between"  >
      <el-col :xs="24" :lg="11">Left</el-col>
      <el-col :xs="24" :lg="11" class="align-right"><el-button>Reset</el-button><el-button type="primary">Mascarello's History</el-button>
      </el-col>
    </el-row>
    <div class="margin-20"></div>
    <el-row class="row-bg" justify="space-around">
      <el-col :xs="24" :lg="11">
        <type-selector></type-selector>
      </el-col>
      <el-col :xs="24" :lg="11" class="">
      <range-slider ></range-slider>
      </el-col>
    </el-row>
  </el-header>
  <!-- header end -->

  <!-- Main content start -->
  <el-main>Main</el-main>
  <!-- Main content end -->
</el-container>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RangeSlider from '@/components/RangeSlider.vue'
import TypeSelector from '@/components/TypeSelector.vue'

export default {
  name: 'home',
  data() {
    return {
    }
  },
  components: {
    HelloWorld,
    RangeSlider,
    TypeSelector
  }
}
</script>

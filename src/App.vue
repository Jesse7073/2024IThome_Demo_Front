<template>
  <div id="app">
    <ContainerView/>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="8"><router-view/></el-col>
    </el-row>
  </div>
</template>

<script>
import ContainerView from '@/components/ContainerView.vue'

export default {
  components: {
    ContainerView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f9fafc;
}

.row-bg {
  padding: 10px 0;
}
</style>

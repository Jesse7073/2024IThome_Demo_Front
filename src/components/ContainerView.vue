<template>
  <div class="hello">
    <h3>{{ title }}</h3>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      router
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/jasperDemo">JasperReports 報表範例</el-menu-item>
      <el-menu-item index="/apacheDemo">Apache POI 報表範例</el-menu-item>
      <el-menu-item index="/jFreeChartDemo">JFreeChart 報表範例</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
    </el-menu>
  </div>
</template>

<script src="./ContainerView.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 40px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
    <div>
      <el-card class="box-card">
        <div>
            <el-button type="success" round @click="downloadBarChartImage">下載直條圖</el-button>
        </div>
      </el-card>
    </div>
</template>

<script src="./JFreeChartDemo.js"></script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
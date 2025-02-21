<template>
    <div>
      <el-card class="box-card">
        <div>
            <el-button type="success" round @click="downloadDemoExcel">下載學生成績資料表</el-button>
        </div>
      </el-card>
    </div>
</template>

<script src="./ApacheDemo.js"></script>

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
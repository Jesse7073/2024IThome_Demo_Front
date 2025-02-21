<template>
    <div>
      <el-card class="box-card">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="reportName"
            label="報表名稱"
            width="280">
          </el-table-column>
          <el-table-column
            prop="downloadStr"
            label="下載報表">
            <template slot-scope="scope">
              <el-button
                type="success"
                round
                @click="scope.row.downloadMethod"
              >下載</el-button>
            </template>
          </el-table-column>
        </el-table>
        <br>
        <div>
          <DatePicker
              :date="startDate"
              range
              format="yyyy/MM/dd"
              placeholder="startDate">
          </DatePicker>
          <DatePicker
              :date="endDate"
              range
              format="yyyy/MM/dd"
              placeholder="endDate">
          </DatePicker>
        </div>
        <el-button type="primary" round @click="downloadStudentTestByDateReport">下載學生成績資料表</el-button>
      </el-card>
    </div>
</template>

<script src="./JasperDemo.js"></script>
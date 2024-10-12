<template>
    <div>
        {{ message }}
        <h1>JasperReports</h1>
        <div>
            <button @click="downloadStudentDepartmentExcel">下載學生科系資料表</button>
        </div>
        <div>
            <button @click="downloadStudentAndDepartmentDataMarkReport">下載學生科系資料表pdf(浮水印)</button>
        </div>
        <div>
            <button @click="downloadStudentCourseScoreDataReportExcel">下載學生與課堂成績資料表</button>
        </div>
        <div>
            <button @click="downloadDepartmentCourseScoreAverageDataReport">學生科系考試平均成績excel報表(子報表)</button>
        </div>
        <div>
            <button @click="downloadStudentAndDepartmentDataPieChartReport">下載學生與課堂成績資料表pdf(圓餅圖)</button>
        </div>
        <div>
            <button @click="downloadBBQSuppliesDemoExcel">下載購買烤肉用品統計表demo excel</button>
        </div>
        <div>
            <button @click="downloadStudentAndDepartmentGroupDataReport">下載學生科系資料表pdf(浮水印 + group)</button>
        </div>
        <div>
            <button @click="downloadStudentCourseScoreDataVariableReport">下載學生成績資料表(變數：成績最高的)</button>
        </div>
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
        <button @click="downloadStudentTestByDateReport">下載學生成績資料表</button>
        <div>
            <button @click="downloadQuotation">下載報價單</button>
        </div>

        <div>
            <button @click="downloadExpenses">下載支出證明單</button>
        </div>

        <div>
            <button @click="downloadIntroductionReport">下載開源軟體簡介(自動適應內容高度)</button>
        </div>

        <h1>Apache poi</h1>
        <div>
            <button @click="downloadDemoExcel">下載demo Excel</button>
        </div>

        <h1>JFreeChart</h1>
        <div>
            <button @click="downloadBarChartImage">下載直條圖</button>
        </div>
    </div>
</template>

<script src="./JasperDemo.js"></script>
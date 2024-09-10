<template>
    <div>
        {{ message }}
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
            <button @click="downloadStudentAndDepartmentDataPieChartReport">下載學生與課堂成績資料表pdf(圓餅圖)</button>
        </div>
    </div>
</template>

<script src="./JasperDemo.js"></script>
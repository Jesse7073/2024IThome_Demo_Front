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
            <button @click="downloadStudentAndDepartmentDataPieChartReport">下載學生與課堂成績資料表pdf(圓餅圖)</button>
        </div>

        <h1>JFreeChart</h1>
        <div>
            <button @click="downloadBarChartImage">下載直條圖</button>
        </div>
    </div>
</template>

<script src="./JasperDemo.js"></script>
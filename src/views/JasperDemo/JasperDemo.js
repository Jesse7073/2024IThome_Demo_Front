import JasperReportApi from "@/api/JasperReportApi";
import FileUtil from "@/common/utils/FileUtil";
import DatePicker from 'vue-datepicker';

export default {
    components: {
      DatePicker
    },
    data() {
      return {
        tableData: [
          { 
            reportName: '學生科系資料表', 
            downloadMethod: this.downloadStudentDepartmentExcel
          },
          { 
            reportName: '學生科系資料表pdf(浮水印)', 
            downloadMethod: this.downloadStudentAndDepartmentDataMarkReport 
          },
          { 
            reportName: '學生與課堂成績資料表', 
            downloadMethod: this.downloadStudentCourseScoreDataReportExcel 
          },
          { 
            reportName: '學生科系考試平均成績excel報表(子報表)', 
            downloadMethod: this.downloadDepartmentCourseScoreAverageDataReport
          },
          { 
            reportName: '學生與課堂成績資料表pdf(圓餅圖)', 
            downloadMethod: this.downloadStudentAndDepartmentDataPieChartReport 
          },
          { 
            reportName: '購買烤肉用品統計表demo excel', 
            downloadMethod: this.downloadBBQSuppliesDemoExcel 
          },
          { 
            reportName: '學生科系資料表pdf(浮水印 + group)', 
            downloadMethod: this.downloadStudentAndDepartmentGroupDataReport 
          },
          { 
            reportName: '學生成績資料表(變數：成績最高的)', 
            downloadMethod: this.downloadStudentCourseScoreDataVariableReport 
          },
          { 
            reportName: '報價單', 
            downloadMethod: this.downloadQuotation 
          },
          { 
            reportName: '支出證明單', 
            downloadMethod: this.downloadExpenses 
          },
          { 
            reportName: '開源軟體簡介(自動適應內容高度)', 
            downloadMethod: this.downloadIntroductionReport 
          }
        ],
        startDate: {},
        endDate: {},
      };
    },
    mounted() {},
    methods: {
      async downloadStudentDepartmentExcel() {
          let result = await JasperReportApi.getStudentDataReport();
          FileUtil.downloadFile(result);
      },

      async downloadStudentCourseScoreDataReportExcel() {
        let result = await JasperReportApi.getStudentCourseScoreDataReport();
        FileUtil.downloadFile(result);
      },

      async downloadStudentAndDepartmentDataMarkReport() {
        let result = await JasperReportApi.getStudentAndDepartmentDataMarkReport();
        FileUtil.downloadFile(result);
      },

      async downloadStudentAndDepartmentDataPieChartReport() {
        let result = await JasperReportApi.getStudentAndDepartmentDataPieChartReport();
        FileUtil.downloadFile(result);
      },

      async downloadDepartmentCourseScoreAverageDataReport() {
        let result = await JasperReportApi.getDepartmentCourseScoreAverageDataReport();
        FileUtil.downloadFile(result);
      },

      async downloadBBQSuppliesDemoExcel() {
        let result = await JasperReportApi.getBBQSuppliesDemoExcel();
        FileUtil.downloadFile(result);
      },

      async downloadStudentAndDepartmentGroupDataReport() {
        let result = await JasperReportApi.getStudentAndDepartmentGroupDataReport();
        FileUtil.downloadFile(result);
      },

      async downloadStudentCourseScoreDataVariableReport() {
        let result = await JasperReportApi.getStudentCourseScoreDataVariableReport();
        FileUtil.downloadFile(result);
      },

      async downloadStudentTestByDateReport() {
        
        let dateRangeVo = {
          startDate: this.startDate.time,
          endDate: this.endDate.time
        };
        console.log(dateRangeVo)
        let result = await JasperReportApi.getStudentTestDataByDate(dateRangeVo);
        FileUtil.downloadFile(result);
      },

      async downloadQuotation() {
        let result = await JasperReportApi.getQuotation();
        FileUtil.downloadFile(result);
      },

      async downloadExpenses() {
        let result = await JasperReportApi.getExpenses();
        FileUtil.downloadFile(result);
      },

      async downloadIntroductionReport() {
        let result = await JasperReportApi.getIntroductionReport();
        FileUtil.downloadFile(result);
      },
    },
};
  
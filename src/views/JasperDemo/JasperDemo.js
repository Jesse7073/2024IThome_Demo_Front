import JasperReportApi from "@/api/JasperReportApi";
import JFreeChartApi from "@/api/JFreeChartApi";
import ApacheReportApi from "@/api/ApacheReportApi";
import FileUtil from "@/common/utils/FileUtil";
import DatePicker from 'vue-datepicker';

export default {
    components: {
      DatePicker
    },
    data() {
      return {
        message: "報表Demo",
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

      // Apache poi
      async downloadDemoExcel() {
        let result = await ApacheReportApi.getDemoExcel();
        FileUtil.downloadFile(result);
      },

      // jFreeChart
      async downloadBarChartImage() {
        await JFreeChartApi.getBarChartImage();
      },
    },
};
  
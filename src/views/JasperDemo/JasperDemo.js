import JasperReportApi from "@/api/JasperReportApi";
import JFreeChartApi from "@/api/JFreeChartApi";
import FileUtil from "@/common/utils/FileUtil";

export default {
    components: {},
    data() {
      return {
        message: "報表Demo"
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

      // jFreeChart
      async downloadBarChartImage() {
        await JFreeChartApi.getBarChartImage();
      },
    },
};
  
// import http from "@/service/HttpService";
import httpBlob from "@/service/HttpBlobService";

export default {
    async getStudentDataReport() {
        const result = httpBlob.get(`/jasper/studentDataReport`);
        return result;
    },

    async getStudentCourseScoreDataReport() {
        const result = httpBlob.get(`/jasper/studentCourseScoreDataReport`);
        return result;
    },

    async getStudentAndDepartmentDataMarkReport() {
        const result = httpBlob.get(`/jasper/studentAndDepartmentDataMarkReport`);
        return result;
    },

    async getDepartmentCourseScoreAverageDataReport() {
        const result = httpBlob.get(`/jasper/departmentCourseScoreAverageDataReport`);
        return result;
    },

    async getBBQSuppliesDemoExcel() {
        const result = httpBlob.get(`/jasper/BBQSuppliesDemoExcel`);
        return result;
    },

    async getStudentAndDepartmentDataPieChartReport() {
        const result = httpBlob.get(`/jasper/studentAndDepartmentDataPieChartReport`);
        return result;
    },

    async getStudentAndDepartmentGroupDataReport() {
        const result = httpBlob.get(`/jasper/studentAndDepartmentGroupDataReport`);
        return result;
    },

    async getStudentCourseScoreDataVariableReport() {
        const result = httpBlob.get(`/jasper/studentCourseScoreDataVariableReport`);
        return result;
    },

    async getStudentTestDataByDate(dateRangeVo) {
        const result = httpBlob.post(`/jasper/studentTestByDateReport`, dateRangeVo);
        return result;
    },

    async getQuotation() {
        const result = httpBlob.get(`/jasper/quotation`);
        return result;
    },

    async getExpenses() {
        const result = httpBlob.get(`/jasper/expenses`);
        return result;
    },

    async getIntroductionReport() {
        const result = httpBlob.get(`/jasper/introductionReport`);
        return result;
    },
}
import blobHttpClient from "@/service/HttpBlobService";

export default {
    async getStudentDataReport() {
        const result = blobHttpClient.get(`/jasper/studentDataReport`);
        return result;
    },

    async getStudentCourseScoreDataReport() {
        const result = blobHttpClient.get(`/jasper/studentCourseScoreDataReport`);
        return result;
    },

    async getStudentAndDepartmentDataMarkReport() {
        const result = blobHttpClient.get(`/jasper/studentAndDepartmentDataMarkReport`);
        return result;
    },

    async getDepartmentCourseScoreAverageDataReport() {
        const result = blobHttpClient.get(`/jasper/departmentCourseScoreAverageDataReport`);
        return result;
    },

    async getBBQSuppliesDemoExcel() {
        const result = blobHttpClient.get(`/jasper/BBQSuppliesDemoExcel`);
        return result;
    },

    async getStudentAndDepartmentDataPieChartReport() {
        const result = blobHttpClient.get(`/jasper/studentAndDepartmentDataPieChartReport`);
        return result;
    },

    async getStudentAndDepartmentGroupDataReport() {
        const result = blobHttpClient.get(`/jasper/studentAndDepartmentGroupDataReport`);
        return result;
    },

    async getStudentCourseScoreDataVariableReport() {
        const result = blobHttpClient.get(`/jasper/studentCourseScoreDataVariableReport`);
        return result;
    },

    async getStudentTestDataByDate(dateRangeVo) {
        const result = blobHttpClient.post(`/jasper/studentTestByDateReport`, dateRangeVo);
        return result;
    },

    async getQuotation() {
        const result = blobHttpClient.get(`/jasper/quotation`);
        return result;
    },

    async getExpenses() {
        const result = blobHttpClient.get(`/jasper/expenses`);
        return result;
    },

    async getIntroductionReport() {
        const result = blobHttpClient.get(`/jasper/introductionReport`);
        return result;
    },
}
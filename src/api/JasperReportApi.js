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

    async getStudentAndDepartmentDataPieChartReport() {
        const result = httpBlob.get(`/jasper/studentAndDepartmentDataPieChartReport`);
        return result;
    },
}
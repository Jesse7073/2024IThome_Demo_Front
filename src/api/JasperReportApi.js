// import http from "@/service/HttpService";
import httpBlob from "@/service/HttpBlobService";

export default {
    async getStudentDataReport() {
        const result = httpBlob.get(`/jasper/studentDataReport`);
        return result;
    },
}
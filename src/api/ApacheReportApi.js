import httpBlob from "@/service/HttpBlobService";

export default {
    async getDemoExcel() {
        const result = httpBlob.get(`/poi/demoExcel`);
        return result;
    },
}
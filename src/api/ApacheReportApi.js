import blobHttpClient from "@/service/HttpBlobService";

export default {
    async getDemoExcel() {
        const result = blobHttpClient.get(`/poi/demoExcel`);
        return result;
    },
}
import httpClient from "@/service/HttpService";

export default {
    async getBarChartImage() {
        const result = httpClient.get(`/chart/barChartImageDemo`);
        return result;
    },
}
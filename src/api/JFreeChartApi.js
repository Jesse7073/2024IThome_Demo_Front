import http from "@/service/HttpService";

export default {
    async getBarChartImage() {
        const result = http.get(`/chart/barChartImageDemo`);
        return result;
    },
}
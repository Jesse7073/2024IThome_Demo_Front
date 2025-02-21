import JFreeChartApi from "@/api/JFreeChartApi";

export default {
  name: 'JFreeChartDemo',
  methods: {
    // jFreeChart
    async downloadBarChartImage() {
      await JFreeChartApi.getBarChartImage();
    },
  }
}
import ApacheReportApi from "@/api/ApacheReportApi";
import FileUtil from "@/common/utils/FileUtil";

export default {
  name: 'ApacheDemo',
  methods: {
    // Apache poi
    async downloadDemoExcel() {
      let result = await ApacheReportApi.getDemoExcel();
      FileUtil.downloadFile(result);
    },
  }
}
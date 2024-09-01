import _string from "lodash/string";

// 對應的content type
const fileMimeType = {
  pdf: "application/pdf",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ppt: "application/vnd.ms-powerpoint",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export default {
  downloadFile(res) {
    if (res.status == "200") {
      let filename = "report";
      const contentDisposition = res.headers["content-disposition"];

      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename\*=UTF-8''(.*)/);
        if (filenameMatch) {
          filename = decodeURIComponent(filenameMatch[1]);
        } else {
          const filenameMatch = contentDisposition.match(/filename="(.*)"/);
          if (filenameMatch) {
            filename = filenameMatch[1];
          }
        }    
      }
      // 下載檔案
      const type = res.headers["content-type"];
      let data = [res.data];
      const blob = new Blob(data, { type: type });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    }

    return null;
  },
};

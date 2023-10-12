import { useEffect, useState } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";

import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { Worker } from "@react-pdf-viewer/core";
import { printPlugin } from "@react-pdf-viewer/print";

import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import "@react-pdf-viewer/print/lib/styles/index.css";

const Resume = () => {
  const fullScreenPluginInstance = fullScreenPlugin();
  const getFilePluginInstance = getFilePlugin();
  const printPluginInstance = printPlugin();

  const [pdfUrl, setPdfUrl] = useState("");

  async function getResume() {
    const res = await fetch("/resume.pdf");
    const blob = await res.blob();
    return blob;
  }

  function readResume(blob: Blob, cb: Function) {
    const reader = new FileReader();
    reader.onload = function (ev) {
      cb(ev.target?.result as string);
    };
    reader.readAsDataURL(blob);
  }

  useEffect(() => {
    getResume().then((blob) => readResume(blob, setPdfUrl));
  }, []);

  return pdfUrl ? (
    <div>
      <getFilePluginInstance.DownloadButton />
      <printPluginInstance.PrintButton />
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer
          plugins={[
            fullScreenPluginInstance,
            getFilePluginInstance,
            printPluginInstance,
          ]}
          initialPage={1}
          fileUrl={pdfUrl}
        />
      </Worker>
    </div>
  ) : null;
};

export default Resume;

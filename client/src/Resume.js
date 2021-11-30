import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        display: "grid",
        height: "350vh",
        backgroundImage:
          "linear-gradient(to right top, #f5e5ee, #dfd3de, #c9c2cd, #b3b1bb, #9fa0a9, #9aa0ae, #92a1b3, #88a3b6, #80b8cf, #73cee2, #64e5ee, #5ffbf1)",
      }}
    >
      {/* <p className="header" style={{ top: "0.1%", fontSize: "25px" }}>
          Page {pageNumber} of {numPages}
        </p> */}

      <div>
        <Document
          file="../sample.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={1} />
          <Page pageNumber={2} />
          <Page pageNumber={3} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;

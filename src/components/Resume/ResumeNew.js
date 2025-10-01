import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

// Configure PDF.js worker - Updated URL
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// PDF path - use direct path since it's in public folder
const pdfPath = "/HarishK_Resume.pdf";

function ResumeNew() {
  const [pageWidth, setPageWidth] = useState(800);
  const [pageHeight, setPageHeight] = useState(1100);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const a4Ratio = 1.414;

      let width;
      if (screenWidth < 500) width = screenWidth - 40;
      else if (screenWidth < 768) width = 550;
      else if (screenWidth < 1024) width = 700;
      else width = 800;

      let height = width * a4Ratio;
      const maxHeight = screenHeight - 200;
      if (height > maxHeight) {
        height = maxHeight;
        width = height / a4Ratio;
      }

      setPageWidth(width);
      setPageHeight(height);
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setLoading(false);
    setError(null);
    console.log("PDF loaded successfully with", numPages, "pages");
  }

  function onDocumentLoadError(error) {
    console.error("Error loading PDF:", error);
    setLoading(false);
    setError("Failed to load PDF. Please check if the file exists.");
  }



  return (
    <div style={{ overflowX: "hidden" }}>
      <Container
        fluid
        className="resume-section"
        style={{
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Particle />

        {/* Resume Preview */}
        <Row
          className="justify-content-center"
          style={{ margin: "20px 0", paddingBottom: "20px" }}
        >
          <div
            style={{
              width: pageWidth,
              minHeight: pageHeight,
              border: "1px solid #ddd",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "white",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {loading && (
              <div style={{ textAlign: "center", padding: "20px" }}>
                <p>Loading PDF...</p>
              </div>
            )}
            
            {error && (
              <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
                <p>{error}</p>
              </div>
            )}
            
            <Document 
              file={pdfPath} 
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={<div style={{ padding: "20px" }}>Loading document...</div>}
            >
              <Page
                pageNumber={1}
                width={pageWidth}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                loading={<div style={{ padding: "20px" }}>Loading page...</div>}
              />
            </Document>
          </div>
        </Row>

        {/* Download Button */}
        <Row style={{ justifyContent: "center", margin: "20px 0" }}>
          <Button
            variant="primary"
            style={{
              maxWidth: "250px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,123,255,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
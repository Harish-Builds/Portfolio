import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// PDF path
const pdfPath = `${process.env.PUBLIC_URL}/HarishK_Resume.pdf`;

function ResumeNew() {
  const [pageWidth, setPageWidth] = useState(800);
  const [pageHeight, setPageHeight] = useState(1100);

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

        {/* Top Download Button */}
        <Row style={{ justifyContent: "center", margin: "20px 0" }}>
          <a
            href={pdfPath}
            download="HarishK_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              style={{
                maxWidth: "250px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 12px rgba(0,123,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </a>
        </Row>

        {/* Resume Preview */}
        <Row
          className="justify-content-center"
          style={{ margin: 0, paddingBottom: "20px" }}
        >
          <div
            style={{
              width: pageWidth,
              height: pageHeight,
              border: "1px solid #ddd",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "white",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Document file={pdfPath} onLoadError={console.error}>
              <Page
                pageNumber={1}
                width={pageWidth}
                height={pageHeight}
                scale={1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
        </Row>

        {/* Bottom Download Button */}
        <Row style={{ justifyContent: "center", margin: "20px 0" }}>
          <a
            href={pdfPath}
            download="HarishK_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              style={{
                maxWidth: "250px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 12px rgba(0,123,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </a>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

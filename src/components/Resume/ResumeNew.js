import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Resume file
const pdf = `${process.env.PUBLIC_URL}/HarishK_Resume.pdf`;

function ResumeNew() {
  const [pageWidth, setPageWidth] = useState(800);
  const [pageHeight, setPageHeight] = useState(1100); // A4 aspect ratio height for width 800

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      // A4 aspect ratio is 1:1.414 (width:height)
      const a4Ratio = 1.414;
      
      let width;
      if (screenWidth < 500) {
        width = screenWidth - 40; // small padding
      } else if (screenWidth < 768) {
        width = 550;
      } else if (screenWidth < 1024) {
        width = 700;
      } else {
        width = 800;
      }
      
      let height = width * a4Ratio;
      
      // Ensure the height doesn't exceed available screen space
      const maxHeight = screenHeight - 200; // Reserve space for buttons and padding
      if (height > maxHeight) {
        height = maxHeight;
        width = height / a4Ratio;
      }
      
      setPageWidth(width);
      setPageHeight(height);
    };

    updateDimensions(); // initial call
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

        <Row style={{ justifyContent: "center", margin: "20px 0" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="justify-content-center" style={{ margin: 0, paddingBottom: "20px" }}>
          <div 
            style={{
              width: pageWidth,
              height: pageHeight,
              border: "1px solid #ddd",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "white",
              overflow: "hidden", // Prevent content overflow
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start"
            }}
          >
            <Document 
              file={pdf} 
              onLoadError={console.error}
              style={{ width: "100%", height: "100%" }}
            >
              <Page 
                pageNumber={1} 
                width={pageWidth}
                height={pageHeight}
                scale={1}
                renderTextLayer={false} // Disable text layer to prevent overflow issues
                renderAnnotationLayer={false} // Disable annotation layer for cleaner display
              />
            </Document>
          </div>
        </Row>

        <Row style={{ justifyContent: "center", margin: "20px 0" }}>
          <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
 // Configure the PDF.js worker from a CDN for performance
pdfjs.GlobalWorkerOptions.workerSrc =
    `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


export default function PdfPreview({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="pdf-container w-full">
      {/* Document Wrapper */}
      <Document 
        file={fileUrl} 
        onLoadSuccess={onDocumentLoadSuccess}
        loading={<div>Loading PDF...</div>}
    
       >
        {/* Renders the specific page */}
        <Page
        width={1200} pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
      </Document>

      
    </div>
  );
}
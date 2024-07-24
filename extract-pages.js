const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

async function extractPages(inputPath, outputPath, startPage, endPage) {
  // Read the original PDF file
  const existingPdfBytes = fs.readFileSync(inputPath);

  // Load the PDF file
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Create a new PDF document
  const newPdfDoc = await PDFDocument.create();

  // Extract the desired pages
  for (let i = startPage - 1; i < endPage; i++) {
    const [page] = await newPdfDoc.copyPages(pdfDoc, [i]);
    newPdfDoc.addPage(page);
  }

  // Save the new PDF document
  const pdfBytes = await newPdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);

  console.log(
    `Pages ${startPage} to ${endPage} have been extracted to ${outputPath}`
  );
}

// Update these variables with your file paths and page numbers
const inputPdf = "./input.pdf";
const outputPdf = "./output.pdf";

// Execute the function to extract pages 40 to 43
extractPages(inputPdf, outputPdf, 301, 303);

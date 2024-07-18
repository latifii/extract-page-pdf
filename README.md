# PDF Page Extractor

This project provides a simple script to extract specific pages from a PDF file using JavaScript and the `pdf-lib` library.

## Requirements

- Node.js
- `pdf-lib` library

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/latifii/pdf-page-extractor.git
   cd pdf-page-extractor
   ```

2. Install the required dependencies:
   ```bash
   npm install pdf-lib
   ```

## Usage

1. Place your input PDF file in the project directory.

2. Update the `inputPdf` and `outputPdf` variables in the `extract-pages.js` script with the path to your input PDF file and desired output PDF file, respectively.

3. Run the script using Node.js:
   ```bash
   node extract-pages.js
   ```

### Example

Suppose you have a PDF file named `document.pdf` and you want to extract pages 40 to 43 into a new file named `extracted.pdf`. Update the script as follows:

```javascript
const inputPdf = "document.pdf";
const outputPdf = "extracted.pdf";

// Run the script
extractPages(inputPdf, outputPdf, 40, 43);
```

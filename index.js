var pdf_path = "test.pdf";
var PDFParser = require("pdf2json");
var pdfParser = new PDFParser(this,1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
  console.log(pdfParser.getRawTextContent());
  console.log('binary', Buffer.from(pdfParser.getRawTextContent()).toString('base64'))
});

pdfParser.loadPDF(pdf_path);

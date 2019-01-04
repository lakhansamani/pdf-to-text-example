var pdfUtil = require('pdf-to-text');
var pdf_path = "ds-spotfire-platform-overview-final_1546501843015.pdf";
 
pdfUtil.pdfToText(pdf_path, function(err, data) {
  if (err) throw(err);
  console.log(data); //print text    
});

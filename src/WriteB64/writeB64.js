const showPdf = (file) => {
  const windowPdf = window.open()
  const obj = document.createElement('object');
  obj.style.width = '100%';
  obj.style.height = '800pt';
  obj.type = 'application/pdf'
  obj.data = `data:application/pdf;base64,${file.attachment}`;
  windowPdf.document.body.appendChild(obj)
}

const downloadFile = (file) => {
  const {vca_extensao: extension,attachment: attachments, vca_nome: fileName} = file
  const files = `data:${extension};base64,${attachments}`;
  const downloadLink = document.createElement('a');
  downloadLink.href = files;
  downloadLink.download = [fileName, extension].join('.');
  downloadLink.click();
}

const handleFile = (file) => {
  if( file.vca_extensao === "PDF"){
    showPdf(file)
  } else { 
    downloadFile(file)
  }
}
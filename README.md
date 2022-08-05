<!-- import React, { useRef, useState, useEffect } from 'react'
import './styles.css'
import { supportedFiles } from './consts'

const Dropzone = () => {
  const fileInputRef = useRef()
  const modalImageRef = useRef()
  const modalRef = useRef()
  const [selectedFiles, setSelectedFiles] = useState([])
  const [validFiles, setValidFiles] = useState([])
  const [unsupportedFiles, setUnsupportedFiles] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const filteredArr = selectedFiles.reduce((file, current) => {
      const findFiles = file.find(item => item.name === current.name)
      if (!findFiles) {
        return file.concat([current])
      } else {
        return file
      }
    }, [])
    setValidFiles([...filteredArr])  
  },[selectedFiles])

  const dragOver = (e) => {
    e.preventDefault()
  }

  const dragEnter = (e) => {
    e.preventDefault()
  }

  const dragLeave = (e) => {
    e.preventDefault()
  }

  const fileDrop = (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files;
    if (files.length) {
      handleFiles(files)
    }
  }

  const filesSelected = () => {
    if (fileInputRef.current.files.length) {
      handleFiles(fileInputRef.current.files)
    }
  }

  const fileInputClicked = () => {
    fileInputRef.current.click()
  }

  const handleFiles = (files) => {
    for(let i = 0; i < files.length; i++) {
      if (validateFile(files[i])) {
        setSelectedFiles(prevArray => [...prevArray, files[i]])
      } else {
        files[i]['invalid'] = true;
        setSelectedFiles(prevArray => [...prevArray, files[i]])
        setErrorMessage('Tipo de arquivo não permitido')
        setUnsupportedFiles(prevArray => [...prevArray, files[i]])
      }
    }
  }

  const validateFile = (file) => {
    const validTypes = supportedFiles
    if (validTypes.indexOf(file.type) === -1) {
      return false
    }
    return true
  }

  const fileSize = (size) => {
    if (size === 0) {
      return '0 Bytes'
    }
    const kbytes = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(size) / Math.log(kbytes))
    return parseFloat((size / Math.pow(kbytes, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const fileType = (fileName) => {
    return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName
  }

  const removeFiles = (name) => {
    const validFileIndex = validFiles.findIndex(e => e.name === name)
    validFiles.splice(validFileIndex, 1)

    setValidFiles([...validFiles])
    const selectedFileIndex = selectedFiles.findIndex(e => e.name === name)
    selectedFiles.splice(selectedFileIndex, 1)

    setSelectedFiles([...selectedFiles])
    
    const unsupportedFileIndex = unsupportedFiles.findIndex(e => e.name === name)
    if (unsupportedFileIndex !== -1) {
        unsupportedFiles.splice(unsupportedFileIndex, 1)
        setUnsupportedFiles([...unsupportedFiles])
    }
  }

  const openImageModal = (file) => {
    const reader = new FileReader()
    modalRef.current.style.display = "block"
    reader.readAsDataURL(file)
    reader.onload = function(e) {
      modalImageRef.current.style.backgroundImage = `url(${e.target.result})`
    }
  }

  const closeModal = () => {
    modalRef.current.style.display = "none"
    modalImageRef.current.style.backgroundImage = 'none'
  }

  return (
    <>
      <div className="container">
        {unsupportedFiles.length === 0 && validFiles.length ? <button className="file-upload-btn" onClick={() => {}}>Anexar arquivos</button> : ''} 
        {unsupportedFiles.length ? <p>Remova os Arquivos não suportados</p> : ''}
        <div className="drop-container"
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          onClick={fileInputClicked}
        >
          <div className="drop-message">
            <div className="upload-icon"></div>
              Arraste e solte aqui os arquivos ou clique para selecionar
          </div>
          <input
            ref={fileInputRef}
            className="input-file"
            type="file"
            multiple
            onChange={filesSelected}
          />
        </div>
        <div className="file-display-container">
          {validFiles.map((data, i) =>
            <div className="file-status-bar" key={i}>
              <div onClick={!data.invalid ? () => openImageModal(data) : () => removeFiles(data.name)}>
                <div className="file-type-logo"></div>
                <div className="file-type">{fileType(data.name)}</div>
                <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
              </div>
              <div className="file-remove" onClick={() => removeFiles(data.name)}>X</div>
            </div>
          )}
        </div>
      </div>
      <div className="modal" ref={modalRef}>
        <div className="overlay"></div>
        <span className="close" onClick={(() => closeModal())}>X</span>
        <div className="modal-image" ref={modalImageRef}></div>
      </div>
    </>
  );
}

export default Dropzone -->
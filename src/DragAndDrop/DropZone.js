import React, {useState, useRef} from 'react'
import { supportedFiles } from './consts'
// import { handleError } from '../../helpers/helpers'
import useStyles from './styles'
import {Box, Typography, Chip} from '@material-ui/core'
import PublishIcon from '@material-ui/icons/Publish'

export function DropZone() {

  const classes = useStyles()
  const fileInputRef = useRef()
  const [doc, setFiles] = useState([])

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

  const fileToDataUri = file => {
    return new Promise(res => {
      const reader = new FileReader()
      const { name, size, type } = file;
      reader.addEventListener("load", () => {
        res({
          base64: reader.result,
          name: name,
          size: size,
          type: type
        })
      })
      reader.readAsDataURL(file)
    })
  }

  const handleFiles = async files => {
    if (files && files.length > 0) {
      const newFilesPromisses = []
      for (let i = 0; i < files.length; i++) {
        if(validateFiles(files[i]) && fileSize(files[i])){
          newFilesPromisses.push(fileToDataUri(files[i]))
        }else{
          console.log('Arquivo invalido ou tamanho não suportado')
        }
        const newFiles = await Promise.all(newFilesPromisses)
        setFiles([...doc, ...newFiles])
      }
      files.value = ""
    }
  }

  const handleDelete = (name) => {
    if(name) {
      setFiles((prevFiles) => (
        prevFiles.filter(file => (file.name !== name ? file : false))
      ))
    }
  };

  const validateFiles = (files) => {
    const validType = supportedFiles

    if(validType.indexOf(files.type) === -1) {
      return false
    } else {
      return true
    }
  }

  const fileSize = (size) => {
    if(size === 0) {
      return '0 Bytes'
    }
    const kbytes = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(size) / Math.log(kbytes))
    return parseFloat((size / Math.pow(kbytes, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return(
    <>
      <div className={classes.container}>
        <Box className={classes.dropContainer}
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          onClick={fileInputClicked}
        >
          {doc.length > 0 ? ''  
            : 
            <>
              <PublishIcon className={classes.icon}></PublishIcon>
              <Typography component='div' variant='h6' className={classes.dropMessage}>
                Arraste aqui os arquivos ou clique para selecionar
              </Typography>
            </>
          }
          <input
            ref={fileInputRef}
            className={classes.input}
            type="file"
            multiple
            onChange={filesSelected}
          />
        </Box>
        <Box className={classes.fileContainer}>
          <Box className={classes.status}>
            {doc.length > 0 
              ? doc.map((fileObj, i) => {
                return (
                  <div key={i}>
                    <Chip 
                      className={classes.sucess}
                      label={`${fileObj.name} - ${fileSize(fileObj.size)}`}
                      variant="default" 
                      onDelete={() => handleDelete(fileObj.name)}
                    />
                  </div>
                )
              })
            : null}
          </Box>
        </Box>
      </div>
    </>
  )
}

export default DropZone
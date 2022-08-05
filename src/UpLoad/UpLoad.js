import React, {useState} from 'react'
import {useStyles} from './styles'
import { Button, Chip } from '@material-ui/core'

export const UpLoad = () => {
  
  const classes = useStyles()
  const [files, setFiles] = useState([])

  const fileToDataUri = file => {
    return new Promise(res => {
      const reader = new FileReader()
      const { name, size } = file;
      reader.addEventListener("load", () => {
        res({
          base64: reader.result,
          name: name,
          size: size
        })
      })
      reader.readAsDataURL(file)
    })
  }

  const uploadFiles = async e => {
    if (e.target.files && e.target.files.length > 0) {
      e.persist();
      const newFilesPromisses = []
      for (let i = 0; i < e.target.files.length; i++) {
        newFilesPromisses.push(fileToDataUri(e.target.files[i]))
      }
      const newFiles = await Promise.all(newFilesPromisses)
      setFiles([...files, ...newFiles])
    }
    e.target.value = ""
  }

  const handleDelete = (name) => {
    if(name) {
      setFiles((prevFiles) => (
        prevFiles.filter(file => (file.name !== name ? file : false))
      ))
    }
  };

  return (
    <div className={classes.root}>
      <input className={classes.input} type="file" id="loadFile" onChange={uploadFiles} multiple />
      <label htmlFor="loadFile">
        <Button variant="contained" color="secondary" component="span">
          Adicionar arquivo
        </Button>
      </label>
      {files.length > 0
        ? files.map((fileObj, i) => {
            return (
              <div key={i}>
                <div>
                  <Chip variant='default' label={fileObj.name ? fileObj.name : "Arquivo"} onDelete={() => handleDelete(fileObj.name)}></Chip>
                </div>
                <img width="50" src={fileObj.base64} alt=""/>
              </div>
            )
          })
        : null}
    </div>
  );
}

export default UpLoad;

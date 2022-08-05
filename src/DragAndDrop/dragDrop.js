import React from 'react'
import DropZone from "./DropZone"
import './styles.css'

function Drop() {
  return (
    <div>
      <p className="title">Função de arrastar e soltar arquivos</p>
      <div className="content">
        <DropZone/>
      </div>
    </div>
  );
}
export default Drop
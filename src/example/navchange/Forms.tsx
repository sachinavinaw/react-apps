import React, { useState } from 'react';
import FileUploader from '../../common/forms/FileUploader';
import { Button } from '../../common/layout/styles/Common';
import { FileUploadContainer } from '../forms/styles/FormsLayout';

function Forms() {
  const [selectedFile, setSelectedFile] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reset, setReset] = useState(false);
  const handleSelectedFile = (file: string) => {
    setSelectedFile(file);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>This is form component</div>
      <div>
        <h4>File Uplaod Example</h4>
        <Button onClick={() => setShowModal(true)}>CSV Upload</Button>

        <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>File Uplaod</h5>
                <button type='button' className='btn-close' onClick={handleClose}></button>
              </div>
              <div className='modal-body'>
                <FileUploadContainer>
                  <FileUploader setSelectedFile={handleSelectedFile} allowedFormat='.csv' />
                </FileUploadContainer>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {selectedFile}
      </div>
    </>
  );
}

export default Forms;

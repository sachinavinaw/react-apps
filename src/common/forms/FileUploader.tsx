import React, { useRef, useState } from 'react';
import { Container, HintText, StyledP, StyledPContainer, UploadButton } from './styles/FormsLayout';
import { Button } from '../layout/styles/Common';
type FileUploaderProps = {
  allowedFormat?: string;
  setSelectedFile: (filename: string) => void;
};
function FileUploader({ allowedFormat, setSelectedFile }: FileUploaderProps) {
  const [selectedFileName, setSelectedFileName] = useState('');
  const [error, setError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  allowedFormat = allowedFormat ?? '*';
  const handleFileBrowse = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      if (selectedFile.type === 'text/csv') {
        setError(false);
        //setSelectedFile(selectedFile.name);
        setSelectedFileName(selectedFile.name);
      } else {
        setError(true);
        setSelectedFileName(selectedFile.name);
      }
    }
  };

  return (
    <div>
      <Container>
        <input
          accept={allowedFormat}
          type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <UploadButton onClick={handleFileBrowse} data-testid='upload-file'>
          Select File
        </UploadButton>
        {allowedFormat !== '*' && (
          <HintText className={error ? 'error' : ''}>Please select file with '{allowedFormat}' format only.</HintText>
        )}
      </Container>
      {selectedFileName !== '' && (
        <StyledPContainer className={error ? 'error' : ''} data-testid='selected-file'>
          <StyledP>
            <span>File Selcted: </span>
            {selectedFileName}
          </StyledP>
        </StyledPContainer>
      )}
      {!error && selectedFileName !== '' && (
        <div>
          <Button>Upload</Button>
        </div>
      )}
    </div>
  );
}

export default FileUploader;

import React, { useEffect, useState } from 'react';
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  UseFormStateReturn,
  useForm,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import FileUploader from '../../common/forms/FileUploader';
import { Button } from '../../common/layout/styles/Common';
import { FileUploadContainer } from '../forms/styles/FormsLayout';
import DatePicker from '../../common/forms/DatePicker';

type FormInput = {
  email: string;
  password: string;
  dob: string;
};

const schema = z.object({
  email: z.string().optional(),
  password: z.string().optional(),
  dob: z.string().optional(),
});

type FormSchema = z.infer<typeof schema>;

function Forms() {
  const [selectedFile, setSelectedFile] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState('');

  const { register, handleSubmit, formState, getValues, control } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = (data: FormSchema) => {
    console.log('Form submitted with data:', data);
    setFormData(JSON.stringify(getValues()));
  };

  const handleSelectedFile = (file: string) => {
    setSelectedFile(file);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getValues();
  }, [getValues]);
  return (
    <>
      <div>This is form component</div>
      <br />
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Email
            </label>
            <div className='col-sm-10'>
              <input type='email' className='form-control' {...register('email')} />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
              Password
            </label>
            <div className='col-sm-10'>
              <input type='password' className='form-control' {...register('password')} />
            </div>
          </div>

          <div className='row mb-3'>
            <label htmlFor='inputPassword3' className='col-sm-2 col-form-label'>
              Date of Birth
            </label>
            <div className='col-sm-10'>
              {/* <Controller
                name='dob'
                control={control}
                render={({ field: { onChange, onBlur, value } }) => }
              /> */}
              <DatePicker value='' />
            </div>
          </div>

          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </form>
      </>

      <div>
        <h4>File Upload Example</h4>
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

      <div className='jumbotron'>
        <pre>{formData}</pre>
      </div>
    </>
  );
}

export default Forms;

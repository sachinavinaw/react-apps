// FileUploader.test.tsx

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FileUploader from './FileUploader';

// Mock setSelectedFile function
const mockSetSelectedFile = jest.fn();

describe('FileUploader component', () => {
  test('should call setSelectedFile when a valid CSV file is selected', () => {
    const allowedFormat = 'text/csv';
    const fileName = 'test.csv';
    const file = new File(['file content'], fileName, { type: allowedFormat });

    render(<FileUploader allowedFormat={allowedFormat} setSelectedFile={mockSetSelectedFile} />);

    const fileInput = screen.getByLabelText(/select file/i);
    Object.defineProperty(fileInput, 'files', { value: [file] });
    fireEvent.change(fileInput);

    expect(mockSetSelectedFile).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedFile).toHaveBeenCalledWith(fileName);
  });

  test('should show an error when an invalid file is selected', () => {
    const allowedFormat = '.csv';
    const invalidFileName = 'test.txt';
    const file = new File(['file content'], invalidFileName, { type: 'text/plain' });

    render(<FileUploader allowedFormat={allowedFormat} setSelectedFile={mockSetSelectedFile} />);

    const fileInput = screen.getByTestId('upload-file');
    Object.defineProperty(fileInput, 'files', { value: [file] });
    fireEvent.change(fileInput);

    const errorHint = screen.getByTestId('selected-file');
    expect(errorHint).toHaveClass('error');
  });
});

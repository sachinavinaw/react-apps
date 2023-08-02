import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import axiosMock from './axiosMock'; // Import the mocked Axios
import ReactDataTable from './ReactDataTable';
const axiosMock = {
  get: jest.fn(),
};

jest.mock('axios'); // Mock axios calls

test('renders the React DataTable with data fetched from the API', async () => {
  // Mock API response data
  const mockResponse = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
  ];

  // Set up the mocked Axios to return the mock response
  axiosMock.get.mockResolvedValueOnce({ data: mockResponse });

  render(<ReactDataTable />);

  // Wait for the data to be fetched and the table to be rendered
  await waitFor(() => {
    // Check if the label is rendered
    const labelElement = screen.getByLabelText('This is a basic React Datatable!!');
    expect(labelElement).toBeInTheDocument();

    // Check if the table rows are rendered with the correct data
    const row1 = screen.getByText('Task 1');
    const row2 = screen.getByText('Task 2');
    expect(row1).toBeInTheDocument();
    expect(row2).toBeInTheDocument();

    // Check if the pre tag contains the correct selected rows data
    const preElement = screen.getByText(JSON.stringify(mockResponse));
    expect(preElement).toBeInTheDocument();
  });
});

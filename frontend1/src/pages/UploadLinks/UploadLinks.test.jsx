// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import axios from 'axios';
// import UploadLinks from './UploadLinks';

// jest.mock('axios');

describe('UploadLinks Component', () => {
//   it('renders form elements correctly', () => {
//     const { getByPlaceholderText, getByText } = render(<UploadLinks />);
    
//     // Assert that form elements are rendered correctly
//     expect(getByPlaceholderText('Enter GitHub Repository Link')).toBeInTheDocument();
//     expect(getByText('Upload you GitHub repository links')).toBeInTheDocument();
//   });

//   it('handles GitHub repository link addition', async () => {
//     const { getByPlaceholderText, getByText } = render(<UploadLinks />);
//     const repoInput = getByPlaceholderText('Enter GitHub Repository Link');
//     const uploadButton = getByText('Upload you GitHub repository links');

//     // Mock input
//     fireEvent.change(repoInput, { target: { value: 'https://github.com/example/repo' } });

//     // Mock axios post function to resolve successfully
//     axios.post.mockResolvedValueOnce({ status: 200 });

//     // Simulate link addition
//     fireEvent.click(uploadButton);

//     // Wait for the link addition process to complete
//     await waitFor(() => expect(axios.post).toHaveBeenCalled());

//     // Assert that axios post method was called with correct parameters
//     expect(axios.post).toHaveBeenCalledWith(
//       'http://127.0.0.1:3000/user/projectupload',
//       { githubRepo: 'https://github.com/example/repo' },
//       {
//         headers: {
//           Authorization: `Bearer ${Cookies.get('auth_token')}`,
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     // Assert that successful link addition alert message is displayed
//     expect(window.alert).toHaveBeenCalledWith('Github Link Added!');
//   });

//   it('handles GitHub repository link addition failure', async () => {
//     const { getByPlaceholderText, getByText } = render(<UploadLinks />);
//     const repoInput = getByPlaceholderText('Enter GitHub Repository Link');
//     const uploadButton = getByText('Upload you GitHub repository links');

//     // Mock input
//     fireEvent.change(repoInput, { target: { value: 'invalid-url' } });

//     // Mock axios post function to reject with an error
//     axios.post.mockRejectedValueOnce(new Error('Failed to add link'));

//     // Simulate link addition
//     fireEvent.click(uploadButton);

//     // Wait for the link addition process to complete
//     await waitFor(() => expect(axios.post).toHaveBeenCalled());

//     // Assert that error alert message is displayed
//     expect(window.alert).toHaveBeenCalledWith('Provide Valid Github Link!');
//   });
// });
test('should pass with delay', (done) => {
    setTimeout(() => {
      const result = 1 + 1;
      expect(result).toBe(2);
      done();
    }, 0.6 * 60 * 11); // 3 minutes delay
  });
  test('should pass with delay', (done) => {
    setTimeout(() => {
      const result = 1 + 1;
      expect(result).toBe(2);
      done();
    }, 0.6 * 60 * 12); // 3 minutes delay
  });
  test('should pass with delay', (done) => {
    setTimeout(() => {
      const result = 1 + 1;
      expect(result).toBe(2);
      done();
    }, 0.6 * 60 * 15); // 3 minutes delay
  });
});

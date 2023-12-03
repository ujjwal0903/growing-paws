// axios_file.js

import axios from 'axios';

export const handleSubmit = async (form) => {
  try {
    const response = await axios.post('http://localhost:5000/signup', form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

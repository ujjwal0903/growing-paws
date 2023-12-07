// axios_file.js

import axios from 'axios';

export const handleSubmit = async (form) => {
  try {
    let response = await axios.post('http://localhost:5000/signup', form, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};


export const handleLoginSubmit= async (loginForm)=>{

  
  try {
    let response = await axios.post('http://localhost:5000/user', loginForm, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}
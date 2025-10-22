import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { toggleSwitchState, setToggleSwitchState } = useContext(GlobalContext);

  const handleFormInteraction = () => {
    setToggleSwitchState(false);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    data.subject = `New Booking request from ${data.fullName}`
    formData.append('subject', data.subject);
    formData.append('full-name', data.fullName);
    formData.append('height', data.height);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('design-description', data.designDescription);
    if (data.designFile) formData.append('design-file', data.designFile[0]);
    if (data.designFile1) formData.append('design-file-1', data.designFile1[0]);
    if (data.designFile2) formData.append('design-file-2', data.designFile2[0]);
    if (data.designFile3) formData.append('design-file-3', data.designFile3[0]);
    try {
      const response = await axios.post(`https://formspree.io/f/xnngrbnj`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error.response);
      if (error.response){
        console.log(error.response.data)
      }
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="booking-form-container" onClick={handleFormInteraction}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="subject" value="New Booking Request from {{fullName}}" />
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          {...register('fullName', { required: true })}
          onFocus={handleFormInteraction}
        />
        {errors.fullName && <p>Full name is required</p>}
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          {...register('height', { required: true })}
        />
        {errors.height && <p>Height is required</p>}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
        />
        {errors.email && <p>Email is required</p>}
        <label htmlFor="phone">Contact Number:</label>
        <input
          type="tel"
          id="phone"
          {...register('phone', { required: true })}
        />
        {errors.phone && <p>Phone number is required</p>}
        <label htmlFor="designFile">Photo of the body part:</label>
        <input
          type="file"
          id="designFile"
          {...register('designFile')}
        />
        <label htmlFor="designFile1">Inspirational photo 1:</label>
        <input
          type="file"
          id="designFile1"
          {...register('designFile1')}
        />
        <label htmlFor="designFile2">Inspirational photo 2:</label>
        <input
          type="file"
          id="designFile2"
          {...register('designFile2')}
        />
        <label htmlFor="designFile3">Inspirational photo 3:</label>
        <input
          type="file"
          id="designFile3"
          {...register('designFile3')}
        />
        <label htmlFor="designDescription">Design Description:</label>
        <textarea
          id="designDescription"
          {...register('designDescription')}
        />
        <button type="submit" className="book-btn">Submit a Booking Request</button>
      </form>
    </div>
  );
}

export default Booking;
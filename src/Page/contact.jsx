import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import '../css/contact.css';
import Navbar from "./navbar";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { user_name, user_email, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        user_name,
        user_email,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        "service_eum6e4n",
        "template_5vqb2o8",
        templateParams,
        "W2JhZMcClaq4km2Nu"
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    <Navbar />
        <div className='ContactForm' style={{height:'37rem', backgroundColor:'#82C3EC', padding:'3rem'}}>
            <div className='contact-me'>
                <h1>Contact Me</h1>
            </div>
            <div className='container' >
                <div className='col-12 text-center d-flex justify-content-center'>
                    <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className='pb-3' style={{width:'50rem'}}>
                            <label>Name</label>
                            <input
                            type='text'
                            name='user_name'
                            {...register('user_name', {
                                required: {
                                value: true,
                                message: 'Please enter your name'
                                },
                                maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                                }
                            })}
                            className='form-control formInput'
                            placeholder='Name'
                            ></input>
                            {errors.user_name && <span className='errorMessage'>{errors.user_name.message}</span>}
                        </div>
                        <div className='pb-3' style={{width:'50rem'}}>
                            <label>Email</label>
                            <input
                            type='email'
                            name='user_email'
                            {...register('user_email', {
                                required: true,
                                pattern:
                                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            className='form-control formInput'
                            placeholder='Email address'
                            ></input>
                            {errors.user_email && (
                            <span className='errorMessage'>Please enter a valid email address</span>
                            )}
                        </div>
                        <div className='pb-3' style={{width:'50rem'}}>
                            <label>Message</label>
                            <textarea
                            rows={2}
                            name='message'
                            {...register('message', {
                                required: true
                            })}
                            className='form-control formInput'
                            placeholder='Message'
                            ></textarea>
                            {errors.message && <span className='errorMessage'>Please enter a message</span>}
                        </div>

                        <Button variant="outlined" style={{color:'#472183', borderColor:'#472183'}}
                        disabled={disabled} type='submit'>
                        Submit
                        </Button>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    </>
  );
};

export default ContactForm;
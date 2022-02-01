import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import BaseUrl from './BaseUrl'

const SignUp = (props) => {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: '',
            mobileNumber: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                        .max(15, 'Must be less than 15 characters'),
            email: Yup.string()
                        .email('Please enter a valid email address'),
            lastName: Yup.string()
                        .max(15, 'Must be less than 15 characters'),
            mobileNumber: Yup.string()
                        .max(10, 'Please write a valid mobile number of 10 digits')
                        .min(10, 'Please write a valid mobile number of 10 digits'),
            password: Yup.string()
                        .max(15, 'Password should not exceed 15 characters')
                        .min(8, 'Password should have altleast 8 characters'),
            username: Yup.string()
                        .max(15, 'Must be less than 15 characters')
        }),
        onSubmit: (values) => {
            console.log(values);
            insertCustomerDetails(values);
            navigate('/customerhome')
        }
    });

    const insertCustomerDetails  = (data) => {
        axios.post(`${BaseUrl}/addCustomer`, data).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    return (
        <>
            <div className="container mt-5 rounded shadow-lg bg-light">
                <div className="row">
                        <div className="rounded col col-lg-5 col-md-4 col-sm-12 p-3 bg-info text-center align-middle" style={{height: '22rem'}} >
                            <h1 className='display-5 fst-italic fw-bold text-center text-light' >Welcome Back!</h1>
                            <p className='text-center text-light my-5' >
                                To keep connected with us please login with your personal info.
                            </p>
                            <button className='btn btn-outline-light rounded-pill px-5' onClick={() => props.onClick(()=> true)} >SIGN IN</button>
                        </div>
                        <div className="col col-lg-7 col-md-8 col-sm-12 p-3 bg-light">
                            <h1 className='display-5 fst-italic fw-bold text-center text-info' >Create Account</h1>
                            <div className='text-center' >
                                <form onSubmit={formik.handleSubmit} >
                                    <TextField
                                        variant='outlined'
                                        label='Firstname'
                                        id='firstName'
                                        type='text'
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <AccountCircleIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={formik.handleChange}
                                        className='my-2 me-2'
                                    />
                                    {
                                        formik.errors.firstName ? <p style={{color: 'red'}} >{ formik.errors.firstName }</p> : null
                                    }
                                    <TextField
                                        variant='outlined'
                                        label='Lastname'
                                        type='text'
                                        id='lastName'
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <AccountCircleIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={formik.handleChange}
                                        className='my-2'
                                    />
                                    {
                                        formik.errors.lastName ? <p style={{color: 'red'}} >{ formik.errors.lastName }</p> : null
                                    }
                                    <TextField
                                        variant='outlined'
                                        label='Username'
                                        id='username'
                                        type='text'
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <AccountCircleIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={formik.handleChange}
                                        className='my-2 me-2'
                                    />
                                    {
                                        formik.errors.username ? <p style={{color: 'red'}} >{ formik.errors.username }</p> : null
                                    }
                                    <TextField
                                        variant='outlined'
                                        label='Email'
                                        id='email'
                                        type='email'
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <EmailIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={formik.handleChange}
                                        className='my-2'
                                    />
                                    {
                                        formik.errors.email ? <p style={{color: 'red'}} >{ formik.errors.email }</p> : null
                                    }
                                    <TextField
                                        variant='outlined'
                                        label='Mobile Number'
                                        id='mobileNumber'
                                        type='text'
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <PhoneIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={formik.handleChange}
                                        className='my-2 me-2'
                                    />
                                    {
                                        formik.errors.mobileNumber ? <p style={{color: 'red'}} >{ formik.errors.mobileNumber }</p> : null
                                    }
                                    <TextField
                                        variant='outlined'
                                        label='Password'
                                        id='password'
                                        type='password'
                                        required
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <LockIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        onChange={formik.handleChange}
                                        className='my-2'
                                    />
                                    {
                                        formik.errors.password ? <p style={{color: 'red'}} >{ formik.errors.password }</p> : null
                                    }
                                    <br/>
                                    <button type='submit' className='btn btn-info rounded-pill px-5' >SIGN UP</button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

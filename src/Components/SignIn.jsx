import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

const SignIn = (props) => {

    return (
        <>
            <div className="container my-5 rounded shadow-lg bg-light">
                <div className="row">
                    <div className="col col-lg-7 col-md-8 col-sm-12 bg-light rounded">
                        <h1 className='display-5 mt-5 fst-italic fw-bold text-center text-info' >Sign In to you account</h1>
                        <div className="text-center my-5">
                            <form>
                                <TextField
                                    variant='outlined'
                                    label='Email'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                <EmailIcon/>
                                            </InputAdornment>
                                        ),
                                    }}
                                    className='my-2 w-75 me-2'
                                />
                                <TextField
                                    variant='outlined'
                                    label='Password'
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start' >
                                                <LockIcon/>
                                            </InputAdornment>
                                        ),
                                    }}
                                    className='my-2 w-75 me-2'
                                />
                                <div className='my-3'>
                                    <button className='btn btn-info rounded-pill px-5' >SIGN IN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-4 col-sm-12 bg-info rounded">
                        <h1 className='display-5 mt-5 fst-italic fw-bold text-center text-light' >New Here!</h1>
                        <p className='text-center text-light my-5 mx-1' >
                                Enter the details and start your journey with us
                        </p>
                        <div className='my-5 text-center' >
                                <button className='btn btn-outline-light rounded-pill px-5' onClick={() => props.onClick(()=> false)} >SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;

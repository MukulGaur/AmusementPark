import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';

const SignUp = (props) => {
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
                                <form>
                                    <TextField
                                        variant='outlined'
                                        label='Firstname'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <AccountCircleIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        className='my-2 me-2'
                                    />
                                    <TextField
                                        variant='outlined'
                                        label='Lastname'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <AccountCircleIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        className='my-2'
                                    />
                                    <TextField
                                        variant='outlined'
                                        label='Username'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <AccountCircleIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        className='my-2 me-2'
                                    />
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
                                        className='my-2'
                                    />
                                    <TextField
                                        variant='outlined'
                                        label='Mobile Number'
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position='start' >
                                                    <PhoneIcon/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        className='my-2 me-2'
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
                                        className='my-2'
                                    /> <br/>
                                    <button className='btn btn-info rounded-pill px-5' >SIGN UP</button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

// @ts-nocheck
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { login, resetState } from '../actions/auth';
import toast, { useToasterStore } from 'react-hot-toast';

const LoginComponent = (props) => {
    const { authState, login, resetState } = props;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { email: emailTar, password: pTar } = e.target?.elements;
        if(!emailTar.value || !pTar.value) {
            toast.error('Please fill all the required fields');
            return;
        }
        login({
            email: emailTar.value,
            password: pTar.value
        })
    }   

    useEffect(() => {
        resetState();
    }, [])

    useEffect(() => {
        if(authState.isError) {
            toast.error(authState?.message)
        }
    }, [authState])


    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-blue mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6 flex-col gap-3'>
                        <button
                            className={`bg-blue-600 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                        <a className='blue' onClick={() => props.history.push('/signup')}>Create a new account</a>
                    </div>
                </form>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        authState: state.userState.authState
    }
}

export default connect(mapStateToProps, {
    login,
    resetState,
})(LoginComponent);
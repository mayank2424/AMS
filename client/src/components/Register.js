// @ts-nocheck
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { register, resetState } from '../actions/auth';
import toast, { useToasterStore } from 'react-hot-toast';


const LoginComponent = (props) => {
    const { authState, register, resetState } = props;
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const { name: nameTar, email: emailTar, password: pTar, username:uNameTar } = e.target?.elements;
        const payload = {
            name: nameTar.value,
            email: emailTar.value,
            password: pTar.value,
            user_name: uNameTar.value,
        };
        if(!payload.name || !payload.email || !payload.password || !payload.user_name) {
            toast.error('Please fill all the required fields');
            return;
        }
        register(payload);
    }

    useEffect(() => {
        resetState()
    }, [])
    useEffect(() => {
        if(authState.isError) {
            toast.error(authState?.message)
        }
    }, [authState])


    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h3 className='text-md font-bold text-blue mt-4 text-center'> Publish Articles with ease<br/></h3> 
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Create a new account
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='name'
                            placeholder='Your Name'
                        />
                    </div>
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
                        <label htmlFor='email'>User Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='username'
                            placeholder='Choose username'
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
                            Register
                        </button>
                        <a className='text-blue' onClick={() => props.history.push('/login')}>Login ?</a>
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
    register,
    resetState
})(LoginComponent);
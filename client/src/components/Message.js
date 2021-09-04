// @ts-nocheck
import React from 'react';

const Message = (props) => {
    return ( <div className='w-4/5 flex flex-wrap flex-col gap-4 m-auto p-20 font-mono'>
            <h1 className='text-black-500 font-bold text-3xl mb-4'>
                { props.message}
            </h1>
        </div>
    )
};

export default Message;
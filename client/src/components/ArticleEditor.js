// @ts-nocheck
/** Single Article Component  */
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { connect } from 'react-redux'

import { addNewArticle } from '../actions/article'

const ArticleEditor = (props) => {
    const { addNewArticle, addArticle } = props;
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [is_private, setPrivate] = useState(false);

    const imageUpload = (e) => {
        const [file] = e.target.files;
        setFile(file);
    };

    const handleTextAreaChange = (e) => {
       const { name, value } = e.target;
       console.log({name, value})
       if(name === 'title') {
            if(value.length > 100) return;
            setTitle(value);
       };
       if(name === 'description') {
            if(value.length > 2000) return;
            setDescription(value);
       };
       
    }

    const handleSubmit = () => {
        if(!title || !description || !file) {
            toast.error('Please provide all the fields');
            return;
        }
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('thumbnail', file);
        formData.append('is_private', is_private);
        addNewArticle(formData);
    }

    useEffect(() => {
        if(addArticle && addArticle.status === -1) {
            toast.error(addArticle?.data || 'Oops something bad happened')
        }
    }, [addArticle])
    return (
        <div className='w-1/2 m-auto p-20 font-mono'>

            <div className="flex flex-col mb-20">
                <label className='text-gray-700 text-3xl font-bold mb-5'>Thumbnail:</label>
                <input type="file" accept="image/png, image/gif, image/jpeg" onChange={imageUpload}/>

                {
                    file && <ImageComp file={file} removeAction={() => setFile('')}/>
                }
            </div>
            <div className="flex flex-col mb-20">
                <label className='text-gray-700 text-3xl font-bold mb-5'>Title(Max 100):</label>
                <textarea 
                    className='h-20 py-4 px-2 border-solid border-1 border-grey rounded' 
                    style={{resize: 'none', border: '1px solid #dadada'}} 
                    placeholder='Enter title'
                    onChange={handleTextAreaChange}
                    name='title'
                    value={title}
                />
            </div>

            <div className="flex flex-col">
                <label  className='text-gray-700 text-3xl font-bold mb-5'>Description:</label>
                <textarea 
                    className='h-60 py-4 px-2 rounded'  
                    style={{resize: 'none', border: '1px solid #dadada'}}  
                    placeholder='Enter description'
                    onChange={handleTextAreaChange}
                    name='description'
                    value={description}

                />
            </div>

            <div className='flex flex-row gap-2 items-baseline mt-2'>
                <input type="checkbox" checked={is_private} onChange={(e) => setPrivate(e.target.checked)}/>
                <label  className='text-gray-700 text-small font-bold mb-5'>Do you want to make this private:</label>
            </div>
            <div className="flex flex-col">
                <button
                    className={`w-1/2 m-auto bg-blue-500 py-2 px-4 text-sm text-white rounded border border-blue mt-10 focus:outline-none focus:border-green-dark`}
                    onClick={handleSubmit}
                    disabled={addArticle?.status === 0}
                >
                    { addArticle?.status === 0 ? 'Saving Article' : 'Save Article' }
                </button>
            </div>
        </div>
    )
};

const ImageComp = ({file, removeAction}) => {
    return <div className='relative'>
        <img className='relative mt-3' src={URL.createObjectURL(file)} alt={file.name} />
        <span onClick={removeAction} className='absolute top-6 right-4 bg-blue text-white px-2 rounded-xl'> X </span>
    </div>
}

const mapStateToProps = (state) => {
    return {
        addArticle: state.articlesState.addArticle
    }
}

export default connect(mapStateToProps, {
    addNewArticle
})(ArticleEditor);
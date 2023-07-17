import { useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast, ToastContainer } from 'react-toastify'
import * as yup from 'yup'
import axios from 'axios'
import { useContext, useState } from 'react'
import { AuthContext } from '../../helpers/AuthContext'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import { useState } from "react";
import TextEditor from "./TextEditor"
import axios from "axios";


const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required.'),
    description: yup.string().required('Description is required.')
})


const CreatePost = () => {
    const [showimage, setShowImage] = useState("");
    const [newImage, setImage] = useState([]);

    const { authState } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleImageUpload = (event) => {
        setShowImage(event.target.files[0]);
        setImage([...newImage, event.target.files[0]]);
    };

    const postFormData = async (value) => {
        const formData = new FormData();
        formData.append("title", value.title);
        formData.append("description", value.description);
        formData.append("username", `${authState.username}`);
        for (let i = 0; i < newImage.length; i++) {
            formData.append("image", newImage[i]);
        }
        console.log(newImage);
        try {
            await axios.post("http://localhost:3001/posts", formData).then(res => {
                if (res.status == 200) {
                    toast.success("The post Added");
                }
            });
            navigate('/')
            await axios.post("http://localhost:3001/posts/posts", formData);
            console.trace("who called upon me?")
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (data) => {
        console.log('Create Post line:42', data);
        console.log('Create Post line:50', data);
        postFormData(data);
    }

    const initialValues = {
        title: '',
        description: '',
        image: '',
        username: `${authState.username}`
        image: ''
    }

    return (
        <div className="grid grid-cols-12 gap-4">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                {({ handleSubmit }) => {
                    return (
                        <Form onSubmit={handleSubmit} encType="multipart/form-data"
                            className="col-start-2 col-span-7">
                            <div className=' h-[600px] bg-white px-16 py-8 rounded-md shadow-md'>
                                <div className='mb-5 flex h-[100px]'>
                                    <Field                       //Input field
                                        type='file'
                                        name='image'
                                        accept=".png,.jpg,.jpeg,.gif"
                                        multiple
                                        onChange={(e) => handleImageUpload(e)}
                                    />
                            className="col-start-2 col-span-7 h-[500px] bg-white px-16 py-8 rounded-md shadow-md">
                            <div>
                                <div className='mb-5'>
                                    <img
                                        src={
                                            showimage
                                                ? URL.createObjectURL(showimage)
                                                : ""
                                        }
                                        width={200}
                                        alt=""
                                        className=""
                                    />
                                </div>
                                <div className='p-1'>
                                    <ErrorMessage
                                        name='image'
                                        className='text-red-600 col-span-4'
                                        component='p' />
                                </div>
                                <div >
                                    <Field name="title"
                                        placeholder="New post title here..."
                                        autoComplete="off"
                                        className="text-6xl w-[620px] font-extrabold overflow-hidden focus:outline-none"
                                    />
                                    <ErrorMessage
                                        name='title'
                                        className='text-red-600 col-span-4'
                                        component='p' />
                                </div>
                                <div className="w-[650px] mt-4 bg-white">
                                    <Field as="textarea" name="description"
                                        className="w-[620px] h-[200px] focus:outline-none font-mono text-xl"
                                        placeholder="Write your content here..." />
                                </div>
                                <ErrorMessage
                                    name='description'
                                    className='text-red-600 col-span-4'
                                    component='p' />
                            </div>
                            <ToastContainer />
                            <div className='mt-4'>
                                <button type='submit' className='bg-blue-500 text-white shadow-md hover:shadow-slate-400 text-xl font-bold py-2 px-4 rounded-md'>Publish</button>
                                        width={300}
                                        alt=""
                                        className="mt-8"
                                    />
                                    <Field                       //Input field
                                        type='file'
                                        name='image'
                                        accept=".png,.jpg,.jpeg,.gif"
                                        multiple
                                        onChange={(e) => handleImageUpload(e)}
                                        className=""
                                    />
                                </div>
                                <ErrorMessage
                                    name='image'
                                    className='text-red-600 col-span-4'
                                    component='p' />
                                <div>
                                    <textarea name="title" id="" cols="17" rows="1"
                                        placeholder="New post title here..."
                                        autoComplete="off"
                                        className="text-6xl font-extrabold overflow-hidden focus:outline-none"></textarea>
                                </div>
                                <div>
                                    <input className="focus:outline-none" placeholder="Add upto 4 tags"></input>
                                </div>
                            </div>
                            <div className="w-[650px] bg-white">
                                <TextEditor name='description' />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            <div className='col-start-9 col-span-4 px-16 py-8 '>
                <div>
                    <h3 className='font-bold text-lg'>Writing a Great Post Title</h3>
                    <p>Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
                        Use keywords where appropriate to help ensure people can find your post by search.</p>
                </div>
            </div>
            {/* <div className="flex col-start-10 col-span-2">
                <ul>
                    <h4 className="text-2xl font-bold">How to write a great post title?</h4>
                    <li>Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                    <li>Use keywords where appropriate to help ensure people can find your post by search.</li>
                </ul>
            </div> */}
        </div>

    )
}

export default CreatePost

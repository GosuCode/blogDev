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

    const handleImageUpload = (event) => {
        setShowImage(event.target.files[0]);
        setImage([...newImage, event.target.files[0]]);
    };

    const postFormData = async (value) => {
        const formData = new FormData();
        formData.append("title", value.title);
        formData.append("description", value.description);
        for (let i = 0; i < newImage.length; i++) {
            formData.append("image", newImage[i]);
        }
        console.log(newImage);
        try {
            await axios.post("http://localhost:3001/posts/posts", formData);
            console.trace("who called upon me?")
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (data) => {
        console.log('Create Post line:50', data);
        postFormData(data);
    }

    const initialValues = {
        title: '',
        description: '',
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
                            className="col-start-2 col-span-7 h-[500px] bg-white px-16 py-8 rounded-md shadow-md">
                            <div>
                                <div className='mb-5'>
                                    <img
                                        src={
                                            showimage
                                                ? URL.createObjectURL(showimage)
                                                : ""
                                        }
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

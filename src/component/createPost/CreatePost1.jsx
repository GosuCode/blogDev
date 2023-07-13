import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required.'),
    description: yup.string().required('Description is required.')
})


const FormField = [
    {
        name: 'title',
    },
    {
        name: 'description',
    },
]


const CreatePost1 = () => {
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
        <div className="grid justify-center mt-24">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit }) => {
                    return (
                        <Form
                            onSubmit={handleSubmit} encType="multipart/form-data"
                            className='rounded-lg bg-[#303338] text-white h-[400px] w-[500px] grid items-center px-6'
                        >
                            <div className='grid grid-cols-3 border-b border-b-[#606770]'>
                                <div className='col-start-2 grid justify-center text-2xl pb-4'>Create post</div>
                                <div className='col-start-3 grid justify-end text-4xl'>
                                    <RxCross2 />
                                </div>
                            </div>
                            <div>
                                {
                                    FormField.map((val, i) => {
                                        return (
                                            <div key={i} className='grid grid-cols-6'>
                                                <label htmlFor={val.name} className='capitalize'>{val.name}</label>
                                                <Field name={val.name}
                                                    autoComplete='off'
                                                    placeholder='enter your name'
                                                    className='col-start-3 col-span-4 focus:outline-none rounded-md text-black px-2 py-1' />
                                                <ErrorMessage
                                                    name={val.name}
                                                    className='text-red-600 col-span-4'
                                                    component='p' />
                                            </div>
                                        )
                                    })
                                }
                                <div>
                                    <label htmlFor="image">Image</label>
                                    <img
                                        src={
                                            showimage
                                                ? URL.createObjectURL(showimage)
                                                : ""
                                        }
                                        width={100}
                                        alt=""
                                        className="mt-8"
                                    />
                                    <input                       //Input field
                                        type='file'
                                        name='image'
                                        accept=".png,.jpg,.jpeg,.gif"
                                        multiple
                                        onChange={(e) => handleImageUpload(e)}
                                        className=""
                                    />
                                </div>
                            </div>
                            <button type='submit' className='bg-[#606770] rounded-md py-2'>Post</button>

                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default CreatePost1

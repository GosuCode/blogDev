import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { RxCross2 } from 'react-icons/rx'
import { toast, ToastContainer } from 'react-toastify'

const validationSchema = yup.object().shape({
    title: yup.string().required('Title is required.'),
    postText: yup.string().required('postText is required.'),
    username: yup.string().required('username is required.')
})

const CreatePost2 = () => {

    const FormField = [
        {
            name: 'title',
        },
        {
            name: 'postText',
        },
        {
            name: 'username',
        },
    ]

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/posts", data).then((res) => {
            console.log("IT WORKED", res);
            if (res.status == 200) {
                toast.success("Data posted successfully!")
            }
        });
    };

    const initialValues = {
        title: '',
        postText: '',
        username: '',
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
                            onSubmit={handleSubmit}
                            className='rounded-lg bg-white h-[400px] w-[500px] grid items-center px-6'
                        >
                            <div className='grid grid-cols-3 border-b border-b-[#606770]'>
                                <div className='col-start-2 grid justify-center text-2xl pb-4'>Create post</div>
                                <div className='col-start-3 grid justify-end text-4xl'>
                                    <RxCross2 />
                                </div>
                            </div>
                            <div>
                                {FormField.map((val, i) => {
                                    return (
                                        <div key={i} className='grid grid-cols-6'>
                                            <div className='col-start-1 col-span-2 p-4'>
                                                <label htmlFor={val.name} className='capitalize'>{val.name}</label>
                                            </div>
                                            <div className='col-start-3 col-span-4 p-4'>
                                                <Field
                                                    name={val.name}
                                                    autoComplete='off'
                                                    placeholder='enter your sth'
                                                    className='focus:outline-none border border-blue-400 rounded-md text-black px-2 py-1' />
                                                <div className='h-1'>
                                                    <ErrorMessage
                                                        name={val.name}
                                                        className='text-red-600 col-span-4'
                                                        component='p' />
                                                </div>
                                            </div>
                                            <ToastContainer />
                                        </div>
                                    )
                                })
                                }
                            </div>
                            <button type='submit' className='bg-blue-500 text-white rounded-md py-2'>Post</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default CreatePost2

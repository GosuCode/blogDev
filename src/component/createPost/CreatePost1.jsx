import { Formik, Form } from "formik";
import { toast } from 'react-toastify'
import * as yup from "yup";
import axios from "axios";
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineBold } from 'react-icons/ai'
import { BsTypeItalic } from 'react-icons/bs'

const schema = yup.object().shape({
    title: yup.string().required("The title is required"),
    date: yup.string().required("The date is required"),
    description: yup.string().required("The description is required"),
    categories: yup.string().required("The categories is required"),
    subtitle: yup.string().required("The subtitle is required"),
});

const CreatePost1 = () => {

    const handleSubmit = async (values) => {
        console.trace("who called upon me?")
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("subtitle", values.subtitle);
        formData.append("date", values.date);
        formData.append("description", values.description);
        formData.append("categories", values.categories);
        try {
            await axios.post("http://localhost:3001/posts", formData).then(res => {
                if (res.status == 200) {
                    toast.success("The post Added");
                }
            });
            console.log("Data inserted into the database!");
            setTimeout(() => {
                window.location.reload();
            }, 5000);
        } catch (error) {
            console.error("Error inserting data into the database:", error);
        }
    };

    return (
        <div className="grid grid-cols-10">
            <Formik
                initialValues={{
                    title: "",
                    subtitle: "",
                    date: "",
                    description: "",
                    categories: "",
                    image: [],
                }}

                validationSchema={schema}          //passing schema
                onSubmit={handleSubmit}
            >

                {({ handleSubmit }) => {
                    return (
                        <Form onSubmit={handleSubmit} encType="multipart/form-data"
                            className="col-start-2 col-span-5 bg-white px-16 py-8 rounded-md shadow-md">
                            <div className="mb-5">

                                <label htmlFor="image" className="border border-slate-500 rounded-sm " >Add a cover image</label>

                            </div>
                            <div>
                                <textarea name="description" id="" cols="17" rows="1"
                                    placeholder="New post title here..."
                                    autoComplete="off"
                                    className="text-6xl font-extrabold overflow-hidden focus:outline-none"></textarea>
                            </div>
                            <div>
                                <input className="focus:outline-none" placeholder="Add upto 4 tags"></input>
                            </div>

                            <div className="px-16 py-8">
                                <div className="mb-6">
                                    <ul>
                                        <li><AiOutlineBold /></li>
                                        <li><BsTypeItalic /></li>
                                        <li><AiOutlineBold /></li>
                                        <li><AiOutlineBold /></li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <FiMoreHorizontal />
                                        </li>
                                    </ul>
                                </div>
                                <textarea name="" id="" cols="60" rows="10" className="font-mono focus:outline-none"
                                    placeholder="Write your post content here..."></textarea>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
            <div className="flex col-start-8 col-span-2">
                <h4>Writing a Great Post Title</h4>
                <ul>
                    <li>Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                    <li>Use keywords where appropriate to help ensure people can find your post by search.</li>
                </ul>
            </div>
        </div>
    );
};

export default CreatePost1;

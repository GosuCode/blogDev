import user from '../../assets/user.jpg'
import { GoComment } from 'react-icons/go'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../helpers/AuthContext"
import { MdDeleteForever } from 'react-icons/md'
import { TbHeartPlus } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { RiDeleteBin5Fill } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
import axios from "axios"

const SingleMain = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { authState } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/posts/postById/${id}`).then((response) => {
            setBlog(response.data);
        });

        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data);
        });
    }, [id]);

    const addComment = () => {
        axios.post("http://localhost:3001/comments", { commentBody: newComment, PostId: id, },
            {
                headers: { accessToken: localStorage.getItem("accessToken"), },
            }
        )
            .then((response) => {
                if (response.data.error) {
                    toast.warn('User not logged In!')
                } else {
                    const commentToAdd = { commentBody: newComment, username: response.data.username, };
                    setComments([...comments, commentToAdd]);
                    setNewComment("");
                }
            });
    };

    const deleteComment = (id) => {
        axios
            .delete(`http://localhost:3001/comments/${id}`, {
                headers: { accessToken: localStorage.getItem("accessToken") },
            })
            .then(() => {
                setComments(
                    comments.filter((val) => {
                        return val.id !== id;
                    })
                );
            });
    };

    const likeAPost = (postId) => {
        axios.post("http://localhost:3001/likes",
            { PostId: postId },
            { headers: { accessToken: localStorage.getItem("accessToken") } }
        )
            .then((res) => {
                if (res.data.error) toast.warning("User not logged In!")
            });
    };

    const deletePost = (id) => {
        axios
            .delete(`http://localhost:3001/posts/${id}`, {
                headers: { accessToken: localStorage.getItem("accessToken") },
            })
            .then(() => {
                navigate("/");
            });
    };

    return (
        <>
            <div className="fixed ml-10">
                <button onClick={() => {
                    likeAPost(blog.id);
                }} className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                    <TbHeartPlus className="text-2xl hover:text-rose-500" />
                    {/* <span>{blog.Likes.length} </span> */}
                </button>
                <div className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                    <GoComment className="text-2xl hover:text-blue-500" />
                </div>
                <div className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                    <BsBookmark className="text-2xl hover:text-yellow-400" />
                </div>
                <div className="grid mt-8 justify-items-center w-12 h-12 items-center hover:bg-slate-200 rounded-full">
                    <FiMoreHorizontal className="text-2xl hover:text-slate-500" />
                </div>
            </div>
            <div className="col-start-3 col-span-7 bg-white shadow-sm shadow-slate-400">
                <div>
                    <img src={`http://localhost:3001/${blog.image}`} alt="" className='w-full h-[340px] rounded-t-md' />
                </div>
                <div className='flex mt-4'>
                    <div className='grid items-center'>
                        <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                    </div>
                    <div className='grid items-center py-3'>
                        <div className='text-sm font-semibold'>{blog.username}</div>
                        <span className='text-xs'>Jul 9 (13 mins ago)</span>
                    </div>
                </div>
                {authState.username === blog.username && (
                    <div className='flex justify-between px-20 items-center'>
                        <button className='text-red-500 text-2xl grid items-center'
                            onClick={() => {
                                deletePost(blog.id);
                            }}
                        >
                            <RiDeleteBin5Fill />
                            <span className='text-base text-black'>Delete</span>
                        </button>
                        <Link to={`/updatePost/${blog.id}`} state={blog}>
                            <AiFillEdit className='text-purple-600 text-2xl' />
                            <span className='text-base text-black'>Edit</span>
                        </Link>
                    </div>
                )}
                <div className='mt-8'>
                    <div className='pl-10'>
                        <h1 className='font-extrabold text-4xl font-sans'>
                            {blog.title}
                        </h1>
                    </div>
                </div>
                <div className="px-16 py-8 font-serif">
                    <p dangerouslySetInnerHTML={{ __html: blog.description }} />
                </div>
                <hr />

                {/* comment section */}

                <div className="px-16 py-8 mb-6">
                    <section className="mb-4 font-bold text-lg">
                        <h2>Top comments </h2>
                    </section>
                    <>
                        <div className="">
                            <div className='flex mb-4'>
                                <span>
                                    <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                                </span>
                                <div className="mb-3">
                                    <input name="" id="" cols="80" rows="2"
                                        className='focus:outline-none border-2 focus:border-blue-500 rounded-lg text-lg w-[400px] p-1'
                                        placeholder='Add a comment'
                                        autoComplete="off"
                                        value={newComment}
                                        onChange={(event) => {
                                            setNewComment(event.target.value);
                                        }} />
                                    <button onClick={addComment} className='shadow-sm hover:shadow-slate-400 border border-blue-500 font-bold py-1 ml-6 px-4 rounded-md'> Add Comment</button>
                                </div>
                            </div>
                            {comments.map((val, key) => {
                                return (
                                    <div className='grid grid-cols-12 items-center' key={key}>
                                        <span className='col-start-1 col-span-1'>
                                            <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                                        </span>
                                        <div className='col-start-2 col-span-10 p-4'>
                                            <div>
                                                <button className='text-sm font-semibold'>{val.username}</button>
                                            </div>
                                            <div className='px-3 mb-4 text-sm flex justify-between'>
                                                <p>
                                                    {val.commentBody}
                                                </p>
                                                {authState.username === val.username && (
                                                    <>
                                                        <button
                                                            onClick={() => {
                                                                deleteComment(val.id);
                                                            }}
                                                            className='text-xl'
                                                        >
                                                            <MdDeleteForever className="text-red-400" />
                                                        </button>
                                                    </>
                                                )}
                                            </div>
                                            <hr />
                                        </div>
                                        <ToastContainer />
                                    </div>
                                )
                            })}
                        </div>

                    </>
                </div>
            </div>
        </>
    )
}

login, register, singleMain UI updated
export default SingleMain

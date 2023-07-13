import user from '../../assets/user.jpg'
import { PiHeartStraightThin } from 'react-icons/pi'
import { GoComment } from 'react-icons/go'
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../helpers/AuthContext"
import { MdDeleteForever } from 'react-icons/md'
import { TbHeartPlus } from "react-icons/tb";
import { BsBookmark } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import axios from "axios"

const SingleMain = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const { authState } = useContext(AuthContext);

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
                    console.log(response.data.error);
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
            .then((response) => {
                setBlog(
                    blog.map((post) => {
                        if (post.id === postId) {
                            if (response.data.liked) {
                                return { ...post, Likes: [...post.Likes, 0] };
                            } else {
                                const likesArray = post.Likes;
                                likesArray.pop();
                                return { ...post, Likes: likesArray };
                            }
                        } else {
                            return post;
                        }
                    })
                );
            });
    };

    return (
        <>
            <div className="grid items-center">
                <button onClick={() => {
                    likeAPost(blog.id);
                }} className="p-10">
                    <TbHeartPlus className="text-2xl hover:text-rose-500" />
                    <span>{'1'} </span>
                </button>
                <div className="p-10">
                    <GoComment className="text-2xl hover:text-blue-500" />
                </div>
                <div className="p-10">
                    <BsBookmark className="text-2xl hover:text-yellow-400" />
                </div>
                <div className="p-10">
                    <FiMoreHorizontal className="text-2xl hover:text-slate-500" />
                </div>
            </div>
            <div className="col-start-3 col-span-7 bg-white shadow-sm shadow-slate-400">
                <div>
                    <img src={`http://localhost:3001/${blog.image}`} alt="" className='w-full h-[340px] rounded-t-md' />
                </div>
                <div className='flex'>
                    <div className='grid items-center'>
                        <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                    </div>
                    <div className='grid items-center py-3'>
                        <div className='text-sm font-semibold'>{blog.username}</div>
                        <span className='text-xs'>Jul 9 (13 mins ago)</span>
                    </div>
                </div>
                <div>
                    <div>
                        Reaction here
                    </div>
                    <div className='pl-10'>
                        <h1 className='font-extrabold text-4xl font-sans'>
                            {blog.title}
                        </h1>
                        <div className='text-sm mb-2 ml-[-4px]'>
                            #html #webdev #beginners #programming
                        </div>
                    </div>
                </div>
                <div className="px-16 py-8">
                    <p>
                        {blog.description}
                    </p>
                </div>
                <hr />

                {/* comment section */}

                <div className="px-16 py-8 mb-6">
                    <section className="mb-4 flex justify-between">
                        <h2>Top comments </h2>
                        <button className="border border-blue-500 rounded-md mr-2 py-1 grid items-center px-[15px] font-bold text-blue-600 hover:bg-blue-600 hover:text-white">Subscribe</button>
                    </section>
                    {/* Use formik */}
                    <>
                        <div className="">
                            <div className='flex mb-4'>
                                <span>
                                    <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                                </span>
                                <div className="mb-3">
                                    <input name="" id="" cols="80" rows="2"
                                        className='focus:outline-none border border-slate-400 p-1'
                                        placeholder='Add a comment'
                                        autoComplete="off"
                                        value={newComment}
                                        onChange={(event) => {
                                            setNewComment(event.target.value);
                                        }} />
                                    <button onClick={addComment}> Add Comment</button>
                                </div>
                            </div>
                            {comments.map((val, key) => {
                                return (
                                    <div className='flex' key={key}>
                                        <span>
                                            <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                                        </span>
                                        <div>
                                            <div>
                                                <button className='text-sm font-semibold'>{val.username}</button>
                                            </div>
                                            <div className='px-3 mb-4 text-sm'>
                                                <p>
                                                    {val.commentBody}
                                                </p>
                                            </div>
                                            <div className='flex gap-8'>
                                                <button className='flex items-center gap-2'>
                                                    <PiHeartStraightThin />
                                                    13 Likes
                                                </button>
                                                <button className='flex items-center gap-2'>
                                                    <GoComment />
                                                    Reply
                                                </button>
                                                {authState.username === val.username && (
                                                    <button
                                                        onClick={() => {
                                                            deleteComment(val.id);
                                                        }}
                                                    >
                                                        <MdDeleteForever className="text-red-400" />
                                                    </button>
                                                )}
                                            </div>
                                        </div>
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

export default SingleMain

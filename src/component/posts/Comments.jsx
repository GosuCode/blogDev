import user from '../../assets/user.jpg'
import { PiHeartStraightThin } from 'react-icons/pi'
import { GoComment } from 'react-icons/go'

const Comments = () => {
    return (
        <div className="px-16 py-8 mb-6">
            <section className="mb-4 flex justify-between">
                <h2>Top comments </h2>
                <button className="border border-blue-500 rounded-md mr-2 py-1 grid items-center px-[15px] font-bold text-blue-600 hover:bg-blue-600 hover:text-white">Subscribe</button>
            </section>
            {/* Use formik */}
            <formik action="">
                <div className="">
                    <div className='flex mb-4'>
                        <span>
                            <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                        </span>
                        <div className="mb-3">
                            <textarea name="" id="" cols="80" rows="2"
                                className='focus:outline-none border border-slate-400 p-1'
                                placeholder='Add a comment'></textarea>
                        </div>
                    </div>
                    <div className='flex'>
                        <span>
                            <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                        </span>
                        <div>
                            <div>
                                <button className='text-sm font-semibold'>Alember Shreesh</button>
                            </div>
                            <div className='px-3 mb-4 text-sm'>
                                <p>
                                    I learned a lot from your blog.
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
                            </div>
                        </div>
                    </div>
                </div>

            </formik>
        </div>
    )
}

export default Comments

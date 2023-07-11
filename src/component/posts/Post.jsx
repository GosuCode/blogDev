import cms from '../../assets/cms.png'
import { GoComment } from 'react-icons/go'
import { BsBookmark } from 'react-icons/bs'
import user from '../../assets/user.jpg'
import { Link } from 'react-router-dom'

const Post = () => {
    return (
        <Link to={'/postById'}>
            <div className='bg-white rounded-md shadow-md'>
                <div className='w-full'>
                    <img src={cms} alt="" className='w-full h-[300px] rounded-t-md' />
                </div>

                <div className='p-5 mb-2'>
                    <div className='flex'>
                        <div className='grid items-center'>
                            <img src={user} alt="" className='h-12 rounded-full m-1 p-1' />
                        </div>
                        <div className='grid items-center py-3'>
                            <div className='text-sm font-semibold'>Alember Shreesh</div>
                            <span className='text-xs'>Jul 9 (13 mins ago)</span>
                        </div>
                    </div>

                    <div className='pl-10'>
                        <h1 className='font-bold text-3xl'>
                            GETTING STARTED IN WEB DEVELOPMENT : HTML ROADMAP
                        </h1>
                        <div className='text-sm mb-2 ml-[-4px]'>
                            #html #webdev #beginners #programming
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center py-1'>
                                <div>
                                    <GoComment />
                                </div>
                                <div>
                                    Add comment
                                </div>
                            </div>
                            <div className='p-3'>
                                <BsBookmark />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Post

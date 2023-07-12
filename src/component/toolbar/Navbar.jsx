import user from '../../assets/user.jpg'
import logo from '../../assets/logo.png'
import { RiNotification3Line } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../helpers/AuthContext'
import { useContext, useState } from 'react'

const Navbar = () => {
    const { authState } = useContext(AuthContext)
    const [openSide, setOpenSide] = useState(false)

    const handlePopUp = () => {
        setOpenSide(!openSide)
    }
    return (
        <div className='flex justify-between px-1 border-b border-slate-400 bg-white'>
            <div className="flex gap-2">
                <Link to={'/'}>
                    <img src={logo} alt="" className='h-14 rounded-full m-1 p-1' />
                </Link>
                <div className='grid items-center'>
                    <div className='flex w-[420px] h-10 px-2 py-[6px] border border-slate-400 rounded-sm'>
                        <input type="search" name="" id="" placeholder="Search..."
                            className='w-full focus:outline-none' />
                        <FiSearch className='text-2xl' />
                    </div>
                </div>
            </div>
            {!authState ? (
                <>
                    <div className='flex items-center'>
                        <Link to={'/login'} className='border border-blue-500 rounded-md mr-2 grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white'>Login</Link>
                        <Link to={'/register'} className='border border-blue-500 rounded-md mr-2 grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white'>Register</Link>
                    </div>
                </>
            ) : (
                <div className="flex items-center">
                    <Link to={'/createPost2'} className='border border-blue-500 rounded-md mr-2 grid items-center px-[15px] h-10 font-bold text-blue-600 hover:bg-blue-600 hover:text-white'>
                        Create Post
                    </Link>
                    <div className='mx-1 p-2 text-xl grid items-center hover:text-yellow-500'><RiNotification3Line /></div>
                    <div className='h-14 grid items-center' onClick={handlePopUp}>
                        <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                    </div>
                </div>

            )}
        </div>
    )
}

export default Navbar

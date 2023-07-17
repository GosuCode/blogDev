import { FaLightbulb } from 'react-icons/fa';
import { FcAbout, FcContacts, FcHome, FcReading, FcList } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const sidebarData = [
        {
            name: 'Home',
            icon: <FcHome />,
            path: '/',
        },
        {
            name: 'Reading List',
            icon: <FcReading />,
            path: '/',
        },
        {
            name: 'Listings',
            icon: <FcList />,
            path: '/',
        },
        {
            name: 'FAQ',
            icon: <FaLightbulb className='text-yellow-200' />,
            path: '/',
        },
        {
            name: 'About',
            icon: <FcAbout />,
            path: '/about',
        },
        {
            name: 'Contact',
            icon: <FcContacts />,
            path: '/',
        },
    ]
    return (
        <div className='px-2'>
            {sidebarData.map((val, key) => {
                return (
                    <Link to={val.path} key={key} className='flex mt-5 w-60 h-10 hover:bg-indigo-100 rounded-md active:bg-white'>
                        <div className='grid items-center px-2 text-2xl bg-white rounded-md shadow-md shadow-cyan-200'>
                            {val.icon}
                        </div>
                        <div className='grid items-center ml-4 text-2xl'>
                            {val.name}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Sidebar

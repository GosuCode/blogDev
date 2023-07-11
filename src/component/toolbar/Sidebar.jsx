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
                    <Link to={val.path} key={key} className='flex w-60 h-10 hover:bg-slate-300 rounded-md'>
                        <div className='grid items-center px-2 text-2xl'>
                            {val.icon}
                        </div>
                        <div className='grid items-center text-xl'>
                            {val.name}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Sidebar

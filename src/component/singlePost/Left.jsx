import { TbHeartPlus } from "react-icons/tb";
import { GoComment } from "react-icons/go";
import { BsBookmark } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";

const Left = () => {

    return (
        <div className="grid items-center">
            <div className="p-10">
                <TbHeartPlus className="text-2xl hover:text-rose-500" />
                <span>4</span>
            </div>
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
    )
}

export default Left

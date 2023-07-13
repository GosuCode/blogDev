import Right from "./Right"
import SingleMain from "./SingleMain"

const SinglePost = () => {
    return (
        <div className="grid grid-cols-12 gap-4 p-4">
            {/* Post here */}
            <SingleMain />
            {/* Profile here */}
            <div className="col-start-10 col-span-3">
                <Right />
            </div>
        </div>
    )
}

export default SinglePost

import Listings from "./pages/Listings"
import Posts from "./posts/Posts"
import Sidebar from "./toolbar/Sidebar"

const Index = () => {
    return (
        <div className="grid grid-cols-12 gap-4 p-4">
            <div className="col-start-1 col-span-3">
                <Sidebar />
            </div>
            <div className="col-start-4 col-span-6">
                <Posts />
            </div>
            <div className="col-start-10 col-span-3">
                <Listings />
            </div>
        </div>
    )
}

export default Index

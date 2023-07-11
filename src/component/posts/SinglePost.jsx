import Left from "./Left"
import Right from "./Right"
import cms from "../../assets/cms.png"
import user from "../../assets/user.jpg"
import Comments from "./Comments"

const SinglePost = () => {
    return (
        <div className="grid grid-cols-12 gap-4 p-4">
            {/* Reaction here  */}
            <div className="col-start-1 col-span-2">
                <Left />
            </div>

            {/* Post here */}
            <div className="col-start-3 col-span-7 bg-white">
                <div>
                    <img src={cms} alt="" className='w-full h-[340px] rounded-t-md' />
                </div>
                <div className='flex'>
                    <div className='grid items-center'>
                        <img src={user} alt="" className='h-14 rounded-full m-1 p-1' />
                    </div>
                    <div className='grid items-center py-3'>
                        <div className='text-sm font-semibold'>Alember Shreesh</div>
                        <span className='text-xs'>Jul 9 (13 mins ago)</span>
                    </div>
                </div>
                <div>
                    <div>
                        Reaction here
                    </div>
                    <div className='pl-10'>
                        <h1 className='font-extrabold text-4xl font-sans'>
                            GETTING STARTED IN WEB DEVELOPMENT : HTML ROADMAP
                        </h1>
                        <div className='text-sm mb-2 ml-[-4px]'>
                            #html #webdev #beginners #programming
                        </div>
                    </div>
                </div>
                <div className="px-16 py-8">
                    <p>
                        <b> Introduction </b> <br />

                        Learning programming can be a challenging yet rewarding endeavor. Whether you aspire to become a professional developer or wish to utilize coding skills in other domains, it is essential to understand the importance of practice in building a strong coding skillset.

                        Mastery of programming languages and concepts requires consistent effort and hands-on experience. In this article, we will explore the significance of practice in programming and provide valuable tips to help you develop and strengthen your coding skills.</p>
                </div>
                <hr />
                <Comments />
            </div>
            {/* Profile here */}
            <div className="col-start-10 col-span-3">
                <Right />
            </div>
        </div>
    )
}

export default SinglePost

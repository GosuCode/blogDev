import TextEditor from "./TextEditor"

const CreatePost = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-start-2 col-span-7 h-[500px] bg-white px-16 py-8 rounded-md shadow-md">
                <div>
                    <div className="mb-5">

                        <label htmlFor="image" className="border border-slate-500 rounded-sm " >Add a cover image</label>

                    </div>
                    <div>
                        <textarea name="description" id="" cols="17" rows="1"
                            placeholder="New post title here..."
                            autoComplete="off"
                            className="text-6xl font-extrabold overflow-hidden focus:outline-none"></textarea>
                    </div>
                    <div>
                        <input className="focus:outline-none" placeholder="Add upto 4 tags"></input>
                    </div>
                </div>
                <div className="w-[650px] bg-white">
                    <TextEditor />
                </div>
            </div>
            <div className="flex col-start-10 col-span-2">
                <ul>
                    <h4 className="text-2xl font-bold">How to write a great post title?</h4>
                    <li>Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.</li>
                    <li>Use keywords where appropriate to help ensure people can find your post by search.</li>
                </ul>
            </div>
        </div>

    )
}

export default CreatePost

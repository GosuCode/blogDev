import TagsInput from "./TagsInput"
import TextEditor from "./TextEditor"

const CreatePost = () => {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-start-2 col-span-7 h-[600px] bg-white px-16 py-8 rounded-md shadow-md">
                <div>
                    <div className="mb-5">

                        <label htmlFor="image" className="border border-slate-500 rounded-sm " >Add a cover image</label>

                    </div>
                    <div>
                        <input name="description"
                            placeholder="New post title here..."
                            autoComplete="off"
                            className="text-6xl w-11/12 font-extrabold overflow-hidden focus:outline-none" />
                    </div>
                    <div>
                        <TagsInput />
                    </div>
                </div>
                <div className="w-[650px] bg-white">
                    <TextEditor />
                </div>
            </div>
        </div>

    )
}

export default CreatePost

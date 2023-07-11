import { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
    const [editor, setEditor] = useState("");

    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'list': 'ordered' }, { 'list': 'bullet' }],                     // text direction

        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        ['clean']
    ]

    const module = {
        toolbar: toolbarOptions,
    }
    return (
        <>
            <ReactQuill theme="snow" modules={module} value={editor} onChange={setEditor} />
        </>
    )
}

export default TextEditor

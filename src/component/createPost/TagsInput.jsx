import { useState } from 'react'
import './TagsInput.css'

function TagsInput() {
    const [tags, setTags] = useState([])

    function handleKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index) {
        if (index.key !== 'Backspace') return
        setTags(tags.filter((el, i) => i !== index))
    }

    const [inputValue, setInputValue] = useState('');

    // Sample options
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div className="tags-input-container">
                {tags.map((tag, index) => (
                    <div className="tag-item" key={index}>
                        <span className="text">{tag}</span>
                        <span className="close" onClick={() => removeTag(index)}>&times;</span>
                    </div>
                ))}
                <input onKeyDown={handleKeyDown} type="text" className="tags-input" placeholder="Add upto 4 tags..." />
            </div>

            <div className='border border-black tags-input-container'>
                <input
                    className='tags-input'
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    list="options"
                    placeholder='Add upto 4 tags...'
                />
                <datalist id="options">
                    {options.map((option, index) => (
                        <option key={index} value={option} />
                    ))}
                </datalist>
            </div>
        </>
    )
}

export default TagsInput

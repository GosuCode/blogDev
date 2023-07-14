import { useState } from 'react';

const TagsByGPT = () => {
    const [inputValue, setInputValue] = useState('');

    // Sample options
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                list="options"
            />
            <datalist id="options">
                {options.map((option, index) => (
                    <option key={index} value={option} />
                ))}
            </datalist>
        </div>
    );
};

export default TagsByGPT;

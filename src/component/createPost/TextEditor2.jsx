import { useState } from 'react';

const TextEditor2 = () => {
    const [isBold, setIsBold] = useState(false);

    const handleClick = () => {
        setIsBold(!isBold);
    };

    const textStyle = {
        fontWeight: isBold ? 'bold' : 'normal',
    };

    return (
        <div>
            <p style={textStyle}>Hello, World!</p>
            <button onClick={handleClick}>Toggle Bold</button>
        </div>
    );
};

export default TextEditor2;

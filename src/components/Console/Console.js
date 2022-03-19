import { useEffect, useRef } from 'react';
import './Console.css';

function Console(onSubmit) {

    const inputSign = '❯';

    const inputEl = useRef(null);

    // Handle when user press enter.
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const input = inputEl.current.value;
            inputEl.current.value = '';
            onSubmit(input);
        }
    }
    // Trigger handleKeyDown when user press enter.
    useEffect(() => {
        inputEl.current.addEventListener('keydown', handleKeyDown);
        return () => {
            inputEl.current.removeEventListener('keydown', handleKeyDown);
        }
    }, []);

    return (
        <div className="Console">
            <a>{inputSign}</a>
            <input ref={inputEl} type="text"  />
        </div>
    );
}

export default Console;
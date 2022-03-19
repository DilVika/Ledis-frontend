import { useCallback, useEffect, useRef } from 'react';
import './Console.css';
import * as constants from '../../utils/constants';

function Console({onSubmit}) {
    const inputEl = useRef(null);

    // Handle when user press enter, call onSubmit function.
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const input = inputEl.current.value;
            inputEl.current.value = '';
            onSubmit(input);
        }
    }

    // Trigger handleKeyDown when user press enter in the input
    // useEffect(() => {
    //     let current = inputEl.current;
    //     current.addEventListener('keydown', handleKeyDown);
    //     return () => {
    //         current.removeEventListener('keydown', handleKeyDown);
    //     }
    // }, []);


    return (
        <div className="Console">
            <a>{constants.inputSign}</a>
            <input ref={inputEl} type="text" onKeyDown={handleKeyDown} />
        </div>
    );
}

export default Console;
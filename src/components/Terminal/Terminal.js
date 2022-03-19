import { useState, useRef, useEffect } from 'react';

import './Terminal.css';

import Display from '../Display/Display';
import Console from '../Console/Console';

import commandHandler from '../../handlers/commandHandler';
import * as constants from '../../utils/constants';
import commandSplitter from '../../utils/commandSplitter';

function Terminal() {
    const [display, setDisplay] = useState([]);

    const handleSubmit = (input) => {
        // insert > to first of string
        const result = commandHandler(commandSplitter(input));

        const newDisplay = {
            input: input,
            output: result.data != null ? result.data.slice(0) : result.errorMessage,
            hasError: result.errorMessage !== null,
        }
        setDisplay((prevState) => [...prevState, newDisplay]);
    }

    const itemEndRef = useRef(null)

    const scrollToBottom = () => {
        itemEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [display]);


    return (
        <div className="Terminal">
            <Display>
                {display.map((item, index) => (
                    <div key={index}>
                        <p id='input'>{constants.inputSign} {item.input}</p>
                        <p id='output' className={item.hasError ? "error" : " "}>{item.output}</p>
                    </div>
                ))}
                <div ref={itemEndRef} />
            </Display>
            <Console onSubmit={handleSubmit} />
        </div>
    );
}

export default Terminal;
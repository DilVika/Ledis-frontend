import './Console.css';

function Console() {

    const inputSign = '❯';

    return (
        <div className="Console">
            <a>{inputSign}</a>
            <input />
        </div>
    );
}

export default Console;
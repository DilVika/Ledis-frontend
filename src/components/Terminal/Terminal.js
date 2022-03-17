import './Terminal.css';

import Display from '../Display/Display';
import Console from '../Console/Console';

function Terminal() {
    return (
        <div className="Terminal">
            <Display/>
            <Console/>
        </div>
    );
}

export default Terminal;
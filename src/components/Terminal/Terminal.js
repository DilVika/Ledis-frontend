import './Terminal.css';

import Display from '../Display/Display';
import Console from '../Console/Console';

function Terminal() {
    const [display, setDisplay] = useState('');
    
    return (
        <div className="Terminal">
            <Display/>
            <Console/>
        </div>
    );
}

export default Terminal;
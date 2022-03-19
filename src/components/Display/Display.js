import './Display.css'

function Display (props) {
    return (
        <div className="Display">
            {props.children}
        </div>
    );
}

export default Display
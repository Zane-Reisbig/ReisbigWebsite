import "./Note.css"

export default function Note(props){
    
    let noteName = props.noteName;
    let octave = Math.floor(Math.random() * 5) + 1;
    let renderNote = props.checked ? noteName + "-" + octave : noteName;

    return (
        <div className="note">
            <p>{renderNote}</p>
        </div>
    );
}
import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) =>{
    const s1 = {
        "name": "Harry",
        "class": "4A",
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Aman",
                "class": "10C",
            });
        }, 1000);
    };
    return(
        <noteContext.Provider value={{state, update}}>
            {props.children}
        </noteContext.Provider>
    )
}


export default NoteState;
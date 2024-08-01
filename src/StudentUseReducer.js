import { useReducer } from "react";

function StudentUseReducer() {

    const initialState = 0;
    const reducer = (state, action) => {
        // console.log(state); 
        // console.log(action);
        switch(action){
            case "add":
                return state+1
            case "subtract":
                return state-1;
            case "multiplication":
                return state*2;
            case "division":
                return state/2;
            default:
                throw new Error("unexpected action");
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
            <h2>Example of useReducer</h2>
            <p>State : {state}</p>
            <button onClick={()=>dispatch('add')}>Add</button><br />
            <button onClick={()=>dispatch('subtract')}>Subtract</button><br />
            <button onClick={()=>dispatch('multiplication')}>Multiplication</button><br />
            <button onClick={()=>dispatch('division')}>Division</button>
        </>
    )
}

export default StudentUseReducer;
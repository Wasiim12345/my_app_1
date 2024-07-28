import { useContext } from "react";
import { DataContext } from "./ComponentA";
function ComponentC() {
    const getContextData = useContext(DataContext)
    return(
        <>
            <h1>It's component C - {getContextData}</h1>
        </>
    )
}

export default ComponentC;
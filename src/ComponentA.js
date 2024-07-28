import { createContext } from "react";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const DataContext = createContext();

export default function ComponentA() {
    var course = "React JS"
    return(
        <>
            <h1>It's component A</h1>
            <ComponentB />
            <DataContext.Provider value={course}>
                <ComponentC />  
            </DataContext.Provider>
        </>
    )
}

export {DataContext}
// export default ComponentA;
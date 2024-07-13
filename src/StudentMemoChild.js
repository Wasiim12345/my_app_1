import { memo } from "react";

function StudentMemoChild(props) {
    console.log("props :", props);

    console.log("Memo child component working...");
    return(
        <>
            <h3>Memo child component</h3>
        </>
    )
}

export default memo(StudentMemoChild);
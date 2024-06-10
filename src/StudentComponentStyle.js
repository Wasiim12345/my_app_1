import "./StudentComponentStyle.css";
import style from "./custom.module.css";

function StudentComponentStyle () {
    const cssDesign = {
        background: "lightcyan",
        color: "lightgreen",
        border: "25px"
    }
    return(
        <>
            <h3>Example for StudentComponentStyle</h3>
            <p className="para1">This is paragraph 1</p>
            <p className={style.para1}>This is paragraph 2</p>
            <p style={{color: "red",background:'lightgreen'}}>This is paragraph 3</p>
            <p style={cssDesign}>This is paragraph 4</p>
        </>
    )
}

export default StudentComponentStyle;
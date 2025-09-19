import { useState } from "react";

const Button = (props) => {
    const [hover, setHover] = useState(false);
   
    return (
        <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => props.onClick && props.onClick()}
        style={{
            background: props.color ||  "blue",
            color: "black",
            padding: "10px 20px",
            marginBottom: "10px",
            cursor: "pointer",
            // hover : { background: "dark" + (props.color || "blue") }
            borderRadius: props.borderRadius || "30px",
            // textAlign: "center",
            // display: "inline-block",
            // width: hover ? "100%" : "fit-content",

            
        }}
>
{props.label || "Button"}
</div>
)}


export default Button;
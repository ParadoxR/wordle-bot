import React, {useState, useEffect} from "react";

export default function Letter({
    children,
    id,
    yellow,
    grey,
    green,
    greyBorder
}) {
    const [color, setColor] = useState();
    const [border, setBorder] = useState();
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(count === 0) {
            setColor(grey);
            setBorder(greyBorder);
        } else if (count === 1) {
            setColor(green);
            setBorder(green);
        } else if (count === 2) {
            setColor(yellow);
            setBorder(yellow);
        }
    }, [count])
    
    const handleCountChange = () => {
        if (count === 0) {
            setCount(count + 1);
        } else if (count === 1) {
            setCount(count + 1);
        } else if (count === 2) {
            setCount(0);
        }
    }

    return (
        <>
            <button
                id={id}
                onClick={handleCountChange}
                style={{backgroundColor: color,
                        borderColor: border}}
            >{children}</button>
        </>
    )
}
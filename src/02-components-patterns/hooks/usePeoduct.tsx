import { useState } from "react";


export const UseProduct =  () => {

    const [counter, setCounter] = useState(0);

    const onDecrement = (value: number) => {
        setCounter(valPreview => Math.max(valPreview + value, 0));
    }

    return {
        counter,
        setCounter,
        onDecrement,
    }

}

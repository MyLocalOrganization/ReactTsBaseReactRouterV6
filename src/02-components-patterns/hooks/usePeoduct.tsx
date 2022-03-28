import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues
}

export const UseProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    const isMounted = useRef(false)

    const onDecrement = (value: number) => {


        let NewValue = Math.max(counter + value, 0);

        if (initialValues?.maxCount)
            NewValue = Math.min(NewValue, initialValues.maxCount)

        setCounter(NewValue);

        onChange && onChange({ count: NewValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        setCounter,
        onDecrement,
        isMaxCountReaced: !!initialValues?.count && initialValues.maxCount === counter,//regresa un valor boolean que valida el maximo de articulos permitidos
        maxCount: initialValues?.maxCount,
        reset
    }

}

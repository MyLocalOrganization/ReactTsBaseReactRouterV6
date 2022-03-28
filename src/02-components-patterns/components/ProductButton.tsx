import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface IProps {
    className?: string
}

export const ProductButton = ({ className }: IProps) => {
    //acceso al contexto del padre ProductContext 
    const { onDecrement, counter, maxCount } = useContext(ProductContext);

    const isMax = useCallback(
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    )

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button
                className={styles.buttonMinus}
                onClick={() => onDecrement(-1)}
            >-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={`${styles.buttonAdd} ${isMax() && styles.disable}`}
                onClick={() => onDecrement(+1)}
            >+</button>
        </div>
    )
}
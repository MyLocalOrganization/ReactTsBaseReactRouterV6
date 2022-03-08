import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductButton = () => {
    //acceso al contexto del padre ProductContext 
    const { onDecrement, counter } = useContext(ProductContext);

    return (
        <div className={styles.buttonsContainer}>
            <button
                className={styles.buttonMinus}
                onClick={() => onDecrement(-1)}
            >-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={styles.buttonAdd}
                onClick={() => onDecrement(+1)}
            >+</button>
        </div>
    )
}
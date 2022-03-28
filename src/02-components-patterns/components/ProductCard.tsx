import { createContext, CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { UseProduct } from '../hooks/usePeoduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';



//contexto global de funciones generales
export const ProductContext = createContext({} as ProductContextProps);

//podria desestructurar el providers
//const { Provider } = ProductContext;

export interface IProps {
    product: Product;
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: IProps) => {
    //custom hook de funciones 
    const { onDecrement, counter, maxCount, isMaxCountReaced, reset } = UseProduct({ onChange, product, value, initialValues });

    return (
        <ProductContext.Provider value={{
            onDecrement,
            counter,
            product,
            maxCount
        }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}>
                {children({
                    count: counter,
                    isMaxCountReaced,
                    maxCount: initialValues?.maxCount,
                    product,
                    onDecrement,
                    reset
                })}
            </div>
        </ProductContext.Provider>
    )
}

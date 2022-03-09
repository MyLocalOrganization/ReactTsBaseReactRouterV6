import { createContext, CSSProperties, ReactElement } from 'react';
import styles from '../styles/styles.module.css';
import { UseProduct } from '../hooks/usePeoduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';



//contexto global de funciones generales
export const ProductContext = createContext({} as ProductContextProps);

//podria desestructurar el providers
//const { Provider } = ProductContext;

export interface IProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties
}

export const ProductCard = ({ children, product, className, style }: IProps) => {
    //custom hook de funciones 
    const { onDecrement, counter } = UseProduct();

    return (
        <ProductContext.Provider value={{
            onDecrement,
            counter,
            product
        }}>
            <div
                style={style}
                className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </ProductContext.Provider>
    )
}

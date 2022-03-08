import { createContext } from 'react';
import styles from '../styles/styles.module.css';
import { UseProduct } from '../hooks/usePeoduct';
import { ProductContextProps, ProductCarsProps } from '../interfaces/interfaces';



//contexto global de funciones generales
export const ProductContext = createContext({} as ProductContextProps);

//podria desestructurar el providers
//const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCarsProps) => {
    //custom hook de funciones 
    const { onDecrement, counter } = UseProduct();

    return (
        <ProductContext.Provider value={{
            onDecrement,
            counter,
            product
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </ProductContext.Provider>

    )
}

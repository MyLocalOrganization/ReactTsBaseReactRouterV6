import { useState } from "react";
import { onChangeArgs, ProductInCard } from "../interfaces/interfaces";

export const useShoppingCard = () => {

    /**
    * '1':{...product1,count:10},
    * '2':{...product2,count:5} ,
    * 
    *  @useState  <{ [key: string]: ProductInCard }>
    *              { [tendra un arreglo de keys]: y su contenido }
   */
    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCard }>({});

    const onProductCountChange = ({ count, product }: onChangeArgs) => {
        setShoppingCard(oldShoppingCart => {
            //si el count es 0 buscar el elemento por su id y eliminarlo
            if (count === 0) {
                //delete ({...oldShoppingCart}[product.id]) otra forma de eliminar
                //delete oldShoppingCart[product.id] otra forma de eliminar
                //obtengo el elemento a eliminar por medio de la desestructuracion, 
                //lo cual lo elimina desde el objeto desestructurado,...rest mantiene el resto de valores menos el desestructurado 
                const { [product.id]: toDelet, ...rest } = oldShoppingCart;

                return rest
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count }
            }
        });
    }


    return {
        shoppingCard,
        onProductCountChange
    }


}

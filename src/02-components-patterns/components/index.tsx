import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";

import { ProductButton } from "./ProductButton";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButton } from "./ProductButton";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";


/**
 * 
 * @ProductCard 
 *    => componente padre al cual extendere sus caracteristicas desde los hijos
 * 
 * @ProductCardHOC
 *    => es el componente card padre(componente de orden superior HOC)
 * 
 * @bject.assign(ProductCardHOC
 *    => le añado nuevas caracteristicas(añado hijos) a mi componente HOC principal
 * 
 */
export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    ProductButton: ProductButton
})

export default ProductCard;
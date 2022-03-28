import { IProps as ProductButtonProps } from "../components/ProductButton";
import { IProps as ProductCarsProps } from "../components/ProductCard";
import { IProps as ProductImageProps } from "../components/ProductImage";
import { IProps as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    onDecrement: (value: number) => void;
    counter: number;
    product: Product;
    maxCount?: number
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCarsProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    ProductButton: (Props: ProductButtonProps) => JSX.Element
}

//argumentos que el onChange de ProductCard recinira y emitira al resto de componentes externos
export interface onChangeArgs {
    product: Product;
    count: number;
}


export interface ProductInCard extends Product {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReaced: boolean;
    maxCount?: number;
    product: Product;
    onDecrement: (value: number) => void;
    reset: () => void;
}
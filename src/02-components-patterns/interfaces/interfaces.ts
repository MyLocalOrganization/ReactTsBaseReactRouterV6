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
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCarsProps): JSX.Element;
    Title:          (Props: ProductTitleProps)  => JSX.Element;
    Image:          (Props: ProductImageProps)  => JSX.Element;
    ProductButton:  (Props: ProductButtonProps) => JSX.Element
}
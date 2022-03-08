import { ReactElement } from "react";

export interface ProductCarsProps {
    product: Product;
    children?: ReactElement | ReactElement[]
}

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
    Title: ({ title }: { title?: string }) => JSX.Element;
    Image: ({ img }: { img?: string }) => JSX.Element;
    ProductButton: () => JSX.Element
}
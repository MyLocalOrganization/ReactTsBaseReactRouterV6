import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LaziPage1, LaziPage2, LaziPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

export interface IRoute {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(() => import(/*webpackChunkName: "LazyPage1" */'../01-lazyload/layout/LazyLayout'));
//const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
//const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));

export const routes: IRoute[] = [
    {
        path: '/lazyload/*',// el * indica.,que todo pase por esta ruta
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'NoLazy'
    }
];
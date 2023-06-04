// pages
import { HomePage, CategoryPage, ProductPage, CartPage } from "pages";
export const rootRoute = [
    // {
    //     path: '/',
    //     Component: HomePage,
    //     index: true,
    // },
    {
        path: 'category',
        Component: CategoryPage,
    },
    {
        path: 'product',
        Component: ProductPage,
    },
    {
        path: 'cart',
        Component: CartPage,
    },
];

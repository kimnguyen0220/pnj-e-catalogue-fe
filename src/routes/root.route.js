// pages
import {
  CategoryPage,
  ProductPage,
  CartPage,
  CheckoutPage,
  ScanCodePage,
  HistoryPage
} from "pages";
export const rootRoute = [
  // {
  //     path: '/',
  //     Component: HomePage,
  //     index: true,
  // },
  {
    path: "category",
    Component: CategoryPage,
  },
  {
    path: "product",
    Component: ProductPage,
  },
  {
    path: "cart",
    Component: CartPage,
  },
  {
    path: "checkout",
    Component: CheckoutPage,
  },
  {
    path: "scan-code",
    Component: ScanCodePage,
  },
  {
    path: "history",
    Component: HistoryPage,
  },
];

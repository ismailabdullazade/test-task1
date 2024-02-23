'use client'
import ProductList from "@/component/ProductList";
import { Provider } from "react-redux";
import store from "./store";
import "./globals.css"

export default function Home() {
  return (
    <Provider store={store}>
      <ProductList/>
    </Provider>
  );
}

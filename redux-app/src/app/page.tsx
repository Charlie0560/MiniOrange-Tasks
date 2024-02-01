"use client"
import Cart from "./cart/page"
import { Provider } from "react-redux";
import store from "./store"

export default function Home() {
  return (
    <Provider store={store}>

      <Cart/>
    </Provider>
  );
}

"use client"
import Homepage from "./home/page"
import { Provider } from "react-redux";
import store from "./store"

export default function Home() {
  return (
    <Provider store={store}>

    <Homepage />
  </Provider>
  );
}

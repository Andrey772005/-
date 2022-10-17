import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import MainPage from "../pages/main-page/main-page";
import ProductPage from "../pages/buy-page/buy-page";
import "./styles";
import cardList from "../mocks/cardList";
import { GlobalStyle } from "./styles";
import products from "../mocks/products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AppRoute} from "../../const";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.MAIN} element={<PageWrapper />}>
            <Route index element={<MainPage features={cardList} />} />
            <Route path={AppRoute.ORDER.replace(AppRoute.MAIN, "")} element={<ProductPage products={products}  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;


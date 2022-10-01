import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./styles";
import cardList from "../mocks/cardList";
import { GlobalStyle } from "./styles";
import products from "../mocks/products";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={cardList} products={products}  />
    </>
  )
}


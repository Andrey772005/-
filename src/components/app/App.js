import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./App.css";
import cardList from "../mocks/cardList";

export default function App() {
  return <PageWrapper features={cardList} />;
}


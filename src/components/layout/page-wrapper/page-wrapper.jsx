import React from "react";
import Header from "../header/header";
import {Main} from "./styles";
import Footer from "../footer/footer";
import "./styles";
import ProductPage from "../../pages/buy-page/buy-page";

function PageWrapper() {
	return (
		<>
			<Header />
			<Main>
				<ProductPage />
			</Main>
			<Footer />
		</>
	)
}

export default PageWrapper;

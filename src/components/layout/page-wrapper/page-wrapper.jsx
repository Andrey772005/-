import React from "react";
import Header from "../header/header";
import {Main} from "./styles";
import Footer from "../footer/footer";
import "./styles";
import ProductPage from "../../pages/buy-page/buy-page";

function PageWrapper({ ...prop }) {
	return (
		<>
			<Header />
			<Main>
				<ProductPage {...prop} />
			</Main>
			<Footer />
		</>
	);
}

export default PageWrapper;

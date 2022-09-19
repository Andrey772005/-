import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import "./page-wrapper.css";

function PageWrapper({ ...prop }) {
	return (
		<>
			<Header />
			<main className="page-wrapper__main">
				<MainPage {...prop} />
			</main>
			<Footer />
		</>
	);
}

export default PageWrapper;

import React from "react";
import Header from "../header/header";
import {Main} from "./styles";
import Footer from "../footer/footer";
import "./styles";
import { Outlet } from "react-router-dom";

function PageWrapper() {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	)
}

export default PageWrapper;

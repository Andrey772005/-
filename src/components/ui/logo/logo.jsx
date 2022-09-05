import React from "react";
import logo from "./logo.svg"
import "./logo.css";

function Logo() {
	return (
		<a href="/" className="logo__link">
			<img src={logo} alt="Логотип" />
			<span className="logo__text">Фермерские продукты</span>
		</a>
	);
}

export default Logo;

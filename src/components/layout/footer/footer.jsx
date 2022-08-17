import React from "react";
import Logo from "../../ui/logo/logo";
import "./footer.css";

function Footer() {
	return (
		<footer className="footer">
			<Logo />
			<span className="footer__copyright">Создано 2022</span>
		</footer>
	);
}

export default Footer;

import React from "react";
import Logo from "../../ui/logo/logo";
import { FooterSection, FooterCopyRight } from "./styles";

function Footer() {
	return (
		<FooterSection>
			<Logo />
			<FooterCopyRight>Создано 2022</FooterCopyRight>
		</FooterSection>
	)
}

export default Footer;

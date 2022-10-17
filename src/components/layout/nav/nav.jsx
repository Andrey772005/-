import React from "react";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const";

function Nav() {
	return (
		<nav>
			<Button minWidth={260} link={AppRoute.ORDER}>
				Купить
			</Button>
		</nav>
	);
}

export default Nav;

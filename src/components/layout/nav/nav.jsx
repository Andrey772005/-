import React from "react";
import Button from "../../ui/button/button";
import { AppRoute } from "../../../const";
import { useLocation } from "react-router-dom";
import { Ul, Li } from "../../../styled";

const links = [
	{
		to: AppRoute.MAIN,
		item: <Button link={AppRoute.MAIN}>Главная</Button>
	},
	{
		to: AppRoute.ORDER,
		item: <Button link={AppRoute.ORDER}>Купить</Button>
	}
];

function Nav() {
	const pageUrl = useLocation().pathname;
	return (
		<nav>
			<Ul>
				{links.filter((link) => link.to !== pageUrl)
					.map((link) => (<Li key={link.to}>{link.item}</Li>
						))}
				{/*<Button minWidth={260} link={AppRoute.ORDER}>*/}
				{/*	Купить*/}
				{/*</Button>*/}
			</Ul>
		</nav>
	);
}

export default Nav;

import React from "react";
import { StyledButton } from "./styles";


function Button({ children, maxWidth, link, onClick, className }) {
	return (
		<StyledButton
			$maxWidth={maxWidth}
			{...(link ? { href: link } : { as: "button", onClick, type: "button" })}
			className={className}
			>
			{children}
		</StyledButton>
	);
}

export default Button;

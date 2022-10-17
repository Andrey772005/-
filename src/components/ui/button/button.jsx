import React, { forwardRef } from "react";
import { StyledButton } from "./styles";


const Button = forwardRef(({ children, maxWidth, link, onClick, className, ...props}, ref) => {
	return (
		<StyledButton
			{ ...props }
			$maxWidth={maxWidth}
			ref={ref}
			{...(link ? { to: link } : { as: "button", onClick, type: "button" })}
			className={className}
			>
			{children}
		</StyledButton>
	);
}
);

export default Button;

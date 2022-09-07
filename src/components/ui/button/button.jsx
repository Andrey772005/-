import React from "react";
import "./button.css";

function Button({ children, minWidth }) {
	return (
		<button type="button" style={{ minWidth: minWidth }} className="button">
			{children}
		</button>
	);
}

export default Button;

import React from "react";
import "./title.css";

export const TitleSize = {
	BIG: "big",
	SMALL: "small",
	DEFAULT: "",
	FARM: "farm",
	GROCERY: "grocery"
};

function Title({ children, size }) {
	return <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>;
}

export default Title;

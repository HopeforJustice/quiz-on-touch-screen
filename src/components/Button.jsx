import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Arrow from "./Arrow";

const Button = (props) => {
	const defaultClass =
		"bg-[#D6001C] rounded-[21px] px-[35px] py-[28px] text-[36px] font-apercu-bold flex gap-[20px] items-center justify-center";

	return (
		<>
			<button
				className={classNames(defaultClass, props.styles)}
				onClick={props.onClick}
			>
				{props.text}
				<Arrow />
			</button>
		</>
	);
};

Button.defaultProps = {
	styles: "",
	text: "button text",
};

export default Button;

import React, { useState, useEffect } from "react";
import Button from "./Button";
import Video from "./Video";
import IntroSvg from "./IntroSvg";

const Intro = (props) => {
	const buttonStyles = "absolute top-[770px] right-[100px] z-[100]";

	return (
		<>
			<div className="flex justify-center pt-[40px] relative">
				<IntroSvg />
				<Video />
			</div>

			<div className="absolute top-[960px] left-[101px]">
				<h2 className="font-apercu opacity-50 text-[41px] mb-[20px]">
					Test your knowledge
				</h2>
				<h1 className="font-fk text-[131px] leading-[0.9] uppercase">
					How much do you
					<br />
					know about
					<br />
					modern slavery?
				</h1>
			</div>

			<Button
				text="Take the quiz"
				styles={buttonStyles}
				onClick={props.onStartQuiz}
			/>
		</>
	);
};

export default Intro;

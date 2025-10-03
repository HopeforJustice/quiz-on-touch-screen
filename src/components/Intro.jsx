import React, { useState, useEffect } from "react";
import Button from "./Button";
import Video from "./Video";
import IntroSvg from "./IntroSvg";

const Intro = (props) => {
	return (
		<>
			<div className="flex justify-center pt-[23px] relative">
				<IntroSvg />
				<Video />
			</div>

			<div className="absolute top-[720px] left-[80px]">
				<h2 className="font-apercu opacity-50 text-[33px] mb-[20px]">
					Test your knowledge
				</h2>
				<h1 className="font-fk text-[107px] leading-[0.9] uppercase">
					How much do you
					<br />
					know about
					<br />
					Human Trafficking?
				</h1>
			</div>

			<Button
				text="Take the quiz"
				className="absolute top-[580px] right-[67px] z-[100]"
				onClick={props.onStartQuiz}
			/>
		</>
	);
};

export default Intro;

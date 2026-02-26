import React, { useState, useEffect } from "react";
import Button from "./Button";
import Video from "./Video";
import IntroSvg from "./IntroSvg";

const Intro = (props) => {
	const buttonStyles = "absolute top-[770px] right-[100px] z-[100]";
	const { branding } = props;
	return (
		<>
			{branding === "hfj" && (
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
						className={buttonStyles}
						onClick={props.onStartQuiz}
					/>
				</>
			)}
			{branding === "sfa" && (
				<>
					<div className="p-10">
						<div className="w-full h-[900px] rounded-2xl overflow-hidden">
							<img
								className="w-full h-full object-cover"
								src="/img/tim-mossholder-Kx060cRsmt0-unsplash.jpg"
							/>
						</div>
						<div className="bg-sfa-blue relative -left-[2px] mt-[-350px] max-w-[90%] rounded-tr-[60px] py-20 pl-10">
							<h2 className="font-sfabody uppercase tracking-widest opacity-50 text-[30px] mb-10">
								Test your knowledge
							</h2>
							<h1 className="font-sfadisplay text-[100px] leading-[0.9] mb-20">
								How much do you
								<br />
								know about
								<br />
								modern slavery?
							</h1>
							<Button
								text="Take the quiz"
								className="bg-sfa-orange font-sfabody font-bold"
								onClick={props.onStartQuiz}
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Intro;

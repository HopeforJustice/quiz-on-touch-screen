import React, { useEffect } from "react";
import QR from "./QR";
import { gsap } from "gsap";
import Button from "./Button";

const Result = ({ score, quizData }) => {
	useEffect(() => {
		const timeline = gsap.timeline();

		timeline.fromTo(
			".secondGsap",
			{ opacity: 0, x: -100 },
			{ opacity: 1, x: 0, duration: 0.5, delay: 1 }
		);
	}, []);

	return (
		<>
			<div className="flex flex-col text-center items-center pt-[128px]">
				<p className="firstGsap | text-[41px] opacity-50">
					Drum roll please...
				</p>
				<h2 className="secondGsap opacity-0 text-[141px] font-fk flex items-center gap-10">
					YOU SCORED
					<span className="font-apercu-bold bg-[#d21220] text-[94px] rounded-[30px] flex leading-none px-[20px] py-[10px] pt-[20px]">
						{score}/{quizData.length}
					</span>
				</h2>
				{/* svg */}
				<div className="secondGsap opacity-0 bg-white rounded-[16px] w-[338px] h-[338px] p-[25px]">
					<QR />
				</div>
				<h3 className="secondGsap opacity-0 text-[64px] mt-[40px] mb-[30px] leading-none font-fk">
					JOIN THE MOVEMENT
				</h3>
				<p className="secondGsap opacity-0 text-[33px] max-w-[700px] mb-[30px]">
					Thank you for taking our quiz – for taking time to get more informed
					about modern slavery and human trafficking. Find out how you can get
					involved in the anti-trafficking movement by scanning the QR code.
				</p>
				<Button
					className="secondGsap opacity-0"
					text="Reset Quiz"
					onClick={() => window.location.reload()}
				/>
			</div>
		</>
	);
};

export default Result;

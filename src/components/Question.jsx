import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import QuestionSvg from "./QuestionSvg";
import Button from "./Button";

const Question = ({
	questionText,
	questionNumber,
	options,
	correctAnswer,
	selectedOption,
	showExplanation,
	explanationText,
	handleAnswerOptionClick,
	handleNextQuestion,
	isLastQuestion,
	branding,
}) => {
	const optionLetters = ["A", "B", "C", "D"];
	const explanationRef = useRef(null);
	const buttonRef = useRef(null);
	const optionRefs = useRef([]);

	// Animation for options highlighting
	useEffect(() => {
		if (selectedOption) {
			optionRefs.current.forEach((ref, index) => {
				if (ref) {
					const isCorrect = options[index] === correctAnswer;
					const isSelected = options[index] === selectedOption;
					const bgColor = isCorrect
						? "#2c8c2342"
						: isSelected
							? "#8c232342"
							: "";
					gsap.to(ref, { backgroundColor: bgColor, duration: 0.5 });
				}
			});
		}
	}, [selectedOption, correctAnswer, options]);

	// Animation for explanation text and next button
	useEffect(() => {
		if (showExplanation) {
			// Animate incorrect options
			const incorrectOptions = optionRefs.current.filter(
				(ref, index) => options[index] !== correctAnswer,
			);
			gsap.to(incorrectOptions, {
				opacity: 0,
				visibility: "hidden",
				duration: 0.5,
				height: 0,
				paddingTop: 0,
				paddingBottom: 0,
			});
			gsap.fromTo(
				explanationRef.current,
				{ opacity: 0, y: 20 },
				{ opacity: 1, y: 0, duration: 0.5 },
			);
			gsap.fromTo(
				buttonRef.current,
				{ opacity: 0, scale: 0.8 },
				{ opacity: 1, scale: 1, duration: 0.5, delay: 0.3 },
			);
		}
	}, [showExplanation, options, correctAnswer]);

	return (
		<>
			{branding === "hfj" && (
				<>
					<div className="question grid grid-cols-1 grid-rows-1 w-full h-full items-center justify-items-center">
						<QuestionSvg className="row-start-1 col-start-1" />
						<div className="justify-self-start self-start row-start-1 col-start-1 flex justify-center items-center ml-[50px]">
							<p className="text-[141px] font-fk ml-[15px] mt-[15px] w-[153px]">
								{questionNumber}
							</p>
						</div>
						<div className="box-border self-start row-start-1 col-start-1 mt-[217px] pt-[95px] px-[50px] w-full">
							<div className="pl-[75px] pr-[100px] mb-[60px]">
								<p className="text-[56px] font-apercu-bold">{questionText}</p>
							</div>
							{!showExplanation && (
								<div className="px-[75px] flex flex-col gap-7">
									{options.map((option, index) => (
										<div
											key={index}
											className="py-[15px] px-[32px] mx-[-32px] rounded-[21px] option flex gap-[40px] items-center"
											onClick={() => handleAnswerOptionClick(option)}
											ref={(el) => (optionRefs.current[index] = el)}
										>
											<div className="text-[52px] ring-2 ring-white rounded-full min-w-[80px] min-h-[80px] inline-flex justify-center items-center relative">
												<span className="mt-[5px]">{optionLetters[index]}</span>
											</div>
											<div className="text-[41px] mt-[3px]">{option}</div>
										</div>
									))}
								</div>
							)}
							{showExplanation && (
								<div className="px-[75px] flex-col flex">
									{options.map((option, index) => {
										const isCorrect = option === correctAnswer;
										const optionClass = isCorrect ? "bg-[#2c8c2342]" : "";
										return (
											<div
												key={index}
												className={`py-[15px] px-[32px] mx-[-32px] rounded-[21px] option flex gap-[40px] items-center ${optionClass}`}
												ref={(el) => (optionRefs.current[index] = el)}
											>
												<div className="text-[52px] ring-2 ring-white rounded-full min-w-[80px] min-h-[80px] inline-flex justify-center items-center relative">
													<span className="mt-[5px]">
														{optionLetters[index]}
													</span>
												</div>
												<div className="text-[41px] mt-[3px]">{option}</div>
											</div>
										);
									})}
									<p
										ref={explanationRef}
										className="text-[36px] font-apercu my-12 opacity-0"
									>
										{explanationText}
									</p>
									<Button
										text={isLastQuestion ? "See your score" : "Next question"}
										onClick={handleNextQuestion}
										className="mt-4 self-end opacity-0"
										ref={buttonRef}
									/>
								</div>
							)}
						</div>
					</div>
				</>
			)}
			{branding === "sfa" && (
				<>
					<div className="question grid grid-cols-1 grid-rows-1 w-full h-full items-center justify-items-center">
						<div className="box-border self-start row-start-1 col-start-1 mt-[100px] pt-[45px] px-[80px] w-full">
							<div className="mb-[60px]">
								<p className="text-[60px] font-sfadisplay leading-tight">
									{questionText}
								</p>
							</div>
							{!showExplanation && (
								<div className="flex flex-col gap-7">
									{options.map((option, index) => (
										<div
											key={index}
											className="p-10 rounded-[21px] option flex gap-[40px] items-center bg-sfa-blue-600"
											onClick={() => handleAnswerOptionClick(option)}
											ref={(el) => (optionRefs.current[index] = el)}
										>
											<div className="text-[41px] mt-[3px] font-sfabody font-bold">
												{option}
											</div>
										</div>
									))}
								</div>
							)}
							{showExplanation && (
								<div className="flex-col flex">
									{options.map((option, index) => {
										const isCorrect = option === correctAnswer;
										const optionClass = isCorrect ? "bg-[#2c8c2342]" : "";
										return (
											<div
												key={index}
												className={`p-10 rounded-[21px] option flex gap-[40px] items-center ${optionClass}`}
												ref={(el) => (optionRefs.current[index] = el)}
											>
												<div className="text-[41px] mt-[3px] font-sfabody font-bold">
													{option}
												</div>
											</div>
										);
									})}
									<p
										ref={explanationRef}
										className="text-[36px] font-sfabody my-12 opacity-0"
									>
										{explanationText}
									</p>
									<Button
										text={isLastQuestion ? "See your score" : "Next question"}
										onClick={handleNextQuestion}
										className="mt-4 self-end bg-sfa-orange font-sfabody font-bold opacity-0"
										ref={buttonRef}
									/>
								</div>
							)}
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Question;

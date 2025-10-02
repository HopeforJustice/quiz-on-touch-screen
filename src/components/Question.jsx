import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import QuestionSvg from "./QuestionSvg";
import Button from "./Button";
import Logo from "./Logo";

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
				(ref, index) => options[index] !== correctAnswer
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
				{ opacity: 1, y: 0, duration: 0.5 }
			);
			gsap.fromTo(
				buttonRef.current,
				{ opacity: 0, scale: 0.8 },
				{ opacity: 1, scale: 1, duration: 0.5, delay: 0.3 }
			);
		}
	}, [showExplanation, options, correctAnswer]);

	return (
		<>
			<div className="question grid grid-cols-1 grid-rows-1 w-full h-full min-h-[100vh] items-center justify-items-center">
				<QuestionSvg className="row-start-1 col-start-1 w-full h-full p-8" />
				<div className="justify-self-start self-start row-start-1 col-start-1 flex justify-center items-center ml-[50px]">
					<p className="text-[100px] w-[130px] absolute font-fk top-[15px] right-[22px] text-center">
						{questionNumber}
					</p>
				</div>
				<div className="box-border self-start row-start-1 col-start-1 mt-[180px] pt-[45px] px-[60px] w-full">
					<div className="pl-[75px] pr-[50px] mb-[60px]">
						<p className="text-[40px] font-apercu-bold">{questionText}</p>
					</div>
					{!showExplanation && (
						<div className="px-[75px] flex flex-col gap-4">
							{options.map((option, index) => (
								<div
									key={index}
									className="py-[15px] px-[32px] mx-[-32px] rounded-[21px] option flex gap-[40px] items-center"
									onClick={() => handleAnswerOptionClick(option)}
									ref={(el) => (optionRefs.current[index] = el)}
								>
									<div className="text-[32px] ring-2 ring-white rounded-full min-w-[60px] min-h-[60px] inline-flex justify-center items-center relative">
										<span className="mt-[5px]">{optionLetters[index]}</span>
									</div>
									<div className="text-[26px] mt-[3px]">{option}</div>
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
										<div className="text-[32px] ring-2 ring-white rounded-full min-w-[60px] min-h-[60px] inline-flex justify-center items-center relative">
											<span className="mt-[5px]">{optionLetters[index]}</span>
										</div>
										<div className="text-[26px] mt-[3px]">{option}</div>
									</div>
								);
							})}
							<p
								ref={explanationRef}
								className="text-[24px] font-apercu my-12 opacity-0"
							>
								{explanationText}
							</p>
							<Button
								text={isLastQuestion ? "See your score" : "Next question"}
								onClick={handleNextQuestion}
								className="mt-4 self-start opacity-0"
								ref={buttonRef}
							/>
						</div>
					)}
				</div>
			</div>
			<Logo />
		</>
	);
};

export default Question;

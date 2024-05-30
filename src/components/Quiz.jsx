import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Intro from "./Intro";
import Question from "./Question";
import Logo from "./Logo";
import quizData from "../utils/quizData";
import Result from "./Result";

const Quiz = () => {
	const [currentView, setCurrentView] = useState("intro");
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [selectedOption, setSelectedOption] = useState(null);
	const [showResult, setShowResult] = useState(false);
	const [showExplanation, setShowExplanation] = useState(false);
	const containerRef = useRef(null);

	useEffect(() => {
		if (currentView === "intro") {
			gsap.fromTo(
				containerRef.current,
				{ opacity: 0, x: -100 },
				{ opacity: 1, x: 0, duration: 0.5 }
			);
		} else if (currentView === "question") {
			gsap.fromTo(
				containerRef.current,
				{ opacity: 0, x: 100 },
				{ opacity: 1, x: 0, duration: 0.5 }
			);
		}
	}, [currentView]);

	const handleStartQuiz = () => {
		gsap.to(containerRef.current, {
			opacity: 0,
			x: -100,
			duration: 0.5,
			onComplete: () => {
				setCurrentView("question");
				gsap.fromTo(
					containerRef.current,
					{ opacity: 0, x: 100 },
					{ opacity: 1, x: 0, duration: 0.5 }
				);
			},
		});
	};

	const handleAnswerOptionClick = (selectedOption) => {
		setSelectedOption(selectedOption);
		if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
			setScore(score + 1);
		}

		// Delay to show the highlight before hiding incorrect options
		setTimeout(() => {
			setShowExplanation(true);
		}, 1000); // Adjust delay as needed
	};

	const handleNextQuestion = () => {
		setShowExplanation(false);
		setSelectedOption(null);

		const nextQuestionIndex = currentQuestionIndex + 1;
		if (nextQuestionIndex < quizData.length) {
			setCurrentQuestionIndex(nextQuestionIndex);
			gsap.fromTo(
				containerRef.current,
				{ opacity: 0, x: 100 },
				{ opacity: 1, x: 0, duration: 0.5 }
			);
		} else {
			setShowResult(true);
		}
	};

	return (
		<>
			<div className="w-[1080px] h-[1920px]" ref={containerRef}>
				{currentView === "intro" && <Intro onStartQuiz={handleStartQuiz} />}
				{currentView === "question" && !showResult && (
					<Question
						questionText={quizData[currentQuestionIndex].questionText}
						questionNumber={quizData[currentQuestionIndex].questionNumber}
						options={quizData[currentQuestionIndex].options}
						correctAnswer={quizData[currentQuestionIndex].correctAnswer}
						selectedOption={selectedOption}
						showExplanation={showExplanation}
						explanationText={quizData[currentQuestionIndex].explanationText}
						handleAnswerOptionClick={handleAnswerOptionClick}
						handleNextQuestion={handleNextQuestion}
						isLastQuestion={currentQuestionIndex === quizData.length - 1}
					/>
				)}
				{showResult && <Result score={score} quizData={quizData} />}
			</div>
			<Logo />
		</>
	);
};

export default Quiz;

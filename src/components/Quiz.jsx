import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Intro from "./Intro";
import Question from "./Question";
import Logo from "./Logo";

const Quiz = () => {
	const [currentView, setCurrentView] = useState("intro");
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
			},
		});
	};

	return (
		<>
			<div ref={containerRef}>
				{currentView === "intro" && <Intro onStartQuiz={handleStartQuiz} />}
				{currentView === "question" && (
					<Question questionText="What is the capital of France?" />
				)}
			</div>
			<Logo />
		</>
	);
};

export default Quiz;

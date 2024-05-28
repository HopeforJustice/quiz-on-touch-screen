import React from "react";
import QuestionSvg from "./QuestionSvg";

const Question = ({ questionText }) => {
	return (
		<div className="question">
			<QuestionSvg />
			<h2>{questionText}</h2>
			{/* Add your question content here */}
		</div>
	);
};

export default Question;

import React from "react";

const Video = () => {
	return (
		<video
			className="video absolute w-[688px] h-[618px] mt-[38px]"
			disablePictureInPicture
			muted
			loop
			autoPlay
		>
			<source src="./intro-vid.mp4" />
		</video>
	);
};

export default Video;

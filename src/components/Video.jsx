import React from "react";

const Video = () => {
	return (
		<video
			className="video absolute w-[880px] h-[818px] top-[90px]"
			disablePictureInPicture
			muted
			loop
			autoPlay
		>
			<source src="./intro-video.mp4" />
		</video>
	);
};

export default Video;

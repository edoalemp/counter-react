import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export const secondsCounter = props => {
	return (
		<div className="text-center mt-5">
			<h1>{seconds}</h1>
		</div>
	);
};

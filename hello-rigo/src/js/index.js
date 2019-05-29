//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
let seconds = 0;
const SecondsCounter = props => {
	return (
		<div className="text-center mt-5">
			<h1>{props.secs}</h1>
		</div>
	);
};

SecondsCounter.propTypes = {
	secs: PropType.number
};

//render your react application

setInterval(function() {
	ReactDOM.render(
		<SecondsCounter secs={seconds} />,
		document.querySelector("#app")
	);
	seconds++;
}, 1000);

//ReactDOM.render(
//	<SecondsCounter secs={seconds} />,
//	document.querySelector("#app")
//);

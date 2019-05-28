//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { secondsCounter } from "./component/home.js";

let seconds;
setInterval(seconds++, 1000);

const SecondsCounter = props => {
	//setInterval((seconds = seconds + 1), 1000);
	return (
		<div className="text-center mt-5">
			<h1>{props.secs}</h1>
		</div>
	);
};

//render your react application
ReactDOM.render(
	<SecondsCounter secs={seconds} />,
	document.querySelector("#app")
);

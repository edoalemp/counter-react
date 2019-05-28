import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			seconds: 0
		};
	}

	componentDidMount() {
		setInterval(
			() => this.setState({ seconds: this.state.seconds + 1 }),
			1000
		);
	}

	render() {
		return (
			<div className="text-center mt-5">
				<h1>{this.state.seconds}</h1>
			</div>
		);
	}
}

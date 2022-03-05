import React from "react";
import Note from "./Note";

import "./App.css";

export default class Guitar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			useOctives: false,
			amount: 5,
			notes: [],
			allPossible: [
				"C",
				"C#",
				"Db",
				"D#",
				"Eb",
				"E",
				"F",
				"F#",
				"Gb",
				"G",
				"G#",
				"Ab",
				"A",
				"A#",
				"Bb",
				"B"
			]
		};

		this.setAmountHandler = this.setAmountHandler.bind(this);
		this.setNoteHandler = this.setNoteHandler.bind(this);
	}

	componentDidMount(){
		this.setNoteHandler();
	}

	setNoteHandler(){
		let notes = [];
		for (let i = 0; i < this.state.amount; i++) {
			let note = this.state.allPossible[Math.floor(Math.random() * this.state.allPossible.length)];
			notes.push(<Note noteName={note} checked={this.state.useOctives} key={i}/>);
		}
		this.setState({notes: notes});
	}
	setAmountHandler(e){
		this.setState({amount : e.target.value})
		this.setNoteHandler();
	}

    render(){
		return(
			<div className="main-container">
				<div>
					<div className="flexSpace ">
						<div>
							<label>{this.state.amount}<input className="rangeSelector" type={"range"} value={this.state.amount} onChange={this.setAmountHandler} min={2} max={50}></input></label>
						</div>
						<div className="flex">
							<label>Use Octives<input type={"checkbox"} onChange={async (e) => {await this.setState({useOctives:e.target.checked}); this.setNoteHandler()}}></input></label>
						</div>
					</div>
				</div>

				<div className="flex ">
					{
						this.state.notes.map((note) => {
							return note;
						})
					}
				</div>
			</div>
		);
	};
}
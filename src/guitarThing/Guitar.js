import React from "react";
import Note from "./Note";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

	async setNoteHandler(){
		let notes = [];
		for (let i = 0; i < this.state.amount; i++) {
			let note = this.state.allPossible[Math.floor(Math.random() * this.state.allPossible.length)];
			notes.push(<Note noteName={note} checked={this.state.useOctives} key={i}/>);
		}
		await this.setState({notes: notes});
	}
	async setAmountHandler(e){
		await this.setState({amount : e.target.value})
		await this.setNoteHandler();
	}

    render(){
		return(
		<>
			<Navbar title={this.props.title}/>
			<div className="main-container">
				<div>
					<div className="flexSpace ">
						<div>
							<label id="range-label">Amount: {this.state.amount}</label><input className="rangeSelector" type={"range"} value={this.state.amount} onChange={this.setAmountHandler} min={1} max={50}></input>
							<button className=" ml-4 py-1 px-2 border-2 border-black rounded-md hover:bg-gray-300 transform active:translate-y-0.5 " onClick={this.setNoteHandler}>Generate</button>
						</div>
						<div className="flex">
							<label>Use Octives<input id="check" type={"checkbox"} onChange={async (e) => {await this.setState({useOctives:e.target.checked}); this.setNoteHandler()}}></input></label>
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
				<Footer/>
			</div>
		</>
		);
	};
}
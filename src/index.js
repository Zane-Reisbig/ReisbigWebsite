import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import About from './components/About';
import Other from './components/Other';
import Egg from './components/Egg';
import Projects from './components/Projects';

import PunchIt from './timeCounter/PunchIt';
import NoteApp from './noteaggregator';


// 1: Name of the project
// 2: Route to the project
const projects = {
	"Punch It": "punchIt",
	"Line Counter" : "noteaggregator",
	"Coming Soon": "egg",
}

ReactDOM.render(
	<div className={"containerOne pb-9"}>
		<BrowserRouter>
			<Routes>
				<Route path="/"                        element={<App      title={"Home"} />} />
				<Route path="about"                    element={<About    title={"About"} />} />
				<Route path="other"                    element={<Other    title={"Other"} />} />
				<Route path="projects"                 element={<Projects title={"Projects"} projects={projects}/>} />
				<Route path="projects/punchit"         element={<PunchIt  title={"Punch It"} />} />
				<Route path="projects/noteaggregator"  element={<NoteApp  title={"Note Aggregator"} />} />	

				<Route path="projects/egg"     		   element={<Egg      title={"It's not easter"} />} />
			</Routes>
		</BrowserRouter>
	</div>,
  document.getElementById('root')
);


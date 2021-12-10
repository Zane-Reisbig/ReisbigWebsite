import React from 'react';
import './index.css';

import App from './mainApp/App';
import Footer from "../components/Footer"
import Header from '../components/Navbar'

export default function NoteApp(props) {
    return(
        <div>
            <Header title={props.title} />
            <h1 className="text-center font-bold text-4xl">Word Frequency</h1>
            <div className={"flex justify-center"}>
                <App />
            </div>
            <Footer />
        </div>
    );
} 

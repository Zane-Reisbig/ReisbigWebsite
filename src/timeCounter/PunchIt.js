import React from 'react';
import MainComp from './mainComp.js'
import './App.css'

import Footer from "../components/Footer"
import Header from '../components/Navbar'

export default function PunchIt(){
    return (
    <div>
        <Header title="Punch It"/>
            <div className={"webpageClamp"}>
                
                <div className={"webpageCentered centeredText fadeIn easeOut "}>

                    <MainComp />
                </div>
            </div>
        <Footer otherInfo="Check Out the main page! " link={"https://www.punchit.app"}/>
    </div>
    )
}

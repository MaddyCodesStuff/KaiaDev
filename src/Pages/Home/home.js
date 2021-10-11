import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './home.css';
export default function Home(){

    return(
            <div className="MainPage">
                <div className="Header">
                    <p>Welcome to Kaia Dev Studios</p>
                    <em>More to come.</em>
                </div>
                    <Link to="/blog-1">
                        <div className = 'Links'>
                            Blog 1: Beginnings
                        </div>
                    </Link>
            </div>
        
    );
}
import React from "react";
import { useHistory } from "react-router";
import Index from "../../Routes/index";
import "./layout.scss";

const Landing = () => {
    const history = useHistory();

    return(
        <div className="landing">
            <div className="wrapped">
                <div className="left">
                    <div className="center-details">
                        <h3>Re-invent the way you connect</h3>
                        <small>This platform helps you view and edit various profiles</small>
                        <div className="buttons">
                            <button
                                id="one"
                                onClick={() => history.push(Index.profile.allprofiles)}
                            >
                                View
                            </button>
                            <button
                                id="two"
                                onClick={() => {
                                    if (window.confirm("Do you really want to leave?")) {
                                        alert('Thanks for Visiting!');
                                        window.close();
                                      }
                                }}
                            >
                                Exit
                            </button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <p style={{color: 'white'}}>Any text goes here</p>
                </div>
            </div>
        </div>
    )
}

export default Landing;
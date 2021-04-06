// we can have loaders and spinners here
import React from "react";
import Spinner from "../assets/images/spinner.gif";

import "../styles/common.scss";


const Loader = () => {
    return(
        <div className="loader">
            <img src={Spinner} alt='Loading...' />
        </div>
    )
}
export { Loader };
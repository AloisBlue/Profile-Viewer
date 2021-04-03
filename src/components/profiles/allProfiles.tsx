import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../../data/store/actions/users";
import Pic from "../../assets/images/african.jpg";
import SingleProfile from "./singleProfile";

import "./profiles.scss";


const AllProfiles = () => {
    const dispatch = useDispatch();
    const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ,1]

    useEffect(() => {
        dispatch(getUsers())
    },
    // eslint-disable-next-line
    [])

    return(
        <div className="all-profiles">
            <div className="left">
                {
                    items.map(() => 
                    <div className="item">
                        <div>
                            <img className="item-img" src={Pic} alt="prof" />
                        </div>
                        <div>
                            <p>Alois Blue</p>
                        </div>
                        <div className="holder">
                            <small className="joined">Joined, {'1st feb'}</small>
                            <p><button className="view">View</button></p>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className='right'>
                <SingleProfile />
            </div>
        </div>
    );
}

export default AllProfiles;
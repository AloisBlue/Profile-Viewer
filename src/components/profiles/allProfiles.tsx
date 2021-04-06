import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from 'date-fns'
import { getSingleUser, getUsers } from "../../data/store/actions/users";
import { RootState } from "../../data/store/reducers/index";
import Pic from "../../assets/images/african.jpg";
import SingleProfile from "./singleProfile";
import { User } from "../../models/User";
import { Loader } from "../../common/loader";

import "../../styles/profiles.scss";


interface Details {
    id?: string;
    name: String;
    occupation: String;
    email: String;
    bio: String;
    updated_at?: String;
}

const AllProfiles = () => {
    const dispatch = useDispatch();

    const [checked, setChecked] = useState(0);
    const [details, setDetails] = useState<Details>({
        id: '',
        name: '',
        occupation: '',
        email: '',
        bio: '',
        updated_at: ''
    });

    const { allUsers, loading } = useSelector((state: RootState) => ({
        allUsers: state.users.allUsers,
        loading: state.users.loading
    }));    

    useEffect(() => {
        dispatch(getUsers())
    },
    // eslint-disable-next-line
    [])

    useEffect(() => {
        if (allUsers) {
            setDetails({
                id: allUsers[checked].id.toString(),
                name: allUsers[checked].name.toString(),
                occupation: allUsers[checked].occupation.toString(),
                email: allUsers[checked].email.toString(),
                bio: allUsers[checked].bio.toString(),
                updated_at: allUsers[checked].updated_at.toString()
            })
        }
    }, [allUsers, checked])

    return(
        <div className="all-profiles">
            <div className={`left ${loading ? 'bg-grey-left': ''}`}>
                {
                    loading && <Loader />
                }
                {
                    allUsers && allUsers.sort((a,b) => a.name.localeCompare(b.name.toString())).map((user: User, i) => 
                    <div className={`item ${i === checked ? 'checked': ''}`} key={i}>
                        <div>
                            <img className="item-img" src={Pic} alt="prof" />
                        </div>
                        <div>
                            <p>{user.name}</p>
                        </div>
                        <div className="holder">
                            <small className="joined">Joined on {format(new Date(user.created_at.toString()), 'dd eee, LLL yyyy')}</small>
                            <p>
                                <button
                                    className="view"
                                    onClick={async () => {
                                        await dispatch(getSingleUser(user.id.toString()));
                                        if (!loading) {
                                            setChecked(i)
                                        }
                                    }}
                                    >
                                        View
                                </button>
                            </p>
                        </div>
                    </div>
                    )
                }
            </div>
            <div className={`right ${loading ? 'bg-grey': ''}`}>
                {
                    allUsers && <SingleProfile details={details} setChecked={setChecked} checked={checked} />
                }
            </div>
        </div>
    );
}

export default AllProfiles;
export type { Details };
import React, { FormEvent, useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useDispatch } from "react-redux";
import { format } from 'date-fns'
import { Details } from "./allProfiles";
import Pic from "../../assets/images/african.jpg";
import { updateUser } from "../../data/store/actions/users";

import "../../styles/profiles.scss";


  const getModalStyle = () => {
    const top = 25;
    const left = 40;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 3, 3),
        outline: 'none'
      },
      header: {
          textAlign: 'center',
      }
    }),
  );

const SingleProfile = ({ details, setChecked, checked }: { details: Details , setChecked: Function, checked: number}) => {  
    const dispatch = useDispatch();  
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const [user, setUser] = useState<Details>({
        id: '',
        name: '',
        occupation: '',
        email: '',
        bio: '',
        updated_at: ''
    });

    useEffect(() => {
        setUser({
            id: details.id,
            name: details.name,
            occupation: details.occupation,
            email: details.email,
            bio: details.bio
        });
    }, [details])

    const handleOpen = () => {
        setOpen(true);
        setUser({
            id: details.id,
            name: details.name,
            occupation: details.occupation,
            email: details.email,
            bio: details.bio
        });
    };

    const handleClose = () => {
        setOpen(false);
        setUser({
            id: '',
            name: '',
            occupation: '',
            email: '',
            bio: '',
            updated_at: ''
        });
    };

    const onChange = (e: FormEvent<HTMLInputElement>) => setUser({
        ...user,
        [e.currentTarget.name]: e.currentTarget.value
    })

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        if (user.id !== undefined) {
            dispatch(updateUser(user, user?.id, handleClose, setChecked, checked))            
        }
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 className={classes.header} style={{color: '#EB5B74'}} id="simple-modal-title">Edit</h2>
            <div className="form-sec">
                <form className="form" onSubmit={onSubmit}>
                    <div>
                        <label>Name</label><br />
                        <input
                            id="input"
                            name="name"
                            value={user.name.toString()}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label>Occupation</label><br />
                        <input
                            id="input"
                            name="occupation"
                            value={user.occupation.toString()}
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label>Bio</label><br />
                        <input
                            id="input"
                            name="bio"
                            value={user.bio.toString()}
                            onChange={onChange}
                        />
                    </div>
                    <div className="submit">
                        <input
                            id="submit"
                            type="submit"
                            value="Edit"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
    return(
        <div className="single-profile">
            <div className="single-top">
                {
                    (details.updated_at !== undefined && details.updated_at !== '') &&
                    <div className="updated">Updated on {format(new Date(details.updated_at.toString()), 'dd eee, LLL yyyy')}</div>
                }
                <div className="full-w">
                    <img className="single-img" src={Pic} alt="prof"  />
                </div>
                <div className="titles">
                    <small id="one">{details.name}</small><br />
                    <small id="two">{details.occupation}</small>
                </div>
            </div>
            <div  className="single-bottom">
                <div className="details">
                    <small id="one">Email</small><br />
                    <small id="two">{details.email}</small>
                </div>
                <div className="details">
                    <small id="one">Bio</small><br />
                    <small id="two">{details.bio}</small>
                </div>
            </div>
            <div className="edit">
                <button
                    className="button"
                    onClick={handleOpen}
                >
                    Edit
                </button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </div>
        </div>
    )
}

export default SingleProfile;
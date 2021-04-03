import React from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Pic from "../../assets/images/african.jpg";

import "./profiles.scss";
  
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
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        outline: 'none'
      },
    }),
  );

const SingleProfile = () => {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
        </div>
    );
    return(
        <div className="single-profile">
            <div className="single-top">
                <div className="full-w">
                    <img className="single-img" src={Pic} alt="prof"  />
                </div>
                <div className="titles">
                    <small id="one">{'Alois Blue'}</small><br />
                    <small id="two">{'Dev at Touch'}</small>
                </div>
            </div>
            <div  className="single-bottom">
                <div className="details">
                    <small id="one">Email</small><br />
                    <small id="two">{'alois@touchinspiration.com'}</small>
                </div>
                <div className="details">
                    <small id="one">Bio</small><br />
                    <small id="two">{'Our father who is at in heaven hallowed be tlafjdlj fja;'}</small>
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
import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

//mui
import { TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

//context 
import authContext from "../../context/AuthContext"

//firebase
import { store } from "../../config/firebase"
import { doc, getDoc } from 'firebase/firestore'

export default function Profile() {

    const classes = useStyle();

    const [isReadOnly, setIsReadOnly] = useState(true)
    const [userInfo, setUserInfo] = useState({ firstName: "", lastName: "", joinAs: "", qualification: "", exam: "", state: "" });
    let { id } = useContext(authContext); //userCurrently LoggedIn
    const { userId } = useParams();

    useEffect(() => {
        (async () => {
            const data = await getDoc(doc(store, "userDetails", userId))
            setUserInfo(data.data())
        })()
    }, [userId])


    return (
        <div className={classes.wrapper}>
            <div className={classes.details}>

                <AccountCircleIcon sx={{ fontSize: 180 }} className={classes.profileImg} />

                <div className={classes.field}>
                    <TextField
                        label="First Name"
                        fullWidth
                        value={userInfo?.firstName}
                        InputProps={{ readOnly: isReadOnly }}
                        variant="standard"
                        onChange={(e) => setUserInfo({ ...userInfo, firstName: e.target.value })}
                    />
                </div>
                <div className={classes.field} >
                    <TextField
                        label="Last Name"
                        fullWidth
                        value={userInfo?.lastName}
                        InputProps={{ readOnly: isReadOnly }}
                        variant="standard"
                        onChange={(e) => setUserInfo({ ...userInfo, lastName: e.target.validationMessage })}
                    />
                </div>

                <div className={classes.field}>
                    <TextField
                        label="Join-As"
                        fullWidth
                        value={userInfo?.joinAs}
                        InputProps={{ readOnly: isReadOnly }}
                        variant="standard"
                    />
                </div>
                <div className={classes.field}>
                    <TextField
                        label="Qualification"
                        fullWidth
                        value={userInfo?.qualification}
                        InputProps={{ readOnly: isReadOnly }}
                        variant="standard"
                        onChange={(e) => setUserInfo({ ...userInfo, qualification: e.target.validationMessage })}
                    />
                </div>
                <div className={classes.field}>
                    <TextField
                        label="Exam"
                        fullWidth
                        value={userInfo?.exam}
                        InputProps={{ readOnly: isReadOnly }}
                        variant="standard"
                    />
                </div>
                <div className={classes.field}>
                    <TextField
                        label="State"
                        fullWidth
                        value={userInfo?.state}
                        InputProps={{ readOnly: isReadOnly }}
                        variant="standard"
                    />
                </div>

                {isReadOnly ?
                    <div className={classes.editButton}>
                        {userId === id ? <Button variant="outlined" onClick={() => setIsReadOnly(false)}>EDIT<ModeEditOutlinedIcon /> </Button> : <></>}
                    </div>
                    :
                    <div className={classes.editButton}>
                        <Button variant="contained" onClick={() => setIsReadOnly(true)}>SAVE</Button>
                    </div>
                }
            </div>
        </div>
    )
}


const useStyle = makeStyles((theme) => ({
    profileImg: {
        fontSize: "large",
    },
    wrapper: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    details: {
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "solid 0.001px black",
        borderRadius: "1%",
        zIndex: "10",
        // background: "linear-gradient(180deg, white 90%, cyan)",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
        },
    },
    field: {
        width: "90%",
        margin: "20px 0 5px 0",
    },
    editButton: {
        display: 'flex',
        width: '90%',
        justifyContent: 'end',
    }
}))
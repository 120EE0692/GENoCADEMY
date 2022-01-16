import { useContext } from "react";

import { Avatar } from "@mui/material";
import { blue } from '@mui/material/colors';
import authContext from "../context/AuthContext";

const UserAvatar = () => {

    const { loginUserName } = useContext(authContext)
    return (
        <Avatar sx={{ bgcolor: blue[300] }}>
            {loginUserName[0]?.toUpperCase()}
        </Avatar>
    )
}

export default UserAvatar;
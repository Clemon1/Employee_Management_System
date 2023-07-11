import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";

const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendLogout = () => {
    dispatch(logOut());
    navigate("/");
  };
  const logoutButton = (
    <div className='icon-button' title='Logout' onClick={sendLogout}>
      LogOut
      <IconButton>
        <LogoutRoundedIcon sx={{ fontSize: "20px", color: "white" }} />
      </IconButton>
    </div>
  );

  return logoutButton;
};

export default LogOut;

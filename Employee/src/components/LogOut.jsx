import { useSendLogoutMutation } from "../features/auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { IconButton } from "@mui/material";

const LogOut = () => {
  const navigate = useNavigate();
  const [sendLogout, { isLoading, isSuccess, isError, error }] =
    useSendLogoutMutation();
  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  if (isLoading) return <p>Logging Out...</p>;

  if (isError) return <p>Error: {error.data?.message}</p>;
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

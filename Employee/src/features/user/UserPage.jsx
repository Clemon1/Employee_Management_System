import { useSendLogoutMutation } from "../auth/authApiSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Avatar } from "@mui/material";
import { Email, Phone, Wc } from "@mui/icons-material";

const UserPage = () => {
  const navigate = useNavigate();
  const [sendLogout, { isLoading, isSuccess }] = useSendLogoutMutation();
  const user = JSON.parse(localStorage.getItem("users"));
  if (!user) {
    return sendLogout();
  }
  // console.log(user);
  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const content = (
    <div className="userPage">
      <div className="userPage-intro">
        <Avatar
          src={`http://localhost:5000/empProfilePics/${user.profile}`}
          sx={{ width: "150px", height: "150px" }}
        />
        <div className="userPage-details">
          <h1>{user.fullname}</h1>
          <div className="userPage-details_items">
            <Email /> <p>{user.email}</p>
          </div>
          <div className="userPage-details_items">
            <Phone /> <p>0{user.phoneNumber}</p>
          </div>
          <div className="userPage-details_items">
            <Wc /> <p>{user.gender}</p>
          </div>
          <p>Department</p>
          <h4>{user.department.name}</h4>
        </div>
      </div>
      <div className="userPage-new">
        <img
          src={`http://localhost:5000/empProfilePics/${user.profile}`}
          alt="user-img"
          className="userPage-img"
        />
        <div className="userPage-details">
          <h1>{user.fullname}</h1>
          <div className="userPage-details_items">
            <Email /> <p>{user.email}</p>
          </div>
          <div className="userPage-details_items">
            <Phone /> <p>0{user.phoneNumber}</p>
          </div>
          <div className="userPage-details_items">
            <Wc /> <p>{user.gender}</p>
          </div>
          <p>Department</p>
          <h4>{user.department.name}</h4>
        </div>
      </div>
    </div>
  );
  return <div className="user">{content}</div>;
};

export default UserPage;

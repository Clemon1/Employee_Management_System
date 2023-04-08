import { useGetUsersQuery } from "../features/user/userSlice";
import ProfileAvatar from "./ProfileAvatar";
import { Avatar, Box } from "@mui/material";
import { ArrowDropDownRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogOut from "./LogOut";
import { CloseRounded } from "@mui/icons-material";

const Profile = ({ userId }) => {
  const [active, setActive] = useState(false);
  const { user, isLoading, isSuccess } = useGetUsersQuery("getUsers", {
    selectFromResult: ({ data, isLoading, isSuccess }) => ({
      user: data?.entities[userId],
      isSuccess,
      isLoading,
    }),
  });
  let profileCard = active ? "displayProfile" : "offscreenProfile";
  let content;
  if (isLoading) content = <p>Loading..</p>;
  if (isSuccess) {
    content = (
      <div className="profile">
        <div
          className="profile-avatar"
          onClick={() => {
            setActive(true);
          }}
        >
          <Avatar
            src={`http://localhost:5000/empProfilePics/${user.profile}`}
          />
          {/* <p>hi, {user.fullname.split(" ")[0]}</p> */}
          {/* <IconButton>
            <ArrowDropDownRounded />
          </IconButton> */}
        </div>
        {/* <div className={`profile-card ${profileCard}`}>
          <div className="profile-close_button">
            <IconButton onClick={() => setActive(false)}>
              <CloseRounded />
            </IconButton>
          </div>
          <div>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <p>View Task</p>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none", color: "black" }}>
              <p>View Profile</p>
            </Link>
          </div>
          <LogOut />
        </div> */}
      </div>
    );
  }
  return content;
};

export default Profile;

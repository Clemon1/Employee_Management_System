import { Avatar } from "@mui/material";

const ProfileAvatar = (profile) => {
  return <Avatar src={`http://localhost:5000/empProfilePics/${profile}`} />;
};

export default ProfileAvatar;

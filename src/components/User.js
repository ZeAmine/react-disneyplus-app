import React from "react";
import "../styles/User.css";

const User = () => {
  return (
    <div className="user">
      <span className="user__name">Amine</span>
      <div className="user__img">
        <img
          src="http://www.coupleofpixels.be/wp-content/uploads/2020/01/The-Child-Life-Size-Figure-001.jpg"
          alt="photo de profil"
        />
      </div>
    </div>
  );
};

export default User;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataUser } from "../../redux/actions/user";
import { Reducers } from "../../redux/types";
import ProfileComp from "../../components/Profile";

function Profile() {
  const dispatch = useDispatch();
  const { auth, user } = useSelector((state: Reducers) => state);

  useEffect(() => {
    dispatch(getDataUser(auth.authData?.Id as number));
  }, [auth.authData?.Id, dispatch]);

  return (
    <>
      <ProfileComp
        name={user.userData?.name}
        picture={
          user.userData?.profilepicture ||
          "https://bulma.io/images/placeholders/128x128.png"
        }
      />
    </>
  );
}

export default Profile;

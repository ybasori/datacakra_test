import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Profile from "../../../components/Profile";
import { getDataTourist } from "../../../redux/actions/tourist";
import { Reducers } from "../../../redux/types";

function TouristDetail() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { tourist } = useSelector((state: Reducers) => state);

  useEffect(() => {
    dispatch(getDataTourist(id || ""));
  }, [dispatch, id]);
  return (
    <>
      {tourist.touristData && (
        <Profile
          name={tourist.touristData.tourist_name}
          email={tourist.touristData.tourist_email}
          location={tourist.touristData.tourist_location}
          picture={
            tourist.touristData.tourist_profilepicture ||
            "https://bulma.io/images/placeholders/128x128.png"
          }
        />
      )}
    </>
  );
}

export default TouristDetail;

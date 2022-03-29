import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useModal } from "../../../../components/Modal";
import {
  deleteDataTourist,
  getDataTourists,
  resetDeleteDataTourist,
} from "../../../../redux/actions/tourist";
import { Reducers } from "../../../../redux/types";
import EditTourist from "../EditTourist";

interface TouristListItemProps {
  id: number;
  name: string;
  email: string;
  picture: string;
  location: string;
}

const TouristListItem: React.FC<TouristListItemProps> = ({
  id,
  name,
  email,
  picture,
  location,
}) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { tourist } = useSelector((state: Reducers) => state);
  const navigate = useNavigate();
  const { setModal, closeNewestModal } = useModal();

  const openModalDelete = () => {
    setModal({
      title: `Delete tourist (${name} - ${email})`,
      body: <>Are sure you want to delete this tourist?</>,
      onConfirm: () => dispatch(deleteDataTourist(id)),
      confirmText: "Yes, sure",
      onCancel: () => null,
      cancelText: "Cancel",
      isCloseOnBackground: false,
      isLoading: tourist.isLoadingDeleteTourist,
    });
  };

  const openModalEdit = () => {
    setModal({
      body: <EditTourist id={id} />,
      onCancel: () => null,
      isLoading: tourist.isLoadingDeleteTourist,
    });
  };

  useEffect(() => {
    if (tourist.errorDeleteTourist) {
      dispatch(resetDeleteDataTourist());
    }
    if (tourist.successDeleteTourist) {
      dispatch(resetDeleteDataTourist());
      dispatch(getDataTourists(Number(searchParams.get("page"))));
      closeNewestModal();
    }
  }, [
    closeNewestModal,
    dispatch,
    searchParams,
    tourist.errorDeleteTourist,
    tourist.successDeleteTourist,
  ]);

  return (
    <>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={picture} alt="tourist" />
            </figure>
          </div>
          <div className="media-content is-flex">
            <div className="content">
              <p>
                <strong>{name}</strong> <small>{email}</small>
                <br />
                {location}
              </p>
            </div>
            <nav className="buttons are-small ml-auto">
              <button
                className="button is-primary"
                onClick={() => navigate(`/tourists/${id}`)}
              >
                Open
              </button>
              <button className="button is-link" onClick={openModalEdit}>
                Edit
              </button>
              <button className="button is-danger" onClick={openModalDelete}>
                Delete
              </button>
            </nav>
          </div>
        </article>
      </div>
    </>
  );
};

export default TouristListItem;

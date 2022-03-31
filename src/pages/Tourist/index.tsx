import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useModal } from "../../components/Modal";
import Pagination from "../../components/Pagination";
import { getDataTourists } from "../../redux/actions/tourist";
import { Reducers } from "../../redux/types";
import CreateNewTourist from "./components/CreateNewTourist";
import TouristListItem from "./components/TouristListItem";

interface TouristData {
  id: string;
  tourist_name: string;
  tourist_email: string;
  tourist_profilepicture: string;
  tourist_location: string;
}

function Tourist() {
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { tourist } = useSelector((state: Reducers) => state);
  const { setModal } = useModal();

  const openModalCreate = () => {
    setModal({
      body: <CreateNewTourist />,
      onCancel: () => null,
      isLoading: tourist.isLoadingPostTourist,
    });
  };

  useEffect(() => {
    dispatch(getDataTourists(Number(searchParams.get("page")) || 1));
  }, [dispatch, searchParams]);
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="columns is-justify-content-center">
            <div className="column is-two-thirds">
              <button
                className="button is-primary is-outlined"
                onClick={openModalCreate}
              >
                Create new tourist
              </button>
            </div>
          </div>

          <div className="columns is-justify-content-center">
            <div className="column is-two-thirds">
              <Pagination
                currentPage={Number(searchParams.get("page")) || 1}
                totalPage={tourist.touristsData?.total_pages || 1}
                setPage={(page) => setSearchParams({ page: `${page}` })}
              />
            </div>
          </div>

          <div className="columns is-justify-content-center">
            <div className="column is-two-thirds">
              {tourist.isLoadingTourists && "Loading ..."}
              {!tourist.isLoadingTourists &&
                tourist.touristsData &&
                (tourist.touristsData?.data as TouristData[]).map(
                  (item, index) => (
                    <TouristListItem
                      key={`tourist-${index + 1}`}
                      id={item.id}
                      name={item.tourist_name}
                      email={item.tourist_email}
                      picture={item.tourist_profilepicture}
                      location={item.tourist_location}
                    />
                  )
                )}
            </div>
          </div>

          <div className="columns is-justify-content-center">
            <div className="column is-two-thirds">
              <Pagination
                currentPage={Number(searchParams.get("page")) || 1}
                totalPage={tourist.touristsData?.total_pages || 1}
                setPage={(page) => setSearchParams({ page: `${page}` })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tourist;

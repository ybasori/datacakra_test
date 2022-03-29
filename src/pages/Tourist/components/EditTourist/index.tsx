import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { useModal } from "../../../../components/Modal";
import {
  editDataTourist,
  getDataTourist,
  getDataTourists,
  resetDataTourist,
  resetEditDataTourist,
} from "../../../../redux/actions/tourist";
import { Reducers } from "../../../../redux/types";

interface EditTouristProps {
  id: number;
}

const schema = yup.object({
  tourist_name: yup.string().required("Name is required!"),
  tourist_email: yup
    .string()
    .email("E-mail is invalid!")
    .required("E-mail is required!"),
  tourist_location: yup.string().required("Location is required!"),
});

const EditTourist: React.FC<EditTouristProps> = ({ id }) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { tourist } = useSelector((state: Reducers) => state);
  const { closeNewestModal } = useModal();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      id,
      tourist_name: "",
      tourist_email: "",
      tourist_location: "",
    },
  });

  const onSubmit = (value: any) => {
    dispatch(editDataTourist(value));
  };

  useEffect(() => {
    dispatch(getDataTourist(Number(id)));
  }, [dispatch, id]);

  useEffect(() => {
    if (!tourist.isLoadingTourist && tourist.touristData) {
      setValue("tourist_name", tourist.touristData.tourist_name);
      setValue("tourist_email", tourist.touristData.tourist_email);
      setValue("tourist_location", tourist.touristData.tourist_location);
    }
  }, [setValue, tourist.isLoadingTourist, tourist.touristData]);

  useEffect(() => {
    if (tourist.errorEditTourist) {
      dispatch(resetEditDataTourist());
    }
    if (tourist.successEditTourist) {
      dispatch(resetEditDataTourist());
      dispatch(resetDataTourist());
      dispatch(getDataTourists(Number(searchParams.get("page"))));
      closeNewestModal();
    }
  }, [
    closeNewestModal,
    dispatch,
    searchParams,
    tourist.errorEditTourist,
    tourist.successEditTourist,
  ]);

  return (
    <>
      <p className="is-size-3">Edit</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label className="label">Name</label>
          <Controller
            name="tourist_name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. Alex Smith"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </div>
            )}
          />
          {errors.tourist_name && (
            <p className="help is-danger">{errors.tourist_name?.message}</p>
          )}
        </div>

        <div className="field">
          <label className="label">Email</label>
          <Controller
            name="tourist_email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="e.g. alexsmith@gmail.com"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </div>
            )}
          />
          {errors.tourist_email && (
            <p className="help is-danger">{errors.tourist_email?.message}</p>
          )}
        </div>

        <div className="field">
          <label className="label">Location</label>
          <Controller
            name="tourist_location"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="e.g. USA"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              </div>
            )}
          />
          {errors.tourist_location && (
            <p className="help is-danger">{errors.tourist_location?.message}</p>
          )}
        </div>

        <div className="field is-grouped">
          <div className="control">
            <button
              className="button is-primary"
              type="submit"
              disabled={tourist.isLoadingPostTourist}
            >
              Submit
            </button>
          </div>
          <div className="control">
            <button
              className="button"
              type="button"
              disabled={tourist.isLoadingPostTourist}
              onClick={closeNewestModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditTourist;

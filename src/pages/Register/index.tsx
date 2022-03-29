import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../redux/types";
import { postAuthRegister, resetAuthRegister } from "../../redux/actions/auth";
import { useAlert } from "../../components/Alert";

const schema = yup.object({
  name: yup.string().required("Name is required!"),
  email: yup
    .string()
    .email("E-mail is invalid!")
    .required("E-mail is required!"),
  password: yup.string().required("Password is required!"),
  confirmPassword: yup
    .string()
    .equals([yup.ref("password")], "Password not matched!")
    .required("Confirm password is required!"),
});

function Register() {
  const { setAlert } = useAlert();
  const dispatch = useDispatch();
  const { auth } = useSelector((state: Reducers) => state);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (data: any) => {
    delete data.confirmPassword;
    dispatch(postAuthRegister(data));
  };

  useEffect(() => {
    if (auth.registerData) {
      setAlert("Register Success", {
        color: "success",
      });
      dispatch(resetAuthRegister());
    }
    if (auth.errorRegister) {
      setAlert("Register Fail", {
        color: "danger",
      });
      dispatch(resetAuthRegister());
    }
  }, [auth.errorRegister, auth.registerData, dispatch, setAlert]);

  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-one-quarter">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <div className="columns">
                    <div className="column">
                      <p className="is-size-3 has-text-centered">Register</p>
                    </div>
                  </div>
                  <div className="columns">
                    <form className="column" onSubmit={handleSubmit(onSubmit)}>
                      <div className="field">
                        <Controller
                          name={"name"}
                          control={control}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <>
                              <p className="control has-icons-left has-icons-right">
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Name"
                                  onBlur={onBlur}
                                  onChange={onChange}
                                  value={value}
                                />
                                <span className="icon is-small is-left">
                                  <i className="fa-solid fa-user"></i>
                                </span>
                              </p>
                            </>
                          )}
                        />
                        {errors.name && (
                          <p className="help is-danger">
                            {errors.name?.message}
                          </p>
                        )}
                      </div>
                      <div className="field">
                        <Controller
                          name={"email"}
                          control={control}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <p className="control has-icons-left has-icons-right">
                              <input
                                className="input"
                                type="email"
                                placeholder="E-mail"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                              />
                              <span className="icon is-small is-left">
                                <i className="fa-solid fa-envelope"></i>
                              </span>
                            </p>
                          )}
                        />
                        {errors.name && (
                          <p className="help is-danger">
                            {errors.email?.message}
                          </p>
                        )}
                      </div>
                      <div className="field">
                        <Controller
                          name={"password"}
                          control={control}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <p className="control has-icons-left">
                              <input
                                className="input"
                                type="password"
                                placeholder="Password"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                              />
                              <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                              </span>
                            </p>
                          )}
                        />
                        {errors.name && (
                          <p className="help is-danger">
                            {errors.password?.message}
                          </p>
                        )}
                      </div>
                      <div className="field">
                        <Controller
                          name={"confirmPassword"}
                          control={control}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <p className="control has-icons-left">
                              <input
                                className="input"
                                type="password"
                                placeholder="Confirm Password"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                              />
                              <span className="icon is-small is-left">
                                <i className="fa-solid fa-lock"></i>
                              </span>
                            </p>
                          )}
                        />
                        {errors.name && (
                          <p className="help is-danger">
                            {errors.confirmPassword?.message}
                          </p>
                        )}
                      </div>
                      <div className="field">
                        <div className="control">
                          <button
                            className="button is-primary is-fullwidth"
                            disabled={auth.isLoadingRegister}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                      <div className="field">
                        <p className="control has-text-centered">
                          <Link to="/login">Already have an account</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;

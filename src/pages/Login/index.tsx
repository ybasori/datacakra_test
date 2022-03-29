import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Reducers } from "../../redux/types";
import { postAuthLogin, resetAuthLogin } from "../../redux/actions/auth";
import { useAlert } from "../../components/Alert";

const schema = yup.object({
  email: yup
    .string()
    .email("E-mail is invalid!")
    .required("E-mail is required!"),
  password: yup.string().required("Password is required!"),
});

function Login() {
  const { setAlert } = useAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((state: Reducers) => state);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => {
    delete data.confirmPassword;
    dispatch(postAuthLogin(data));
  };

  useEffect(() => {
    if (auth.authData) {
      setAlert("Login Success", {
        color: "success",
      });
      navigate("/profile");
    }
    if (auth.errorLogin) {
      setAlert("Login Fail", {
        color: "danger",
      });
      dispatch(resetAuthLogin());
    }
  }, [auth.errorLogin, auth.authData, dispatch, setAlert, navigate]);
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
                      <p className="is-size-3 has-text-centered">Login</p>
                    </div>
                  </div>
                  <div className="columns">
                    <form className="column" onSubmit={handleSubmit(onSubmit)}>
                      <div className="field">
                        <Controller
                          name="email"
                          control={control}
                          render={({ field: { onChange, onBlur, value } }) => (
                            <p className="control has-icons-left has-icons-right">
                              <input
                                className="input"
                                type="email"
                                placeholder="Email"
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
                        {errors.email && (
                          <p className="help is-danger">
                            {errors.email?.message}
                          </p>
                        )}
                      </div>
                      <div className="field">
                        <Controller
                          name="password"
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
                        {errors.password && (
                          <p className="help is-danger">
                            {errors.password?.message}
                          </p>
                        )}
                      </div>
                      <div className="field">
                        <div className="control">
                          <button className="button is-primary is-fullwidth">
                            Submit
                          </button>
                        </div>
                      </div>
                      <div className="field">
                        <p className="control has-text-centered">
                          <Link to="/register">Don't have an account yet?</Link>
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

export default Login;

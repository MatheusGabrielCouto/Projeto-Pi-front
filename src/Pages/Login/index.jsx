import React, { useContext } from "react";
import Image from "../../assets/images/capa.svg";
import Roboto from "../../assets/images/roboto.json";
import Lottie from "lottie-react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { loginSchema } from "../../utils/schema";
import "./styles.css";
import api from "../../api";
import Loading from "../../components/Loading";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router";

export default function Login() {
  const { setLoading } = useContext(UserContext);
  const navigator = useNavigate();
  function login(values) {
    setLoading(true);
    console.log(values);
    api
      .post("/auth", values)
      .then((resp) => {
        setLoading(false);
        api.defaults.headers.Authorization = `Bearer ${resp.data.token}`;
        localStorage.setItem("token", resp.data.token);
        navigator("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  return (
    <>
      <Loading />
      <div className="login">
        <img className="login-image" src={Image} alt="" />
        <div className="login-container">
          <Lottie className="lottie" animationData={Roboto} />
          <h2>Free-Shop</h2>
          <Formik
            onSubmit={login}
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            validateOnBlur
            render={({ values }) => (
              <Form className="form">
                <div className="input-content">
                  <label htmlFor="">Email</label>
                  <Field name="email" />
                  <div className="error">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="input-content">
                  <label htmlFor="">Senha</label>
                  <Field name="password" />
                  <div className="error">
                    <ErrorMessage name="password" />
                  </div>
                </div>
                <button type="submit" className="button">
                  Entrar
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    </>
  );
}

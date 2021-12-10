import { Field, Form, Formik } from "formik";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api";
import Elipse from "../../assets/images/ellipse.svg";
import { valorMask } from "../../utils/masks";
import Roboto from "../../assets/images/roboto.json";
import IconLogout from "../../assets/images/icon_logout.svg";

import "./styles.css";

export default function Product() {
  const [product, setProduct] = useState({});
  const [image, setimage] = useState(false);
  const [imageSelected, setimageSelected] = useState("");
  const navigator = useNavigate();

  const params = useParams();
  const { id } = params;

  function getProduct() {
    api
      .get(`/products/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setProduct(resp.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getProduct();
  }, []);

  function logout() {
    api.delete("/auth").then((resp) => {
      navigator("/login");
    });
  }

  function editImage() {
    setimage(!image);
  }

  return (
    <div className="product">
      <div className="left">
        <div className="left-header">
          <Lottie style={{ width: "70%" }} animationData={Roboto} />
          <h2>Free Shop</h2>
        </div>
        <ul>
          <li onClick={() => navigator("/")}>Produtos</li>
          <li>Cadastros</li>
          <li>Compras</li>
          <li className="logout" onClick={logout}>
            <img src={IconLogout} alt="" />
            Sair
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="header">
          <h2>Produto</h2>
        </div>
        <div className="container">
          <img
            className="image"
            src={product?.image?.url ? product?.image?.url : Elipse}
            alt=""
          />
          <p className="image-edit" onClick={editImage}>
            Editar imagem
          </p>

          <div style={{ display: image === true ? "initial" : "none" }}>
            <input
              onChange={({ target }) => console.log(target.value)}
              type="file"
            />
          </div>

          <Formik
            initialValues={{
              title: "",
              description: "",
              price: "",
            }}
            render={({ values }) => (
              <Form className="form-product">
                <div>
                  <label htmlFor="">Titulo</label>
                  <Field type="text" name="title" placeholder={product.title} />
                </div>
                <div>
                  <label htmlFor="">Descrição</label>
                  <Field
                    type="text"
                    name="description"
                    placeholder={product.description}
                  />
                </div>
                <div>
                  <label htmlFor="">Preço</label>
                  <Field
                    name="price"
                    value={valorMask(values.price)}
                    placeholder={`R$ ${valorMask(product.price)}`}
                  />
                </div>
                <button type="submit">Salvar</button>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  );
}

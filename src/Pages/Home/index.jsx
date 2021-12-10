import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import LoadignHome from "../../assets/images/loading-home.json";
import Roboto from "../../assets/images/roboto.json";
import IconLogout from "../../assets/images/icon_logout.svg";

import { valorMask } from "../../utils/masks";

import "./styles.css";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const navigator = useNavigate();

  function verifyToken() {
    const token = localStorage.getItem("token");
    if (token === null || token === undefined) {
      navigator("/login");
    } else {
      api
        .get("/auth")
        .then((resp) => {
          console.log(resp.data);
          if (resp.data === false) {
            navigator("/login");
          } else {
            setLoading(false);
          }
        })
        .catch((err) => {
          navigator("/login");
          console.log(err);
        });
    }
  }

  function getProducts() {
    api
      .get("/products")
      .then((resp) => {
        setProducts(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    verifyToken();
    getProducts();
  }, []);

  function logout() {
    api.delete("/auth").then((resp) => {
      navigator("/login");
    });
  }

  return (
    <>
      <div className="home">
        <div className="left">
          <div className="left-header">
            <Lottie style={{ width: "70%" }} animationData={Roboto} />
            <h2>Free Shop</h2>
          </div>
          <ul>
            <li>Produtos</li>
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
            <h2>Produtos</h2>
          </div>

          <div className="container">
            <h3>Lista de produtos</h3>
            <table className="table">
              <tr>
                <th>Titulo</th>
                <th>Descrição</th>
                <th>Preço</th>
              </tr>
              {products.map((product) => {
                return (
                  <tr
                    onClick={() => {
                      navigator(`/product/${product.id}`);
                    }}
                  >
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>R$ {valorMask(product.price)}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

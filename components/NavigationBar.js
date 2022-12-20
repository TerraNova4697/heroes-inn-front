import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
const axios = require("axios").default;
import globals from "../globals";

export function NavigationBar() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      // Если токен есть, то ставим isLoggedIn = true
      if (localStorage.getItem('token') !== null) {
        let token = JSON.parse(localStorage.getItem("token")).token;
        axios
        .get(globals.serverDomain + "/auth/users/me/",  {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
            if (response.status === 200) {
                setIsLoggedIn(true)
                setUsername(response.data.username);
            }
        })
        .catch((error) => {
          console.log(error);
          if (error.status === 401) {
            setIsLoggedIn(false)
            localStorage.removeItem('token')
          }
          // localStorage.removeItem('token')
        });
          setIsLoggedIn(true)

      // Если токена нет, то остаемся не залогинены
      } else {
          setIsLoggedIn(false)
      }
  }, [])

  const onLoginClicked = () => {
    Router.push("/login");
  };

  const onRegisterClicked = () => {
    Router.push("/register");
  };

  const onLogoutClicked = () => {
    let token = JSON.parse(localStorage.getItem("token")).token;
    axios
      .post(globals.serverDomain + "/auth/token/logout/",{somedata: "somevalue"}, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      let token = JSON.parse(localStorage.getItem("token")).token;
      axios
        .get("http://127.0.0.1:8000/auth/users/me/",  {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((response) => {
          setUsername(response.data.username);
        })
        .catch((error) => {
          localStorage.removeItem('token')
        });
    }
  }, [isLoggedIn]);

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* <Image src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></Image> */}
            Bootstrap
          </a>

          {isLoggedIn ? (
            <>
              <span style={{ color: "white" }}>Привет, {username}</span>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link
                    className="btn btn-outline-light"
                    onClick={onLogoutClicked}
                    href="#"
                  >
                    Выйти
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light"
                    onClick={onLoginClicked}
                  >
                    Войти
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-light" onClick={onRegisterClicked}>
                    Зарегистрироваться
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

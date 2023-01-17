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
        Router.push('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toTavernClicked = (event) => {
    event.preventDefault()
    Router.push('/heroes-list')
  }

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
          <Link className="navbar-brand" href={'/'}>
            {/* <Image src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></Image> */}
            Таверна героев
          </Link>

          {isLoggedIn ? (
            <>
              <span style={{ color: "white" }}>Привет, {username}</span>
              <ul className="nav justify-content-end" style={{gap: '1rem'}}>
              { !Router.pathname.includes('heroes-list') ? 
                <li className="nav-item">
                  <Link className="btn btn-light" href={'/heroes-list'}>
                    В таверну
                  </Link>
                </li> :
                null
               }
                
                <li className="nav-item">
                  <a
                    className="btn btn-outline-light"
                    onClick={onLogoutClicked}
                    href="#"
                  >
                    Выйти
                  </a>
                </li>
              </ul>
            </>
          ) : (
            <>
              <ul className="nav justify-content-end" style={{gap: '1rem'}}>
                <li className="nav-item">
                  <Link
                    className="btn btn-outline-light"
                    href={'/login'}
                  >
                    Войти
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-light" href={'/register'}>
                    Зарегистрироваться
                  </Link>
                </li>
              </ul>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

import { MainLayout } from "../../components/MainLayout";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HeroCard from "../../components/heroes/HeroCard";
import styles from "./styles.module.css";
import loadCustomRoutes from "next/dist/lib/load-custom-routes";
const axios = require("axios").default;
import globals from "../../globals";
import addCharacterPicture from "../../public/add-image.jpg";
import Link from "next/link";

export default function HeroesList() {
  const [user, setUser] = useState({});
  const [heroes, setHeroes] = useState([]);

  const loadUser = () => {
    let token = JSON.parse(localStorage.getItem("token")).token;
    axios
      .get(globals.serverDomain + "/auth/users/me/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 401) {
        }
      });
  };

  const loadHeroes = () => {
    let token = JSON.parse(localStorage.getItem("token")).token;
    axios
      .get(globals.serverDomain + "/heroes/api/v1/heroeslist/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setHeroes(response.data);
        } else {
          console.log(response.status);
        }
      })
      .catch((error) => {
        console.log(error);
        if (response.status === 401) {
          // TODO: разлогинить пользователя
        }
      });
  };

  useEffect(() => {
    loadUser();
    loadHeroes();
  }, []);

  return (
    <MainLayout>
      <Head>
        <title>Таверна Героев | Логин</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        ></link>
      </Head>
      <Container>
        <div className={styles.heroesContainer}>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
          <div className={styles.addCharacterContainer}>
            <Link href={"/createHero"}>
              <Image
                className={styles.addCharacterButton}
                src={addCharacterPicture}
                width="250"
                height="250"
                alt="Создать нового персонажа"
              />
              <p>Создать нового персонажа</p>
            </Link>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
}

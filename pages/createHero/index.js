
import Head from "next/head";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import CharacterSheet from "../../components/characterSheet/CharacterSheet";
import { MainLayout } from "../../components/MainLayout";
const axios = require("axios").default;
import globals from "../../globals";
import Router from "next/router";

export default function CreateHero() {

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {

      const token = JSON.parse(localStorage.getItem("token")).token;
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
            Router.push('/login')
          }
        });

    // Если токена нет, то остаемся не залогинены
    } else {
      Router.push('/login')
    }
  }, [])

  return (
    <MainLayout>
      <Head>
        <title>Heroes Inn</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        ></link>
      </Head>

      <Container style={{marginTop: "40px"}}>
        <CharacterSheet  />
      </Container>
    </MainLayout>
  );
}

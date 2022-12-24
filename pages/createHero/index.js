import Head from "next/head";
import { Container } from "react-bootstrap";
import CharacterSheet from "../../components/characterSheet/CharacterSheet";
import { MainLayout } from "../../components/MainLayout";

export default function CreateHero() {
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
        <CharacterSheet />
      </Container>
    </MainLayout>
  );
}

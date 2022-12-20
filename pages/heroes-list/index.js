import { MainLayout } from "../../components/MainLayout";
import Head from "next/head";
import Router from 'next/router'
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import HeroCard from "../../components/heroes/HeroCard";
import styles from "./styles.module.css"



export default function HeroesList() {

    useEffect(() => {
        console.log(Router.pathname)
    }, []) 
    return (
        <MainLayout>
        <Head>
            <title>Таверна Героев | Логин</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
        </Head>
            <Container>
                <div className={styles.heroesContainer}>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                    <HeroCard/>
                </div>
                
            </Container>
        </MainLayout>
    )
}
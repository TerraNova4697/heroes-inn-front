import Head from "next/head";
import LoginComponent from "../../components/authorization/LoginComponent";
import { MainLayout } from "../../components/MainLayout";
import styles from './style.module.css'



export default function Login() {


    return (
        <MainLayout>
            <Head>
                <title>Heroes Inn</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
            </Head>
            <div className={styles.centeredElement}>
                <LoginComponent/>
            </div>
            
        </MainLayout>
    )
}
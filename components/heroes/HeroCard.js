import styles from './style.module.css'
import Image from 'next/image'
import pic from '../../public/96337-.jpg'
import { useEffect, useState } from 'react'
import Link from 'next/link'
const axios = require("axios").default
import globals from "../../globals";


export default function HeroCard(props) {

    return (
        <>
            <div className={styles.characterList}>
                <Link href={`/hero/${props.hero.id}`}><Image src={props.hero.hero_img ? props.hero.hero_img : pic} className={styles.heroImage} width="250" height="200" alt={ props.hero.name ? props.hero.name : "Могрейн" }/>
                <h2>Имя:</h2>
                <p>{props.hero.name ? props.hero.name : ""}</p>
                <h2>Раса:</h2>
                <p>{props.hero.race ? props.hero.race : ""}</p>
                <h2>Класс:</h2>
                <p>{props.hero.heroes_class ? props.hero.heroes_class : ""}</p>
                <h2>Уровень:</h2>
                <p>{props.hero.level ? props.hero.level : 1}</p></Link>
                <a
                    className="btn btn-outline-light"
                    onClick={() => props.deleteHero(props.hero.id)}
                    href="#"
                    style={{margin: "0 auto"}}
                  >
                    Удалить
                  </a>
            </div>
        </>
    )
}
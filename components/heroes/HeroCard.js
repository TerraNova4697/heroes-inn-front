import styles from './style.module.css'
import Image from 'next/image'
import pic from '../../public/96337-.jpg'
import { useEffect } from 'react'
import Link from 'next/link'


export default function HeroCard(props) {


    return (
        <>
            <Link href={`/hero/${props.hero.id}`}>
            <div className={styles.characterList}>
                <Image src={props.hero.hero_img ? props.hero.hero_img : pic} className={styles.heroImage} width="250" height="200" alt={ props.hero.name ? props.hero.name : "Могрейн" }/>
                <h2>Имя:</h2>
                <p>{props.hero.name ? props.hero.name : "Могрейн"}</p>
                <h2>Раса:</h2>
                <p>{props.hero.race ? props.hero.race : "Человек"}</p>
                <h2>Класс:</h2>
                <p>{props.hero.heroes_class ? props.hero.heroes_class : "Паладин"}</p>
                <h2>Уровень:</h2>
                <p>{props.hero.level ? props.hero.level : 80}</p>
            </div></Link>
        </>
    )
}
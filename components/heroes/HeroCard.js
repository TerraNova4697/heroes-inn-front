import styles from './style.module.css'
import Image from 'next/image'
import pic from '../../public/96337-.jpg'


export default function HeroCard({ hero_img, name, heroes_class, race, level }) {



    return (
        <>
            <div className={styles.characterList}>
                <Image src={hero_img ? hero_img : pic} className={styles.heroImage} width="250" height="200" alt={ name ? name : "Могрейн" }/>
                <h2>Name:</h2>
                <p>{name ? name : "Могрейн"}</p>
                <h2>Race:</h2>
                <p>{race ? race : "Человек"}</p>
                <h2>Class:</h2>
                <p>{heroes_class ? heroes_class : "Паладин"}</p>
                <h2>Level:</h2>
                <p>{level ? level : 80}</p>
            </div>
        </>
    )
}
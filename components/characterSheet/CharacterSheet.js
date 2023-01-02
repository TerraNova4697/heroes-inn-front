import { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Router from "next/router";
import styles from "./styles.module.css";
import defaultPicture from '../../public/default-hero-image.jpg'
import Image from 'next/image'
const axios = require("axios").default
import globals from "../../globals";
import Toast from '../Toast'

export default function CharacterSheet() {
  const { query } = useRouter()
  
  const [user, setUser] = useState({})

  const [name, setName] = useState("");
  const [heroClass, setHeroClass] = useState("");
  const [level, setLevel] = useState(1);
  const [background, setBackground] = useState("");
  const [race, setRace] = useState("");
  const [alignment, setalignment] = useState("");
  const [experience, setExperience] = useState(0);

  const [strength, setStrength] = useState(0);
  const [strengthModificator, setStrengthModificator] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [dexterityModificator, setDexterityModificator] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [constitutionModificator, setConstitutionModificator] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [intelligenceModificator, setIntelligenceModificator] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [wisdomModificator, setWisdomModificator] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [charismaModificator, setCharismaModificator] = useState(0);

  const [inspiration, setInspiration] = useState(false)
  const [proficiencyBonus, setProficiencyBonus] = useState(0)

  const [strengthSbActive, setStrengthSbActive] = useState(false)
  const [strengthSb, setStrengthSb] = useState(0)
  const [dexteritySbActive, setDexteritySbActive] = useState(false)
  const [dexteritySb, setDexteritySb] = useState(0)
  const [constitutionSbActive, setConstitutionSbActive] = useState(false)
  const [constitutionSb, setConstitutionSb] = useState(0)
  const [intelligenceSbActive, setIntelligenceSbActive] = useState(false)
  const [intelligenceSb, setIntelligenceSb] = useState(0)
  const [wisdomSbActive, setWisdomSbActive] = useState(false)
  const [wisdomSb, setWisdomSb] = useState(0)
  const [charismaSbActive, setCharismaSbActive] = useState(false)
  const [charismaSb, setCharismaSb] = useState(0)

  const [acrobaticsActive, setAcrobaticsActive] = useState(false)
  const [acrobatics, setAcrobatics] = useState(0)
  const [animHandlingActive, setAnimHandlingActive] = useState(false)
  const [animHandling, setAnimHandling] = useState(0)
  const [arcanaActive, setArcanaActive] = useState(false)
  const [arcana, setArcana] = useState(0)
  const [athleticsActive, setAthleticsActive] = useState(false)
  const [athletics, setAthletics] = useState(0)
  const [deceptionActive, setDeceptionActive] = useState(false)
  const [deception, setDeception] = useState(0)
  const [historyActive, setHistoryActive] = useState(false)
  const [history, setHistory] = useState(0)
  const [insightActive, setInsightActive] = useState(false)
  const [insight, setInsight] = useState(0)
  const [intimidationActive, setIntimidationActive] = useState(false)
  const [intimidation, setIntimidation] = useState(0)
  const [investigationActive, setInvestigationActive] = useState(false)
  const [investigation, setInvestigation] = useState(0)
  const [medicineActive, setMedicineActive] = useState(false)
  const [medicine, setMedicine] = useState(0)
  const [natureActive, setNatureActive] = useState(false)
  const [nature, setNature] = useState(0)
  const [perceptionActive, setPerceptionActive] = useState(false)
  const [perception, setPerception] = useState(0)
  const [performanceActive, setPerformanceActive] = useState(false)
  const [performance, setPerformance] = useState(0)
  const [persuasionActive, setPersuasionActive] = useState(false)
  const [persuasion, setPersuasion] = useState(0)
  const [religionActive, setReligionActive] = useState(false)
  const [religion, setReligion] = useState(0)
  const [sleightOfHandActive, setSleightOfHandActive] = useState(false)
  const [sleightOfHand, setSleightOfHand] = useState(0)
  const [stealthActive, setStealthActive] = useState(false)
  const [stealth, setStealth] = useState(0)
  const [survivalActive, setSurvivalActive] = useState(false)
  const [survival, setSurvival] = useState(0)

  const [passiveWisdom, setPassiveWisdom] = useState(0)
  const [otherProfsAndLanguages, setOtherProfsAndLanguages] = useState('')

  const [armorClass, setArmorClass] = useState('')
  const [initiative, setInitiative] = useState('')
  const [speed, setSpeed] = useState('')

  const [hitPoints, setHitPoints] = useState('')
  const [maxHitPoints, setMaxHitPoints] = useState('')
  const [temporaryHitPoints, setTemporaryHitPoints] = useState('')
  const [hitDice, setHitDice] = useState('')

  const [deathSavesSuccesses, setDeathSavesSuccesses] = useState(0)
  const [deathSavesFailures, setDeathSavesFailures] = useState(0)
  const [dsSuccessFirst, setDSSuccessFirst] = useState(false)
  const [dsSuccessSecond, setDSSuccessSecond] = useState(false)
  const [dsSuccessThird, setDSSuccessThird] = useState(false)
  const [dsFailureFirst, setDSFailureFirst] = useState(false)
  const [dsFailureSecond, setDSFailureSecond] = useState(false)
  const [dsFailureThird, setDSFailureThird] = useState(false)

  const [weapons, setWeapons] = useState([])
  const [attacksAndSpellcasting, setAttacksAndSpellcasting] = useState('')

  const [goldCoins, setGoldCoins] = useState('')
  const [silverCoins, setSilverCoins] = useState('')
  const [copperCoins, setCopperCoins] = useState('')
  const [electronCoins, setElectronCoins] = useState('')
  const [platinumCoins, setPlatinumCoins] = useState('')

  const [equipment, setEquipment] = useState('')

  const [heroImg, setHeroImg] = useState(globals.defaultImg)
  const [selectedFile, setSelectedFile] = useState()

  const [personalityTraits, setPersonalityTraits] = useState('')
  const [ideals, setIdeals] = useState('')
  const [bonds, setBonds] = useState('')
  const [flaws, setFlaws] = useState('')

  const [featuresAndTraits, setFeaturesAndTraits] = useState('')

  const [isWeaponSearchOpen, setIsWeaponSearchOpen] = useState(false)
  const [globalWeapon, setGlobalWeapon] = useState([])

  const goClicked = (event) => {
    event.preventDefault();
  
    const weaponsIDs = [];
    for (let i = 0; i < weapons.length; i++) {
      weaponsIDs.push(weapons[i].id)
    }

    console.log("WEAPON")
    console.log(weaponsIDs)

    const intInitiative = parseInt(initiative);
    const intSpeed = parseInt(speed);
    const intHitPoints = parseInt(hitPoints);
    const intMaxHitPoints = parseInt(maxHitPoints);
    const intTemporaryHitPoints = parseInt(temporaryHitPoints);
    const intCopperCoins = parseInt(copperCoins);
    const intSilverCoins = parseInt(silverCoins);
    const intGoldCoins = parseInt(goldCoins);
    const intElectronCoins = parseInt(electronCoins);
    const intPlatinumCoins = parseInt(platinumCoins);
    
    const newHero = {
      name: name,
      hero_img: heroImg,
      heroes_class: heroClass,
      background: background,
      race: race,
      alignment: alignment,
      exp_points: experience,
      level: level,
      inspiration: inspiration,
      proficiency_bonus: proficiencyBonus,
      armor_class: armorClass,
      initiative: intInitiative ? intInitiative : 0,
      speed: intSpeed ? intSpeed : 0,
      hit_points: intHitPoints ? intHitPoints : 0,
      max_hit_points: intMaxHitPoints ? intMaxHitPoints : 0,
      temporary_hit_points: intTemporaryHitPoints ? intTemporaryHitPoints : 0,
      hit_dice: hitDice,
      death_saves_successes: deathSavesSuccesses,
      death_saves_failures: deathSavesFailures,
      other_profs_and_languages: otherProfsAndLanguages,
      passive_wisdom: passiveWisdom,
      attacks_and_spellcasting: attacksAndSpellcasting,
      equipment: equipment,
      features_and_traits: featuresAndTraits,
      strenth: strength,
      dexterity: dexterity,
      constitution: constitution,
      intelligence: intelligence,
      wisdom: wisdom,
      charisma: charisma,
      strength_sb_active: strengthSbActive,
      strength_sb: strengthSb,
      dexterity_sb_active: dexteritySbActive,
      dexterity_sb: dexteritySb,
      constitution_sb_active: constitutionSbActive,
      constitution_sb: constitutionSb,
      intelligence_sb_active: intelligenceSbActive,
      intelligence_sb: intelligenceSb,
      wisdom_sb_active: wisdomSbActive,
      wisdom_sb: wisdomSb,
      charisma_sb_active: charismaSbActive,
      charisma_sb: charismaSb,
      acrobatics_active: acrobaticsActive,
      acrobatics: acrobatics,
      anim_handling_active: animHandlingActive,
      anim_handling: animHandling,
      arcana_active: arcanaActive,
      arcana: arcana,
      athletics_active: athleticsActive,
      athletics: athletics,
      deception_active: deceptionActive,
      deception: deception,
      history_active: historyActive,
      history: history,
      insight_active: insightActive,
      insight: insight,
      intimidation_active: intimidationActive,
      intimidation: intimidation,
      investigation_active: investigationActive,
      investigation: investigation,
      medicine_active: medicineActive,
      medicine: medicine,
      nature_active: natureActive,
      nature: nature,
      perception_active: perceptionActive,
      perception: perception,
      performance_active: performanceActive,
      performance: performance,
      persuasion_active: persuasionActive,
      persuasion: persuasion,
      religion_active: religionActive,
      religion: religion,
      sleight_of_hand_active: sleightOfHandActive,
      sleight_of_hand: sleightOfHand,
      stealth_active: stealthActive,
      stealth: stealth,
      personality_traits: personalityTraits,
      ideals: ideals,
      bonds: bonds,
      flaws: flaws,
      gold_coins: intGoldCoins ? intGoldCoins : 0,
      silver_coins: intSilverCoins ? intSilverCoins : 0,
      copper_coins: intCopperCoins ? intCopperCoins : 0,
      electron_coins: intElectronCoins ? intElectronCoins : 0,
      platinumCoins: intPlatinumCoins ? intPlatinumCoins : 0,
      owner: user.id,
      weapons: weaponsIDs
    }

    axios.post(
      globals.serverDomain + '/heroes/api/v1/createhero/',
      newHero
    ).then(response => {
      const toast = new Toast()
      toast.success("Герой успешно создан!")
      Router.push(`/hero/${response.data.id}`)
    }).catch(error => {
      const toast = new Toast()
      toast.error(`Ошибка: ${error}`)
    })
    
    console.log(newHero)
  };

  const deleteWeapon = (id) => {
    setWeapons(weapons.filter(weapon => weapon.id !== id))

    //TODO: Обновить оружие на сервере
  }

  const addWeapon = (weapon) => {
    setWeapons([...weapons, weapon])
  }

  const loadUser = () => {

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
            const toast = new Toast()
            toast.error("Чтобы создать персонажа, необходимо авторизоваться")
          }
        });

    // Если токена нет, то остаемся не залогинены
    } else {
      Router.push('/login')
    }
    
    
  }

  const loadHero = () => {
    if ( query && query.id ) {
      const token = JSON.parse(localStorage.getItem("token")).token;
      axios.get(globals.serverDomain + `/heroes/api/v1/herosheet/${query.id}`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      }).then(response => {
        const hero = response.data;
        setHeroImg(hero.hero_img);
        setName(hero.name);
        setHeroClass(hero.heroes_class);
        setBackground(hero.background);
        setRace(hero.race);
        setalignment(hero.alignment);
        setExperience(hero.exp_points);
        setLevel(hero.level);
        setInspiration(hero.inspiration);
        setProficiencyBonus(hero.proficiency_bonus);
        setArmorClass(hero.armor_class);
        setInitiative(hero.initiative);
        setSpeed(hero.speed);
        setHitPoints(hero.hit_points);
        setMaxHitPoints(hero.max_hit_points);
        setTemporaryHitPoints(hero.temporary_hit_points);
        setHitDice(hero.hit_dice);
        setDeathSavesSuccesses(hero.death_saves_successes);
        setDeathSavesFailures(hero.death_saves_failures);
        setOtherProfsAndLanguages(hero.other_profs_and_languages);
        setPassiveWisdom(hero.passive_wisdom);
        setAttacksAndSpellcasting(hero.attacks_and_spellcasting);
        setEquipment(hero.equipment);
        setFeaturesAndTraits(hero.features_and_traits);
        setStrength(hero.strength);
        setDexterity(hero.dexterity);
        setConstitution(hero.constitution);
        setIntelligence(hero.intelligence);
        setWisdom(hero.wisdom);
        setCharisma(hero.charisma);
        setStrengthSbActive(hero.strength_sb_active);
        setStrengthSb(hero.strength_sb);
        setDexteritySbActive(hero.dexterity_sb_active);
        setDexteritySb(hero.dexterity_sb);
        setConstitutionSbActive(response.data.constitution_sb_active);
        setConstitutionSb(hero.constitution_sb);
        setIntelligenceSbActive(hero.intelligence_sb_active);
        setIntelligenceSb(hero.intelligence_sb);
        setWisdomSbActive(hero.wisdom_sb_active);
        setWisdomSb(hero.wisdom_sb);
        setCharismaSbActive(hero.charisma_sb_active);
        setCharismaSbActive(hero.charisma_sb_active);
        setCharismaSb(hero.charisma_sb);
        setAcrobaticsActive(hero.acrobatics_active);
        setAcrobatics(hero.acrobatics);
        setAnimHandlingActive(hero.anim_handling_active);
        setAnimHandling(hero.anim_handling);
        setArcanaActive(hero.arcana_active);
        setArcana(hero.arcana);
        setAthleticsActive(hero.athletics_active);
        setAthletics(hero.athletics);
        setDeceptionActive(hero.deception_active);
        setDeception(hero.deception);
        setHistoryActive(hero.history_active);
        setHistory(hero.history);
        setInsightActive(hero.insight_active);
        setInsight(hero.insight);
        setIntimidationActive(hero.intimidation_active);
        setIntimidation(hero.intimidation);
        setInvestigationActive(hero.investigation_active);
        setInvestigation(hero.investigation);
        setMedicineActive(hero.medicine_active);
        setMedicine(hero.medicine);
        setNatureActive(hero.nature_active);
        setNature(hero.nature);
        setPerceptionActive(hero.perception_active);
        setPerception(hero.perception);
        setPerformanceActive(hero.performance_active);
        setPerformance(hero.performance);
        setPersuasionActive(hero.persuasion_active);
        setPersuasion(hero.persuasion);
        setReligionActive(hero.religion_active);
        setReligion(hero.religion);
        setSleightOfHandActive(hero.sleight_of_hand_active);
        setSleightOfHand(hero.sleight_of_hand);
        setStealthActive(hero.stealth_active);
        setStealth(hero.stealth);
        setSurvivalActive(hero.survival_active);
        setSurvival(hero.survival);
        setPersonalityTraits(hero.personality_traits);
        setIdeals(hero.ideals);
        setBonds(hero.bonds);
        setFlaws(hero.flaws);
        setGoldCoins(hero.gold_coins);
        setSilverCoins(hero.silver_coins);
        setCopperCoins(hero.copper_coins);
        setElectronCoins(hero.electron_coins);
        setPlatinumCoins(hero.platinum_coins);

      }).catch(error => {
        console.log(error)
      })
    }
  }

  useEffect(() => {

    loadUser()
    loadHero()

    axios.get(globals.serverDomain + '/heroes/api/v1/weapons')
      .then(response => {
        setGlobalWeapon([...response.data])
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (!query) {
      return
    }

    loadHero()
  }, [query])

  useEffect(() => {
    if(selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      axios.post(globals.serverDomain + '/heroes/api/v1/image', formData)
        .then(response => {
          const imageURL = globals.media + response.data.imageURL;
          setHeroImg(imageURL);
        }).catch(error => {
          console.log(error)
        })
    }

  }, [selectedFile])

  useEffect(() => {
    let pointsCount = 0;
    if (dsSuccessFirst) {pointsCount += 1}
    if (dsSuccessSecond) {pointsCount += 1}
    if (dsSuccessThird) {pointsCount += 1}
    setDeathSavesSuccesses(pointsCount)
  }, [dsSuccessFirst, dsSuccessSecond, dsSuccessThird])

  useEffect(() => {
    let pointsCount = 0;
    if (dsFailureFirst) {pointsCount += 1}
    if (dsFailureSecond) {pointsCount += 1}
    if (dsFailureThird) {pointsCount += 1}
    setDeathSavesFailures(pointsCount)
  }, [dsFailureFirst, dsFailureSecond, dsFailureThird])

  useEffect(() => {
    if((strength - 10) < 0) {
        let modifier = Math.ceil((strength - 10) / 2)
        setStrengthModificator(modifier)
    } else {
        let modifier = Math.floor((strength - 10) / 2)
        setStrengthModificator(modifier)
    }

    if((dexterity - 10) < 0) {
        let modifier = Math.ceil((dexterity - 10) / 2)
        setDexterityModificator(modifier)
    } else {
        let modifier = Math.floor((dexterity - 10) / 2)
        setDexterityModificator(modifier)
    }

    if((constitution - 10) < 0) {
        let modifier = Math.ceil((constitution - 10) / 2)
        setConstitutionModificator(modifier)
    } else {
        let modifier = Math.floor((constitution - 10) / 2)
        setConstitutionModificator(modifier)
    }

    if((intelligence - 10) < 0) {
        let modifier = Math.ceil((intelligence - 10) / 2)
        setIntelligenceModificator(modifier)
    } else {
        let modifier = Math.floor((intelligence - 10) / 2)
        setIntelligenceModificator(modifier)
    }

    if((wisdom - 10) < 0) {
        let modifier = Math.ceil((wisdom - 10) / 2)
        setWisdomModificator(modifier)
    } else {
        let modifier = Math.floor((wisdom - 10) / 2)
        setWisdomModificator(modifier)
    }

    if((charisma - 10) < 0) {
        let modifier = Math.ceil((charisma - 10) / 2)
        setCharismaModificator(modifier)
    } else {
        let modifier = Math.floor((charisma - 10) / 2)
        setCharismaModificator(modifier)
    }
  }, [strength, dexterity, constitution, intelligence, wisdom, charisma])

  return (
    <>
      <Container style={{position: "relative"}}>
        <Form>
          <Row style={{ border: "solid 1px black", paddingTop: "3px" }}>
            <Col lg={5}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Form.Group style={{ width: "100%" }} controlId="characterName">
                  <Form.Control
                    size="lg"
                    type="name"
                    placeholder="Имя персонажа"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <Form.Label>Имя персонажа</Form.Label>
                </Form.Group>
              </div>
            </Col>
            <Col lg={7}>
              <div className={styles.generalInfo}>
                <div className={styles.generalInfoRow}>
                  <Form.Group
                    className="mb-0"
                    controlId="formBasicEmail"
                    style={{ width: "100%" }}
                  >
                    <Form.Control
                      size="sm"
                      type="name"
                      placeholder="Класс"
                      value={heroClass}
                      onChange={(event) => setHeroClass(event.target.value)}
                    />
                    <Form.Label>Класс</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-0"
                    controlId="formBasicEmail"
                    style={{ width: "100%" }}
                  >
                    <Form.Control
                      size="sm"
                      type="number"
                      placeholder="Уровень"
                      max={20}
                      value={level}
                      onChange={(event) => setLevel(event.target.value)}
                    />
                    <Form.Label>Уровень</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-0"
                    controlId="formBasicEmail"
                    style={{ width: "100%" }}
                  >
                    <Form.Control
                      size="sm"
                      type="name"
                      placeholder="Предыстория"
                      value={background}
                      onChange={(event) => setBackground(event.target.value)}
                    />
                    <Form.Label>Предыстория</Form.Label>
                  </Form.Group>
                </div>
                <div className={styles.generalInfoRow}>
                  <Form.Group
                    className="mb-0"
                    controlId="formBasicEmail"
                    style={{ width: "100%" }}
                  >
                    <Form.Control
                      size="sm"
                      type="name"
                      placeholder="Раса"
                      value={race}
                      onChange={(event) => setRace(event.target.value)}
                    />
                    <Form.Label>Раса</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-0"
                    controlId="formBasicEmail"
                    style={{ width: "100%" }}
                  >
                    <Form.Control
                      size="sm"
                      type="text"
                      placeholder="Мировоззрение"
                      value={alignment}
                      onChange={(event) => setalignment(event.target.value)}
                    />
                    <Form.Label>Мировоззрение</Form.Label>
                  </Form.Group>
                  <Form.Group
                    className="mb-0"
                    controlId="formBasicEmail"
                    style={{ width: "100%" }}
                  >
                    <Form.Control
                      size="sm"
                      type="number"
                      placeholder="Очки опыта"
                      value={experience}
                      onChange={(event) => setExperience(event.target.value)}
                    />
                    <Form.Label>Очки опыта</Form.Label>
                  </Form.Group>
                </div>
              </div>
            </Col>
          </Row>
          <Row style={{ border: "solid 1px black", paddingTop: "3px" }}>
            <Col lg={4} >
              <div className={styles.columnModificatorsGroup}>
                <div className={styles.columnModificators}>
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Сила
                    </Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto", height: "70px", textAlign: "center"}}
                      value={strength} 
                      onChange={event => setStrength(parseInt(event.target.value))}
                    />
                    <Form.Text style={{ margin: "0" }}>{strengthModificator < 0 ? `${strengthModificator}` : `+${strengthModificator}`}</Form.Text>
                  </FormGroup>
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Ловкость
                    </Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto",  height: "70px", textAlign: "center"}}
                      value={dexterity} 
                      onChange={event => setDexterity(parseInt(event.target.value))}
                    />
                    <Form.Text style={{ margin: "0" }}>{dexterityModificator < 0 ? `${dexterityModificator}` : `+${dexterityModificator}`}</Form.Text>
                  </FormGroup>
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Телосложение
                    </Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto" , height: "70px", textAlign: "center"}}
                      value={constitution} 
                      onChange={event => setConstitution(parseInt(event.target.value))}
                    />
                    <Form.Text style={{ margin: "0" }}>{constitutionModificator < 0 ? `${constitutionModificator}` : `+${constitutionModificator}`}</Form.Text>
                  </FormGroup>
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Интеллект
                    </Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto" , height: "70px", textAlign: "center"}}
                      value={intelligence} 
                      onChange={event => setIntelligence(parseInt(event.target.value))}
                    />
                    <Form.Text style={{ margin: "0" }}>{intelligenceModificator < 0 ? `${intelligenceModificator}` : `+${intelligenceModificator}`}</Form.Text>
                  </FormGroup>
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Мудрость
                    </Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto" , height: "70px", textAlign: "center"}}
                      value={wisdom} 
                      onChange={event => setWisdom(parseInt(event.target.value))}
                    />
                    <Form.Text style={{ margin: "0" }}>{wisdomModificator < 0 ? `${wisdomModificator}` : `+${wisdomModificator}`}</Form.Text>
                  </FormGroup>
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Харизма
                    </Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto" , height: "70px", textAlign: "center"}}
                      value={charisma} 
                      onChange={event => setCharisma(parseInt(event.target.value))}
                    />
                    <Form.Text style={{ margin: "0" }}>{charismaModificator < 0 ? `${charismaModificator}` : `+${charismaModificator}`}</Form.Text>
                  </FormGroup>
                </div>
                <div className={styles.otherStats}>
                  <div className={styles.checkboxContainer}>
                    <Form.Check type="checkbox" id="default-checkbox" label="" checked={inspiration} value={inspiration} onChange={event => setInspiration(current => !current)} />
                    <p className={styles.checkboxLabel}>Вдохновение</p>
                  </div>
                  <div className={styles.checkboxContainer}>
                    <Form.Control 
                      type="text" 
                      className={styles.masterBonus}  
                      label=""
                      value={proficiencyBonus}
                      onChange={event => {setProficiencyBonus(event.target.value)}}
                      style={{height: "45px", width: "45px", textAlign: "center"}}/>
                    <p className={styles.checkboxLabel}>Бонус мастерства</p>
                  </div>
                  <div className={styles.statsContainer}>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" checked={strengthSbActive}  label="" value={strengthSbActive} onChange={event => setStrengthSbActive(current => !current)} />
                        <input type="text" className={styles.customInput} value={strengthSb} onChange={event => setStrengthSb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Сила</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" checked={dexteritySbActive} label="" value={dexteritySbActive} onChange={event => setDexteritySbActive(current => !current)}/>
                        <input type="text" className={styles.customInput} value={dexteritySb} onChange={event => setDexteritySb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Ловкость</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" checked={constitutionSbActive} label="" value={constitutionSbActive} onChange={event => setConstitutionSbActive(current => !current)}/>
                        <input type="text" className={styles.customInput} value={constitutionSb} onChange={event => setConstitutionSb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Телосложение</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" label="" checked={intelligenceSbActive} value={intelligenceSbActive} onChange={event => setIntelligenceSbActive(current => !current)}/>
                        <input type="text" className={styles.customInput} value={intelligenceSb} onChange={event => setIntelligenceSb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Интеллект</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" label="" checked={wisdomSbActive} value={wisdomSbActive} onChange={event => setWisdomSbActive(current => !current)}/>
                        <input type="text" className={styles.customInput} value={wisdomSb} onChange={event => setWisdomSb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Мудрость</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" label="" checked={charismaSbActive} value={charismaSbActive} onChange={event => setCharismaSbActive(current => !current)}/>
                        <input type="text" className={styles.customInput} value={charismaSb} onChange={event => setCharismaSb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Харизма</span>
                    </div>
                    <p className={styles.hintWord}>Спасброски</p>
                  </div>

                  <div className={styles.statsContainer}>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          label=""
                          value={acrobaticsActive}
                          checked={acrobaticsActive}
                          onChange={() => setAcrobaticsActive(current => !current)} />
                        <input 
                          type="text" 
                          value={acrobatics}
                          onChange={event => {setAcrobatics(event.target.value)}}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Акробатика <span style={{color: "#555"}}>(Лов)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          value={athleticsActive}
                          checked={athleticsActive}
                          onChange={() => setAthleticsActive(current => !current)}
                          label="" />
                        <input 
                          type="text" 
                          value={athletics}
                          onChange={event => setAthletics(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Атлетика <span style={{color: "#555"}}>(Сил)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          value={arcanaActive}
                          checked={arcanaActive}
                          onChange={() => setArcanaActive(current => !current)}
                          label="" />
                        <input 
                          type="text" 
                          value={arcana}
                          onChange={(event) => setArcana(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Магия <span style={{color: "#555"}}>(Инт)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          value={deceptionActive}
                          checked={deceptionActive}
                          onChange={() => setDeceptionActive(current => !current)}
                          label="" />
                        <input 
                          type="text" 
                          value={deception}
                          onChange={event => setDeception(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Обман <span style={{color: "#555"}}>(Хар)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          value={historyActive}
                          checked={historyActive}
                          onChange={() => setHistoryActive(current => !current)}
                          label="" />
                        <input 
                          type="text" 
                          value={history}
                          onChange={event => setHistory(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>История <span style={{color: "#555"}}>(Инт)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          value={insightActive}
                          checked={insightActive}
                          onChange={() => setInsightActive(current => !current)}
                          label="" />
                        <input 
                          type="text"
                          value={insight}
                          onChange={event => setInsight(event.target.value)} 
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Проницательность <span style={{color: "#555"}}>(Муд)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox"
                          value={intimidationActive}
                          checked={intimidationActive}
                          onChange={() => setIntimidationActive(current => !current)} 
                          label="" />
                        <input 
                          type="text" 
                          value={intimidation}
                          onChange={event => setIntimidation(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Запугивание <span style={{color: "#555"}}>(Хар)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox"
                          value={investigationActive}
                          checked={investigationActive}
                          onChange={() => setInvestigationActive(current => !current)}  
                          label="" />
                        <input 
                          type="text"  
                          value={investigation}
                          onChange={event => setInvestigation(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Расследование <span style={{color: "#555"}}>(Инт)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox"
                          value={medicineActive}
                          checked={medicineActive}
                          onChange={() => setMedicineActive(current => !current)}  
                          label="" />
                        <input 
                          type="text" 
                          value={medicine}
                          onChange={event => setMedicine(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Медицина <span style={{color: "#555"}}>(Муд)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          value={natureActive}
                          checked={natureActive}
                          onChange={() => setNatureActive(current => !current)}  
                          label="" />
                        <input 
                          type="text" 
                          value={nature}
                          onChange={event => setNature(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Природа <span style={{color: "#555"}}>(Муд)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          value={perceptionActive}
                          checked={perceptionActive}
                          onChange={() => setPerceptionActive(current => !current)}  
                          label="" />
                        <input 
                          type="text" 
                          value={perception}
                          onChange={event => setPerception(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Восприятие <span style={{color: "#555"}}>(Муд)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox"
                          value={performanceActive}
                          checked={performanceActive}
                          onChange={() => setPerformanceActive(current => !current)}   
                          label="" />
                        <input 
                          type="text" 
                          value={performance}
                          onChange={event => setPerformance(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Выступление <span style={{color: "#555"}}>(Хар)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox"
                          value={persuasionActive}
                          checked={persuasionActive}
                          onChange={() => setPersuasionActive(current => !current)}  
                          label="" />
                        <input 
                          type="text" 
                          value={persuasion}
                          onChange={event => setPersuasion(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Убеждение <span style={{color: "#555"}}>(Хар)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          value={religionActive}
                          checked={religionActive}
                          onChange={() => setReligionActive(current => !current)}
                          label="" />
                        <input 
                          type="text" 
                          value={religion}
                          onChange={event => setReligion(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Религия <span style={{color: "#555"}}>(Инт)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check
                          type="checkbox" 
                          value={sleightOfHandActive}
                          checked={sleightOfHandActive}
                          onChange={() => setSleightOfHandActive(current => !current)}
                          label="" />
                        <input
                          type="text" 
                          value={sleightOfHand}
                          onChange={event => setSleightOfHand(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Ловкость рук <span style={{color: "#555"}}>(Лов)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check 
                          type="checkbox" 
                          value={stealthActive}
                          checked={stealthActive}
                          onChange={() => setStealthActive(current => !current)}
                          label="" />
                        <input
                          type="text" 
                          value={stealth}
                          onChange={event => setStealth(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Скрытность <span style={{color: "#555"}}>(Лов)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check
                          type="checkbox" 
                          value={survivalActive}
                          checked={survivalActive}
                          onChange={() => setSurvivalActive(current => !current)}
                          label="" />
                        <input
                          type="text" 
                          value={survival}
                          onChange={event => setSurvival(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Выживание <span style={{color: "#555"}}>(Муд)</span></span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check
                          type="checkbox" 
                          value={animHandlingActive}
                          checked={animHandlingActive}
                          onChange={() => setAnimHandlingActive(current => !current)}
                          label="" />
                        <input
                          type="text" 
                          value={animHandling}
                          onChange={event => setAnimHandling(event.target.value)}
                          className={styles.customInput} />
                        <span className={styles.checkboxLabelAlignLeft}>Обращение с животными <span style={{color: "#555"}}>(Муд)</span></span>
                    </div>
                    <p className={styles.hintWord}>Спасброски</p>
                  </div>
                </div>
              </div>

              <div className={styles.checkboxContainer + ' ' + styles.marginBlock}>
                    <Form.Control 
                      type="text" 
                      className={styles.masterBonus}  
                      label=""
                      value={passiveWisdom}
                      onChange={event => {setPassiveWisdom(event.target.value)}}
                      style={{height: "45px", width: "45px", textAlign: "center"}}/>
                    <span className={styles.checkboxLabel}>Пассивная мудрость (Восприятие)</span>
              </div>

              <div className={styles.statsContainer}>
                <Form.Group>
                  <Form.Control as="textarea" rows={6} value={otherProfsAndLanguages} onChange={event => setOtherProfsAndLanguages(event.target.value)} />
                  <p className={styles.hintWord}>Другие умения и языки</p>
                </Form.Group>
              </div>
            </Col>

            <Col lg={4}>
              <div className={styles.currentCharacterStatusTraits}>
                <div className={styles.statusTraitsRow}>
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto", height: "70px", textAlign: "center"}}
                      value={armorClass} 
                      onChange={event => setArmorClass(event.target.value)}
                    />
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Модификатор брони
                    </Form.Label>
                  </FormGroup>
                  
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto", height: "70px", textAlign: "center"}}
                      value={initiative} 
                      onChange={event => setInitiative(event.target.value)}
                    />
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Инициатива
                    </Form.Label>
                  </FormGroup>

                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto", height: "70px", textAlign: "center"}}
                      value={speed} 
                      onChange={event => setSpeed(event.target.value)}
                    />
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Скорость
                    </Form.Label>
                  </FormGroup>
                </div>

                <div className={styles.statusTraitsRow}>
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto", height: "70px", textAlign: "center"}}
                      value={hitPoints} 
                      onChange={event => setHitPoints(event.target.value)}
                    />
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      ОЗ, текущие
                    </Form.Label>
                  </FormGroup>
                  
                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto", height: "70px", textAlign: "center"}}
                      value={temporaryHitPoints} 
                      onChange={event => setTemporaryHitPoints(event.target.value)}
                    />
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      ОЗ, временные
                    </Form.Label>
                  </FormGroup>

                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto", height: "70px", textAlign: "center"}}
                      value={maxHitPoints} 
                      onChange={event => setMaxHitPoints(event.target.value)}
                    />
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      ОЗ, макс
                    </Form.Label>
                  </FormGroup>

                  <FormGroup style={{ width: "80px", textAlign: "center" }}>
                    <Form.Control
                      size="lg"
                      type="text"
                      placeholder=""
                      style={{ marginLeft: "auto", marginRight: "auto", height: "70px", textAlign: "center"}}
                      value={hitDice} 
                      onChange={event => setHitDice(event.target.value)}
                    />
                    <Form.Label style={{ margin: "0", fontSize: ".7rem" }}>
                      Кубы здоровья
                    </Form.Label>
                  </FormGroup>
                </div>

                <div className={styles.statsContainer} >
                  <div className={styles.statusTraitsRow}>
                    <div className={styles.statusTraitsColumn + ' ' + styles.maxWidth}>
                      <div className={styles.statusTraitsRow} style={{justifyContent: "space-evenly", marginTop: ".4rem", marginBottom: ".2rem"}}>
                          <FormGroup>
                            <Form.Check
                              inline
                              type='checkbox'
                              style={{margin: "0"}}
                              value={dsSuccessFirst}
                              checked={dsSuccessFirst}
                              onChange={() => setDSSuccessFirst(current => !current)}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Form.Check
                              inline
                              type="checkbox"
                              style={{margin: "0"}}
                              value={dsSuccessSecond}
                              checked={dsSuccessSecond}
                              onChange={() => setDSSuccessSecond(current => !current)}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Form.Check
                              inline
                              type="checkbox"
                              style={{margin: "0"}}
                              value={dsSuccessThird}
                              checked={dsSuccessThird}
                              onChange={() => setDSSuccessThird(current => !current)}
                            />
                          </FormGroup>
                          
                      </div>
                      <p className={styles.hintWord}>Успехи</p>
                    </div>
                    <div className={styles.statusTraitsColumn + ' ' + styles.maxWidth}>
                        <div className={styles.statusTraitsRow} style={{justifyContent: "space-evenly", marginTop: ".4rem", marginBottom: ".2rem"}}>
                            <Form.Check
                              inline
                              name="group1"
                              type='checkbox'
                              style={{margin: "0"}}
                              value={dsFailureFirst}
                              checked={dsFailureFirst}
                              onChange={() => setDSFailureFirst(current => !current)}
                            />
                            <Form.Check
                              inline
                              name="group1"
                              type="checkbox"
                              style={{margin: "0"}}
                              value={dsFailureSecond}
                              checked={dsFailureSecond}
                              onChange={() => setDSFailureSecond(current => !current)}
                            />
                            <Form.Check
                              inline
                              name="group1"
                              type="checkbox"
                              style={{margin: "0"}}
                              value={dsFailureThird}
                              checked={dsFailureThird}
                              onChange={() => setDSFailureThird(current => !current)}
                            />
                        </div>
                      <p className={styles.hintWord}>Провалы</p>
                    </div>
                  </div>
                  <p className={styles.hintWord}>Спасброски от смерти</p>
                </div>

                <div className={styles.statsContainer}>

                  <div className={styles.statusTraitsRow} style={{justifyContent: "flex-start", gap: "1rem"}}>
                    <div style={{width: "30%", margin: "auto 0"}}><span>Оружие</span></div>
                    <div style={{width: "30%", margin: "auto 0"}}><span>Урон</span></div>
                    <div style={{width: "30%", margin: "auto 0"}}><span>Тип урона</span></div>
                    <div style={{width: "10%"}}><span style={{fontSize: "1.2rem", visibility: "hidden"}}>&#9746;</span></div>

                    
                  </div>
                  { weapons.map( weapon => (
                      <div className={styles.statusTraitsRow} key={weapon.id} style={{justifyContent: "flex-start", gap: "1rem"}}>
                        <div style={{width: "30%", margin: "auto 0"}}><span className={styles.greyBackground}>{weapon.name}</span></div>
                        <div style={{width: "30%", margin: "auto 0"}}><span className={styles.greyBackground}>{weapon.damage}</span></div>
                        <div style={{width: "30%", margin: "auto 0"}}><span className={styles.greyBackground}>{weapon.type_of_damage}</span></div>
                        <div style={{width: "10%"}}><span style={{fontSize: "1.2rem"}} className={styles.pointer} onClick={() => deleteWeapon(weapon.id)}>&#9746;</span></div>
                      </div>
                    ) ) }

                    <span className={styles.pointer + ' ' + styles.addButton} onClick={() => setIsWeaponSearchOpen(current => !current)}>Добавить оружие</span>
                    { isWeaponSearchOpen ? 
                      <div className={styles.popupSelector} style={{padding: ".5rem"}}>

                        <span style={{fontSize: "1.2rem"}} className={styles.pointer + ' ' + styles.absoluteRigth} onClick={() => setIsWeaponSearchOpen(current => !current)}>&#9746;</span>
                          <div className={styles.statusTraitsColumn} style={{gap: ".5rem"}}>
                          <div className={styles.statusTraitsRow} style={{justifyContent: "flex-start", gap: "1rem", width: "470px"}}>
                            <div style={{width: "30%", margin: "auto 0"}}><span>оружие</span></div>
                            <div style={{width: "30%", margin: "auto 0"}}><span>урон</span></div>
                            <div style={{width: "30%", margin: "auto 0"}}><span>Тип урона</span></div>
                            {/* <div style={{width: "10%"}}><span style={{fontSize: "1.2rem"}} className={styles.pointer} onClick={() => deleteWeapon(weapon.id)}>&#9746;</span></div> */}
                            
                        </div>
                        { globalWeapon.map( weapon => (
                              <div className={styles.statusTraitsRow + ' ' + styles.pointer} style={{justifyContent: "flex-start", gap: "1rem"}} key={weapon.id} onClick={() => addWeapon(weapon)}>
                                <div style={{width: "30%", margin: "auto 0"}}><span className={styles.greyBackground}>{weapon.name}</span></div>
                                <div style={{width: "30%", margin: "auto 0"}}><span className={styles.greyBackground}>{weapon.damage}</span></div>
                                <div style={{width: "30%", margin: "auto 0"}}><span className={styles.greyBackground}>{weapon.type_of_damage}</span></div>
                                {/* <div style={{width: "10%"}}><span style={{fontSize: "1.2rem"}} className={styles.pointer} onClick={() => deleteWeapon(weapon.id)}>&#9746;</span></div> */}
                              </div>
                            ) ) }
                        </div>
                      </div> : null
                    }
                  <Form.Group>
                    <Form.Control as="textarea" rows={6} value={attacksAndSpellcasting} onChange={event => setAttacksAndSpellcasting(event.target.value)} />
                    <p className={styles.hintWord}>Атаки и заклинания</p>
                  </Form.Group>
                </div>

                <div className={styles.statusTraitsRow} style={{margin: "1rem 0"}}>
                  <div className={styles.statusTraitsColumn}>
                    <input 
                      type="text" 
                      value={goldCoins}
                      onChange={event => {setGoldCoins(event.target.value)}}
                      className={styles.customInput} 
                      style={{fontSize: "16px"}}
                      />
                    <p className={styles.hintWord} style={{fontSize: "16px"}}>ЗМ</p>
                  </div>
                  <div className={styles.statusTraitsColumn}>
                    <input 
                      type="text" 
                      value={silverCoins}
                      onChange={event => {setSilverCoins(event.target.value)}}
                      className={styles.customInput} 
                      style={{fontSize: "16px"}}
                      />
                    <p className={styles.hintWord} style={{fontSize: "16px"}}>СМ</p>
                  </div>
                  <div className={styles.statusTraitsColumn}>
                    <input 
                      type="text" 
                      value={copperCoins}
                      onChange={event => {setCopperCoins(event.target.value)}}
                      className={styles.customInput} 
                      style={{fontSize: "16px"}}
                      />
                    <p className={styles.hintWord} style={{fontSize: "16px"}}>ММ</p>
                  </div>
                  <div className={styles.statusTraitsColumn}>
                    <input 
                      type="text" 
                      value={electronCoins}
                      onChange={event => {setElectronCoins(event.target.value)}}
                      className={styles.customInput} 
                      style={{fontSize: "16px"}}
                      />
                    <p className={styles.hintWord} style={{fontSize: "16px"}}>ЭМ</p>
                  </div>
                  <div className={styles.statusTraitsColumn}>
                    <input 
                      type="text" 
                      value={platinumCoins}
                      onChange={event => {setPlatinumCoins(event.target.value)}}
                      className={styles.customInput} 
                      style={{fontSize: "16px"}}
                      />
                    <p className={styles.hintWord} style={{fontSize: "16px"}}>ПМ</p>
                  </div>
                </div>

                <div className={styles.statsContainer}>
                  <Form.Group>
                    <Form.Control as="textarea" rows={12} value={equipment} onChange={event => setEquipment(event.target.value)} />
                    <p className={styles.hintWord}>Снаряжение</p>
                  </Form.Group>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <Image src={heroImg ? heroImg : defaultPicture} className={styles.heroImage} width="250" height="200" alt={ name }/>
              <FormGroup>
                <Form.Control
                  type="file"
                  name="file"
                  style={{marginBottom: "1rem"}}
                  onChange={({target}) => {
                    if(target.files) {
                      const file = target.files[0];
                      // setHeroImg(URL.createObjectURL(file));
                      setSelectedFile(file)
                      // updateImage()
                    }
                  }}
                  // isInvalid={!!errors.file}
                />
              </FormGroup>
            
              <div className={styles.statsContainer}>
                <Form.Group>
                  <Form.Control as="textarea" rows={2} value={personalityTraits} onChange={event => setPersonalityTraits(event.target.value)} />
                  <p className={styles.hintWord}>Персональные черты</p>
                </Form.Group>
              </div>

              <div className={styles.statsContainer}>
                <Form.Group>
                  <Form.Control as="textarea" rows={2} value={ideals} onChange={event => setIdeals(event.target.value)} />
                  <p className={styles.hintWord}>Идеалы</p>
                </Form.Group>
              </div>

              <div className={styles.statsContainer}>
                <Form.Group>
                  <Form.Control as="textarea" rows={2} value={bonds} onChange={event => setBonds(event.target.value)} />
                  <p className={styles.hintWord}>Привязанности</p>
                </Form.Group>
              </div>

              <div className={styles.statsContainer}>
                <Form.Group>
                  <Form.Control as="textarea" rows={2} value={flaws} onChange={event => setFlaws(event.target.value)} />
                  <p className={styles.hintWord}>Пороки</p>
                </Form.Group>
              </div>

              <div className={styles.statsContainer}>
                <Form.Group>
                  <Form.Control as="textarea" rows={12} value={featuresAndTraits} onChange={event => setFeaturesAndTraits(event.target.value)} />
                  <p className={styles.hintWord}>Особенности и способности</p>
                </Form.Group>
              </div>
            </Col>
          </Row>
          { query.id ? null :
          <Button className={styles.btn} onClick={goClicked}>Создать</Button>
          }
        </Form>

        
        
      </Container>
    </>
  );
}

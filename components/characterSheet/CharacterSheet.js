import { useEffect, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "./styles.module.css";

export default function CharacterSheet() {
  const [name, setName] = useState("");
  const [heroClass, setHeroClass] = useState("");
  const [level, setLevel] = useState(1);
  const [background, setBackground] = useState("");
  const [race, setRace] = useState("");
  const [alignment, setalignment] = useState("");
  const [experience, setExperience] = useState(0);

  const [strength, setStrength] = useState(10);
  const [strengthModificator, setStrengthModificator] = useState(0);
  const [dexterity, setDexterity] = useState(10);
  const [dexterityModificator, setDexterityModificator] = useState(0);
  const [constitution, setConstitution] = useState(10);
  const [constitutionModificator, setConstitutionModificator] = useState(0);
  const [intelligence, setIntelligence] = useState(10);
  const [intelligenceModificator, setIntelligenceModificator] = useState(0);
  const [wisdom, setWisdom] = useState(10);
  const [wisdomModificator, setWisdomModificator] = useState(0);
  const [charisma, setCharisma] = useState(10);
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

  const goClicked = (event) => {
    event.preventDefault();
    console.log();
    console.log();
    console.log(name);
    console.log(heroClass);
    console.log(level);
    console.log(background);
    console.log(race);
    console.log(alignment);
    console.log(experience);
    console.log();
    console.log();
  };

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
      <Container>
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
                      onChange={event => setStrength(event.target.value)}
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
                      onChange={event => setDexterity(event.target.value)}
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
                      onChange={event => setConstitution(event.target.value)}
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
                      onChange={event => setIntelligence(event.target.value)}
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
                      onChange={event => setWisdom(event.target.value)}
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
                      onChange={event => setCharisma(event.target.value)}
                    />
                    <Form.Text style={{ margin: "0" }}>{charismaModificator < 0 ? `${charismaModificator}` : `+${charismaModificator}`}</Form.Text>
                  </FormGroup>
                </div>
                <div className={styles.otherStats}>
                  <div className={styles.checkboxContainer}>
                    <Form.Check type="checkbox" id="default-checkbox" label="" value={inspiration} onChange={event => setInspiration(current => !current)} />
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
                        <Form.Check type="checkbox"  label="" value={strengthSbActive} onChange={event => setStrengthSbActive(current => !current)} />
                        <input type="text" className={styles.customInput} value={strengthSb} onChange={event => setStrengthSb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Сила</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" label="" value={dexteritySbActive} onChange={event => setDexteritySbActive(current => !current)}/>
                        <input type="text" className={styles.customInput} value={dexteritySb} onChange={event => setDexteritySb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Ловкость</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" label="" value={constitutionSbActive} onChange={event => setConstitutionSbActive(current => !current)}/>
                        <input type="text" className={styles.customInput} value={constitutionSb} onChange={event => setConstitutionSb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Телосложение</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" label="" value={intelligenceSbActive} onChange={event => setIntelligenceSbActive(current => !current)}/>
                        <input type="text" className={styles.customInput} value={intelligenceSb} onChange={event => setIntelligenceSb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Интеллект</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" label="" value={wisdomSbActive} onChange={event => setWisdomSbActive(current => !current)}/>
                        <input type="text" className={styles.customInput} value={wisdomSb} onChange={event => setWisdomSb(event.target.value)}/>
                        <span className={styles.checkboxLabelAlignLeft}>Мудрость</span>
                    </div>
                    <div className={styles.statsRow}>
                        <Form.Check type="checkbox" label="" value={charismaSbActive} onChange={event => setCharismaSbActive(current => !current)}/>
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
          </Row>
          <Button onClick={goClicked}>GO</Button>
        </Form>
      </Container>
    </>
  );
}

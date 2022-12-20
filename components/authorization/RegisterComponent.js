import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
const axios = require("axios").default
import globals from "../../globals"
import Router from "next/router";

export default function LoginComponent() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passConfirm, setPassConfirm] = useState('')
  
  const onSubmitClicked = (event) => {
    event.preventDefault()
    if (checkPass()) {
      let bodyFormData = new FormData()
      bodyFormData.append('username', username)
      bodyFormData.append('password', password)
      axios.post(
        globals.serverDomain + '/auth/users/',
        bodyFormData
      ).then(response => {
        alert(`Вы успешно зарегистрировались, ${response.data.username}`)
        Router.push('/login')
      }).catch(error => {
        console.log(error)
        alert('Неверный логин или пароль')
      })
    } else {
      alert("Пароли не совпадают")
    }
    
  }

  const checkPass = () => {
    return password === passConfirm;
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Form style={{ width: "500px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Логин</Form.Label>
              <Form.Control value={username} onChange={event => setUsername(event.target.value)} type="username" placeholder="Логин" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Пароль" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Подтверждение пароля</Form.Label>
              <Form.Control value={passConfirm} onChange={event => setPassConfirm(event.target.value)} type="password" placeholder="Подтверждение пароля" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit" onClick={onSubmitClicked}>
              Зарегистрироваться
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}

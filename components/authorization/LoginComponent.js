import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
const axios = require("axios").default
import globals from "../../globals"
import Router from 'next/router'
import Toast from '../Toast'

export default function LoginComponent() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  

  const onSubmitClicked = (event) => {
    event.preventDefault()
    let bodyFormData = new FormData()
    bodyFormData.append('username', username)
    bodyFormData.append('password', password)
    axios.post(
      globals.serverDomain + '/auth/token/login',
      bodyFormData
    ).then(response => {
      const token = {
        token: response.data.auth_token
      }
      localStorage.setItem('token', JSON.stringify(token))
      const toast = new Toast()
      toast.success("Добро пожаловать в Таверну!")
      // alert('Вы успешно вошли в систему!')
      Router.push('/');
    }).catch(error => {
      console.log(error)
      const toast = new Toast()
      toast.error("Неверный логин или пароль")
      // alert('Неверный логин или пароль')
    })
  }

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Form style={{ width: "500px" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Логин</Form.Label>
              <Form.Control onChange={event => setUsername(event.target.value)} value={username} type="username" placeholder="Логин" />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control onChange={event => setPassword(event.target.value)} value={password} type="password" placeholder="Пароль" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" type="submit" onClick={onSubmitClicked}>
              Войти
            </Button>
          </Form>
        </Row>
      </Container>
    </>
  );
}

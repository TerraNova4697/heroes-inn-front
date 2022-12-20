import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'
import { useEffect, useState } from 'react';
const axios = require('axios').default;


export function NavigationBar({ loggedIn }) {
    const [username, setUsername] = useState('');

    const onLoginClicked = () => {
        Router.push('/login')
    }

    const onRegisterClicked = () => {
        Router.push('/register')
    }
    
    useEffect(() => {
        if (loggedIn) {
            let token = JSON.parse(localStorage.getItem('token')).token
            console.log(token)
            axios.get('http://127.0.0.1:8000/auth/users/me/', {
                headers: {
                    Authorization: `Token ${token}`
                }
            }).then(response => {
                setUsername(response.data.username)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }, [loggedIn])

    return (
        <>
            <nav className="navbar navbar-dark bg-dark" >
                <div className="container">
                    <a className="navbar-brand" href="#">
                    {/* <Image src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></Image> */}
                    Bootstrap
                    </a>

                        { loggedIn ? 
                        <>
                        <span style={{color: "white"}}>Привет, {username}</span>
                        <ul className="nav justify-content-end">
                        
                        <li className="nav-item">
                            <Link className="btn btn-outline-light" href="#">Выйти</Link>
                        </li>
                        </ul>
                        </>
                        :
                        <>
                        <ul className="nav justify-content-end">

                        <li className="nav-item">
                            <button className="btn btn-outline-light" onClick={onLoginClicked}>Войти</button>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-light" onClick={onRegisterClicked}>Зарегистрироваться</button>
                        </li>
                        </ul>
                        </>}
                        
                </div>
            </nav>  
        </>
       
    )
    
}
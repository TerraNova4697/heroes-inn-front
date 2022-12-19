import { NavigationBar } from "./NavigationBar";
import { useEffect, useState } from 'react';



export function MainLayout({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Если токен есть, то ставим isLoggedIn = true
        if (localStorage.getItem('token') !== null) {
            setIsLoggedIn(true)

        // Если токена нет, то остаемся не залогинены
        } else {
            setIsLoggedIn(false)
        }
    }, [])


     return (
        <>
            <main>
                <NavigationBar loggedIn={isLoggedIn}></NavigationBar>
                { children }
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
            </main>          
        </>
     )
}
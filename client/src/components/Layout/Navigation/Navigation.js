import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'
import './Navigation.css'

const authService = new AuthService()

export default function (props) {

    const logout = () => {
        authService.logout()
            .then(() => props.storeUser(null))
            .catch(err => console.error(err))
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='/telefonos'>Telefonos</Nav.Link >
                    </Nav>

                    {props.loggedUser &&
                        <>
                            <span className='logout' onClick={logout}>Logout</span>
                            <Nav.Link href="/perfil"> Mi perfil</Nav.Link>
                        </>
                    }

                    {!props.loggedUser &&
                        <>
                            <Nav>
                                <Nav.Link href='/registro'>Registro</Nav.Link >
                            </Nav>
                            <Nav>
                                <Nav.Link href='/iniciar-sesion'>Iniciar sesión</Nav.Link >
                            </Nav>
                        </>
                    }
                </Container>
            </Navbar>
        </div>
    )
}

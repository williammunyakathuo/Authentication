import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useLogoutMutation } from "../slices/usersApi";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";

function Header() {
    const { userInfo } = useSelector((state) => state.auth)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async() =>{
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            navigate('/')
            toast.succes('You are logged out now')
        } catch (err) {
            toast.error(err)
        }
    }
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
                <Container>
                    <LinkContainer to='/' >
                        <Navbar.Brand href="/">MERN App</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {userInfo ? (
                                <>
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>
                                </NavDropdown>
                                </>
                            ): (
                                <>
                                <LinkContainer to = '/login'>
                                <Nav.Link >
                            <FaSignInAlt /> Sign In
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/register'>
                        <Nav.Link >
                            <FaSignOutAlt /> Sign Up
                        </Nav.Link>
                    </LinkContainer>
                </>
                            )}


            </Nav>
        </Navbar.Collapse>
                </Container >
            </Navbar >
        </header >
    )
}

export default Header
import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftNav from '../LeftNav/LeftNav';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext/UserContext';
import { Button } from 'react-bootstrap';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('You are successfully logout!!')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand ><Link to='/'>News Hub</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link><Link to={'/login'}>Login</Link> </Nav.Link>
                            <Nav.Link><Link to={'/register'}>Register</Link> </Nav.Link>
                        </Nav>
                        {
                            user?.displayName &&
                            <Nav>
                                <Nav.Link>
                                    Welcome, {user?.displayName}
                                </Nav.Link>
                                <Button variant="outline-secondary" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </Nav>
                        }
                        <div className='d-lg-none'>
                            <LeftNav></LeftNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
}
export default Header;
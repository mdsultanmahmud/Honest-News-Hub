import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LeftNav from '../LeftNav/LeftNav';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/UserContext/UserContext';
import { Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import { FaUserAlt } from 'react-icons/fa';
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
                            (user?.displayName || user?.email) &&
                            <Nav>
                                <Nav.Link>
                                    Welcome, {user?.displayName ? user?.displayName : user?.email}
                                </Nav.Link>

                                <>
                                    {
                                        user?.photoURL ?
                                            <Image
                                                roundedCircle
                                                src={user?.photoURL}
                                                style={{ height: '40px', width: '40px' }}
                                                ></Image>
                                            :
                                            <FaUserAlt
                                            style={{ height: '40px', width: '40px',borderRadius:'50%' }}
                                            ></FaUserAlt>
                                    }
                                </>
                                <Button className='ms-2' variant="outline-secondary" onClick={handleLogout}>
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

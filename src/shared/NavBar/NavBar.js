import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const NavBar = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    // console.log(user);
    return (
        <div>
            <Navbar expand="lg" variant='dark' style={{ backgroundColor: '#a1539c', color: 'light' }} className='px-5'>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">V-LEAF GYM euip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/inventory">Products</Nav.Link>
                            {
                                user && <Nav.Link as={Link} to="/my-items">My Items</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/category">Category</Nav.Link>
                        </Nav>
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            {
                                user ?
                                    // <button style={{ backgroundColor: 'transparent', color: 'white', border: '0' }} onClick={handleSignOut}>Log out</button>
                                    <NavDropdown title={user.displayName.split(' ')[0]} id="collasible-nav-dropdown">
                                        <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleSignOut} href="#action/3.4">
                                            Logout
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default NavBar;
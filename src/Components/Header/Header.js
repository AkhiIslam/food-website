import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const { user, logOut, addService } = useAuth();
    return (

        <>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Food-Delivery</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className="my-2" as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className="my-2" as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link className="my-2" as={Link} to="/about">About Us</Nav.Link>
                        {
                            user.email ? <Nav.Link as={Link} to="/manageOrders">Manage Orders</Nav.Link> :
                                <Nav.Link as={Link} to="/manageOrders"></Nav.Link>
                        }
                        <Nav.Link as={Link} to="/orders">My Orders</Nav.Link>

                        {
                            user.email ? <Nav.Link as={Link} to="/addService">Add Service</Nav.Link> :
                                <Nav.Link as={Link} to="/addService"></Nav.Link>
                        }

                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>

                        {
                            user.email ? <Button className="me-1 mt-1" onClick={logOut} variant="light">Logout</Button> :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }

                        <Navbar.Text>
                            <a as={Link} to="/login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>


                </Container>
            </Navbar>

        </>


    );
};

export default Header;
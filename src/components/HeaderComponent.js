import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Mount </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col">
                                <h1>Rose </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col">
                                <h1>Bed &amp; Breakfast</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                                <NavLink className="nav-link" to="/#">
                                    <i className="fa fa-usd fa-lg" /> Rooms &amp; Rates
                                </NavLink>
                                <NavLink className="nav-link" to="/#">
                                    <i className="fa fa-umbrella fa-lg" /> Recreation
                                </NavLink>
                                <NavLink className="nav-link" to="/#">
                                    <i className="fa fa-map-signs fa-lg" /> Getting Here
                                </NavLink>
                            </Nav>
                        </Collapse>
                        <Button onClick={this.toggleModal} className="warning"> Contact Us </Button>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Drop Us a Line</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup row>
                                <Input type="text" name="name" id="name" placeholder="Your name"></Input>
                            </FormGroup>
                            <FormGroup row>
                                <Input type="email" name="email" id="email" placeholder="email@example.com"></Input>
                            </FormGroup>
                            <FormGroup row>
                                <Input type="phone" name="phone" id="phone" placeholder="Your phone number (optional)"></Input>
                            </FormGroup>
                            <FormGroup row>
                                <textarea name="message" id="message" placeholder="Your message"></textarea>
                            </FormGroup>
                            <FormGroup row>
                                <Button color="secondary" data-dismiss="modal">
                                    Cancel
                                </Button>
                                <Button type="submit" color="primary">
                                    Send
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
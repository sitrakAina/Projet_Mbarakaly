import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";

class Login extends Component {
    state = {
        collapseID: ""
    };
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return (
            <div className="container-fluid">
                <MDBNavbar id="Totalhome"
                    style={{ Bacgroundcolor: "blue" }}
                    dark
                    expand="md"
                    scrolling
                >
                    <MDBNavbarBrand>
                        <img src="images/logo.png" alt="logoMbarakaly" id="imagelogo" />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        onClick={this.toggleCollapse("navbarCollapse")}
                    />
                    <MDBCollapse
                        id="navbarCollapse"
                        isOpen={this.state.collapseID}
                        navbar
                    >

                        <MDBNavbarNav left>
                            <MDBNavItem active>
                                <MDBNavLink to="/" className="accueil">A propos</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active>
                                <MDBNavLink to="/" className="accueil">Contact</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>

                        <MDBNavbarNav right>
                            <MDBNavItem active>
                                <MDBNavLink to="/login" className="accueil">Se connecter</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem active>
                                <MDBNavLink exact to="/" className="accueil">S'inscrire</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>

                </MDBNavbar>

                <div className="row">
                    <div className="col-md-6" id="slider">
                        <center>
                            <section className="wrapper">
                                <h3 className="sentence" id="h3mbarakaly"> MBARAKALY e!!
                                <div className="slidingVertical">
                                        <span>SALAMA ve ??</span>
                                        <span>In malaza ani e?? </span>
                                        <span>Ndao mba hanalazy e!!</span>
                                    </div>
                                </h3>
                            </section>
                            <MDBCarousel id="slide"
                                activeItem={1}
                                length={4}
                                showControls={true}
                                showIndicators={true}
                                className="z-depth-1"
                            >
                                <MDBCarouselInner>
                                    <MDBCarouselItem itemId="1">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src="../images/1.jpg"
                                                alt="First slide" id="slide"
                                            />

                                            <MDBMask overlay="black-light" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive " id="h3slide">MBARAKALY</h3>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="2">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src="../images/2.jpg"
                                                alt="Second slide" id="slide"
                                            />
                                            <MDBMask overlay="black-strong" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive " id="h3slide">MBARAKALY</h3>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="3">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src="../images/3.jpg"
                                                alt="Third slide" id="slide"
                                            />
                                            <MDBMask overlay="black-slight" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive " id="h3slide">MBARAKALY</h3>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                    <MDBCarouselItem itemId="4">
                                        <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src="../images/5.jpg"
                                                alt="Mattonit's item" id="slide"
                                            />
                                            <MDBMask overlay="black-light" />
                                        </MDBView>
                                        <MDBCarouselCaption>
                                            <h3 className="h3-responsive " id="h3slide">MBARAKALY</h3>
                                        </MDBCarouselCaption>
                                    </MDBCarouselItem>
                                </MDBCarouselInner>
                            </MDBCarousel>
                        </center>

                    </div>
                    <div className="col-md-6">
                        <div id="register">
                            <section id="inner-wrapper" className="login">
                                <h2 id="h2inscrire">CONNEXION</h2>
                                <article>
                                    <form>
                                        <div className="form-group">
                                        <label id="label1">Nom d'utilisateur :</label><br/>
                                            <div className="input-group">
                                                <input id="input1" type="text" className="form-control"  />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                        <label id="label1">Mot de passe :</label><br/>
                                            <div className="input-group">
                                                <input id="input1" type="password" className="form-control"  />
                                            </div>
                                        </div>
                
                                        <button type="submit" className="btn btn-success btn-block">Se connecter</button>
                                    </form>
                                </article>
                            </section></div>
                    </div>
                </div>
                <footer>
                    <div className="row">
                    <div className="col-md-6">
                            <p>Copyright@mbarakaly 2019 | Team</p>
                    </div>
                    <div className="col-md-6">
                         <p>Adresse : Immeuble Faravohitra , e-mail : mbarakaly@gmail.com</p>
                    </div>
                    </div>
                </footer>
            </div>
        )

    }

};

export default Login;

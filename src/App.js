import React, { Component } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/journal/bootstrap.css";

import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

import WeatherDisplay from "./WeatherDisplay";
import Clock from "./Clock";

const PLACES = [
    { name: "Полтава", zip: "696643" },
    { name: "Харків", zip: "706483" },
    { name: "Диканька", zip: "710041" },
    { name: "Машівка", zip: "701637" }
];

class App extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Пріложенько погоди от Влада :)
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>
                <Grid>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <h3>Вибери свій город:</h3>
                            <Nav
                                bsStyle="pills"
                                stacked
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({ activePlace: index });
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <NavItem key={index} eventKey={index} className="city-name">{place.name}</NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={4} sm={4} xs={12}>
                            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
                        </Col>
                        <Col md={2}>
                            <Clock/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default App;

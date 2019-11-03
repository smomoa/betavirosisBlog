/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

// core components

function SectionDownload() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col className="text-center" lg="8" md="12">
              <div className="title">
                <h2>¡Sígueme en mis redes sociales!</h2>
              </div>
            </Col>
            <Col className="text-center" lg="8" md="12">
              <Button
                className="twitter-sharrre btn-round"
                color="twitter-bg"
                href="#pablo"
                id="tooltip3373767"
                onClick={e => e.preventDefault()}
                title='Tweet!'
              >
                <i className="fa fa-twitter" /> Twitter
              </Button>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="google-bg"
                href="#pablo"
                id="tooltip840791273"
                onClick={e => e.preventDefault()}
                title='Instagram'
              >
                <i className="fa fa-instagram" /> Instagram
              </Button>
              <Button
                className="facebook-sharrre btn-round ml-2"
                color="facebook-bg"
                href="#pablo"
                id="tooltip68961360"
                onClick={e => e.preventDefault()}
                title='Facebook'
              >
                <i className="fa fa-facebook-square" /> Facebook
              </Button>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="danger"
                href="#pablo"
                id="tooltip840791273"
                onClick={e => e.preventDefault()}
                title='Pinterest'
              >
                <i className="fa fa-pinterest" /> Pinterest
              </Button>
              <Button
                className="linkedin-sharrre btn-round  ml-2"
                color="info"
                href="#pablo"
                id="tooltip840791273"
                onClick={e => e.preventDefault()}
                title='Linkedin'
              >
                <i className="fa fa-linkedin" /> Linkedin
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDownload;

import React, { Component, useState } from "react";
import {
    Container, Jumbotron, CardHeader, Card, CardBody,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Row, Col
} from "reactstrap";


function LoginModal(){
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button color="success" onClick={toggle}>Login</Button>
        <Modal isOpen={modal} toggle={toggle} className=''>
          <ModalHeader toggle={toggle}>Login with</ModalHeader>
          <ModalBody>
            <Button className="btn-google" block>
                Google+
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

class Login extends Component {
    render() {
        
        return (
            <div className=''>
                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col sm="3">
                            </Col>
                            <Col sm='6'>
                                <Card className="text-center">
                                    <CardHeader>
                                        Welcome to mtgConfidant
                                    </CardHeader>
                                    <CardBody>
                                        <LoginModal/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm="3">
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Login;
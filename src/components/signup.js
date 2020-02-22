import React, { Component, useState } from "react";
import {
    Container, Jumbotron, CardHeader, Card, CardBody,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    Row, Col
} from "reactstrap";


function SignupModal(){
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button color="success" onClick={toggle}>Signup</Button>
        <Modal isOpen={modal} toggle={toggle} className=''>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

class Signup extends Component {
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
                                        <SignupModal/>
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

export default Signup;
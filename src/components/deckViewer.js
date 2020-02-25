import React, { Comment} from 'react'
import { Container, Row, Col, Card, CardBody, CardHeader, Jumbotron } from 'reactstrap'

class DeckViewer extends Comment{
    render(){
        return(
            <div>

                <Jumbotron fluid>
                    <Container>
                        <Row>
                            <Col md={{size:'6', offset:'3'}}>
                               {/* deck img */}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{size:'6', offset:'3'}}>
                               {/* deck title */}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>

                <Container>
                    <Row sm='10'>
                        {/* display cards */}
                    </Row>
                    <Row sm='2'>
                        {/* deck stats */}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default DeckViewer
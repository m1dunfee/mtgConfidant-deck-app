import React, { Component } from "react";
import { Col,Container,Row } from "reactstrap";

class Footer extends Component{
    render(){
        return(
            <div className='py-5 black'>
                <Container>
                    <Row>
                        <Col sm="6">
                            data_targets
                        </Col>
                        <Col sm="6">
                            page_links
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;
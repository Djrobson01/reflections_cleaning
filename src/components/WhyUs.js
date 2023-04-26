import { Card, Row, Col } from 'react-bootstrap';
import logo from '../images/ring.png';
function WhyUs() {
    return (
        <div style={{justifyItems: "center", alignItems: "center", textAlign: "center", marginRight: "10%", marginLeft: "10%"}}>
            <p>PUT AN IMAGE HERE TO PUSH TEXT DOWN TO MORE LOOKED AT AREA</p>
            <Row>
                <Col>
                    <Card style={{borderColor: 'teal', padding: 5}}>
                        <Card.Title style={{color: 'teal'}}>Meet Jeremy!</Card.Title>
                        <Card.Body>
                            <Card.Img 
                                style={{height: '5rem', width: '5rem', float: 'left'}}
                                src={logo} 
                                alt='image of Jeremy'
                            />
                            <Card.Text>Information about Dad</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                    
                <Col>
                    <Card style={{borderColor: 'teal', padding: 5}}>
                        <Card.Title style={{color: 'teal'}}>About Us</Card.Title>
                        <Card.Body>
                            <Card.Text>
                                Being in the service industry for decades, Jeremy 
                                as a contractor, and Nikki as a property manager, 
                                we were frustrated at the neglect of not only quality 
                                service but also integrity.
                            </Card.Text>
                            <Card.Text>
                                After completing our own home renovation where we did over 
                                95% of the work ourselves, we realized how well we worked together.
                            </Card.Text>
                            <Card.Text>
                                As such, we decided to go into business together to distinctly meet 
                                the needs that this industry was desperately lacking.
                            </Card.Text>
                            <Card.Text style={{color: 'teal', fontWeight: '500'}}>Allow us to help reflect who you are!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{borderColor: 'teal', padding: 5}}>
                        <Card.Title style={{color: 'teal'}}>Meet Nikki!</Card.Title>
                            <Card.Body>
                                <Card.Img 
                                    style={{height: '5rem', width: '5rem', float: 'left'}}
                                    src={logo} 
                                    alt='image of Nikki'
                                />
                                <Card.Text>Information about Mom</Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default WhyUs;
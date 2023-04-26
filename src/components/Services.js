import { Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import logo from "../images/logo2.png"

function Services() {
    return (
        <div>
            <h1>Services</h1>
            <Row className="justify-content-md-center" style={{marginLeft: '10%', marginRight: '10%'}}>
                <Col xs={12} sm={12} md={6} >
                    <ServiceCard service="Residential" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <ServiceCard service="Commercial" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <ServiceCard service="Post Move-Outs" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <ServiceCard service="Pre Move-Ins" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <ServiceCard service="Medical Facilities" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={6}>
                    <ServiceCard service="Retail Shops" img={logo} />
                </Col>
            </Row>
        </div>
    )
}

export default Services;
import { Row, Col } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import logo from "../logo2.png";

function Services() {
    return (
        <div>
            <h1>Services</h1>
            <Row>
                <Col xs={12} sm={12} md={4} >
                    <ServiceCard service="Residential" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={4}>
                    <ServiceCard service="Commercial" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={4}>
                    <ServiceCard service="Post Move-Outs" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={4}>
                    <ServiceCard service="Pre Move-Ins" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={4}>
                    <ServiceCard service="Medical Facilities" img={logo} />
                </Col>

                <Col xs={12} sm={12} md={4}>
                    <ServiceCard service="Retail Shops" img={logo} />
                </Col>
            </Row>
        </div>
    )
}

export default Services;
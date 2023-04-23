import { Card } from 'react-bootstrap';

function ServiceCard(props) {
    return (
        <Card style={{height: 'auto', width: 'auto', margin: 5}}>
            <Card.Img variant="top" src={props.img} alt={`Cover image for ${props.service}`} style={{height: '18rem', width: '60%', justifySelf: 'center', alignSelf: 'center'}}/>
            <Card.Body>
                <Card.Title>{props.service}</Card.Title>
                <Card.Text>
                    Add text describing the service
                </Card.Text>
                <Card.Link></Card.Link>
                
            </Card.Body>
            
        </Card>
    )
}

export default ServiceCard;
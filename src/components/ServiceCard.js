import { Card } from 'react-bootstrap';

function ServiceCard(props) {
    return (
        <Card style={{height: 'auto', width: 'auto', margin: 5}} onClick={() => console.log("Click")}>
            <Card.Img variant="top" src={props.img} alt={`Cover image for ${props.service}`} style={{height: '18rem', width: '60%', justifySelf: 'center', alignSelf: 'center'}}/>
            <Card.Body>
                <Card.Title>{props.service}</Card.Title>
                <Card.Text>
                    Add text describing the service
                </Card.Text>
                <Card.Text style={{color: "teal", textAlign: "right"}}>
                    Click here to request an estimate >
                </Card.Text>
                
            </Card.Body>
            
        </Card>
    )
}

export default ServiceCard;
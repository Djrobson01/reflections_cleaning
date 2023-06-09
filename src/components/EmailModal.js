import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './EmailModal.css';

function EmailModal(props) {
    const axios = require('axios');

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    // sign up for free mail jet account and use their api key and token
    async function sendEmail(name, email, subject, message) {
        const data = JSON.stringify({
            "Messages": [{
                "From": [{"Email" : email, "Name": name}],
                "To": {"Email": "Nrobson1978@gmail.com", "Name": "Nikki Robson"},
                "Subject": subject,
                "TextPart": message
            }]
        });

        const config = {
            method: "POST",
            url: "https://api.mailjet.com/v3.1/send",
            data: data,
            headers: {"Content-Type": "application/json"},
            auth: {username: '<API KEY>', password: '<SECRET TOKEN>'}
        }

        return axios(config).then(res => console.log(res)).catch(error => console.log(error))
    }
    
    const handleClose = () => {
        console.log("modalClosed");
        reset({
            name: '',
            email: '',
            subject: '',
            number: '',
            message: ''
        });
        props.cb(!props.showModal);
    }

    const onSubmit = (data, e) => {
        console.log(data);
        if(data.number.length > 0) {
            data.message += `\n\nIn case they did not add their phone number in their email: ${data.number}`;
            console.log(data.message)
        }

        // Uncomment when registered for mailjet account
        sendEmail(data.name, data.email, data.subject, data.message);

        reset({
            name: '',
            email: '',
            subject: '',
            number: '',
            message: ''
        });
        
        props.cb(!props.showModal);
    }

    const onError = (errors, e) => {
        console.log("Errors");
    }

    return (
        <div>
            <Modal show={props.showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Send us an email</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Modal.Body>
                        <Row>
                            <Col>
                                <p style={{marginBottom: 0}}>Name: <b style={{color: 'red'}}>*</b></p>
                                <input {...register('name', {
                                    required: 'Must have a name'
                                })} placeholder='John Doe'/>
                            </Col>
                            <Col>
                                <p style={{marginBottom: 0}}>Email: <b style={{color: 'red'}}>*</b></p>
                                <input {...register('email', {
                                    required: 'must have an email',
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: 'not a valid email'
                                    }
                                })} placeholder='JohnDoe@gmail.com'/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p style={{marginBottom: 0}}>Subject: <b style={{color: 'red'}}>*</b></p>
                                <input {...register('subject', {
                                    required: 'Must have a subject to the email'
                                })} placeholder='Schedule an estimate'/>
                            </Col>
                            <Col>
                                <p style={{marginBottom: 0}}>Phone Number:</p>
                                <input {...register('number')} placeholder='123-456-7890'/>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p style={{marginBottom: 0}}>Message: <b style={{color: 'red'}}>*</b></p>
                                <textarea {...register("message", {
                                    required: 'Must include a message'
                                })} style={{width: '100%', height: 300, padding: 5, resize: 'none'}} />
                            </Col>
                        </Row>
                        
                    </Modal.Body>
                    <Modal.Footer style={{alignItems: 'center', justifyItems: 'center'}}>
                        <Button onClick={handleClose} variant='secondary'>
                            Close
                        </Button>
                        <Button type="submit" style={{backgroundColor: 'teal', color: 'white', borderColor: 'white'}}>
                            Send
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )

}

export default EmailModal;
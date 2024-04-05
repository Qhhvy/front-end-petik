import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

const Hero = () => {
  return (
    <Container className='my-5'>
        <Row>
            <Col md={7} className='text-md-left'>
                <h2 className='text-primary'>Title</h2>
                <h3 className='text-primary'>Genre :</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ipsum doloremque, iure dolore facere unde natus sapiente eveniet nemo molestiae consectetur repudiandae, ipsa ex sint.</p>
                <Button color='primary mt-5'>Primary</Button>
            </Col>
            <Col md={5}>
                <img src="https://storage.hpaindonesia.net:8215/assets/6587b6da47a0987c4bee74c8e8cf28d2/a617d6f8ebe1e67609f42eb3cda9c403.png" alt="hero" width={400}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Hero

import { Col, Container, Row } from 'react-bootstrap'

function FormContainer({children}) {
  return (
   <Container>
    <Row className='jusitify-content-md-center mt-5'>
       <Col xs={12} md={6} className='card p-5' >
        {children}
       </Col>
    </Row>
   </Container>
  )
}

export default FormContainer
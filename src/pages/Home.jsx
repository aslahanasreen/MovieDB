import React,{useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Add from '../components/Add'
import Movies from '../components/Movies'

function Home() {

    const [response,setResponse]=useState("")

  return (
    <>
    
        <div className='container-fluid'>
            <Row>
                <Col md={3} sm={12}>
                    <Add add={setResponse}/>
                </Col>
                <Col md={9} sm={12}>
                    <Movies movie={response}/>
                </Col>
            </Row>
        </div>

    </>
  )
}

export default Home
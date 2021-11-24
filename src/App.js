import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
// import 'antd/dist/antd.css';
// import { Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {
  LikeOutlined,CommentOutlined ,SmileOutlined,HomeOutlined ,NotificationOutlined ,BellOutlined ,MailOutlined ,DislikeFilled,LikeFilled,DislikeOutlined,MessageOutlined,UserOutlined,HeartOutlined 

} from '@ant-design/icons';

import { Card ,Avatar} from 'antd';
import { Image } from 'antd';
import moment from 'moment';
import Icon from '@ant-design/icons';
import {  Input} from 'antd';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';

// import Card from 'react-bootstrap/Card'

import Navbar from 'react-bootstrap/Navbar'


var oneDate = moment();
    var month = oneDate.format('DD-MMM');

function App() {

  const objects1 = [
    {
       id: 1,
       
       logo: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
   
       quotes:"Just when the caterpillar thought the world was ending, he turned into a butterfly.",
       avatar:"https://joeschmoe.io/api/v1/random",
   title:"hellow welcome here",
     },
   ]




  return (
    <div>   
    
    <Navbar bg="light" expand="lg">
  <Container fluid>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    
    
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      
        <Nav.Link href="#action1">Home <HomeOutlined /></Nav.Link>
        <Nav.Link href="#action2">Navigation <BellOutlined /></Nav.Link>
        <Nav.Link href="#action2">Message <MessageOutlined /></Nav.Link>
        
         
       
      </Nav>
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="danger">Search</Button>
      </Form>
    </Navbar.Collapse>

   
  </Container>
</Navbar>
<Container style={{backgroundColor:'red'}}>

  <Row className="justify-content-md-center">
  
<br/>
    <Col xs={8} >
    <div className="d-flex justify-content-center" >

    

    
    {
      objects1.map((data)=>{
        return(
          <>
    <Card   bordered={false} style={{ width: 500 }}>
    
      
      <span className="a" ><Avatar size={30} icon={<UserOutlined />} /></span>
     {'  '} {''} {''}
      <span className="a">{data.title}</span>
     
      
     
      <p>{data.quotes}</p>
          <Image
          width={460}
          src={data.logo}
        />
          
        <br/><br/>
            
        <Row justify="start" className="space">
       
        
          <Col span={4}>
          <HeartOutlined />350
          </Col>
          <Col span={4}><CommentOutlined />10</Col>
         
        </Row>
            
        <br/>
            <p>
            <span className="a" ><Avatar size={30} icon={<UserOutlined />} /></span>
            <span className="a" ><Input name="comment" placeholder="comment here" style={{width:400}}  /></span>
            </p>
          </Card>  
    
          </>
        )
      })
    }


    </div>
    </Col>
    
  </Row>
  </Container>

</div>

   

    
  )
  }

export default App;

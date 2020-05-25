import React from 'react';

import emailjs from 'emailjs-com';
import  {Component} from 'react';

import axios from 'axios';
import logo from './logo.svg';

import './App.css';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';

  class App extends Component {
  state = {
    tname: '',
    email: '',
    company: '',
    country: '',
	pass: '',
	cpass: '',
  }
  handleSubmit(e) {
    e.preventDefault()
    const { tname, email, company, country, pass, cpass } = this.state
    var templateParams = {
      from_name:email,
	   
      to_name: 'Sarath Sir',
	  
      
	  
      message_html: 'Team Name :' + tname + '<br>' + 'Email : ' + email + '<br>' + 'Company Name :' + company + '<br>' + 'Country :' + country +  '<br>' + 'Password :' + pass +  '<br>' + "Repeat Password :" + cpass,

     }
    emailjs.send('sdwivedi.34@gmail.com', 'template_2bD4cFO7', templateParams, 'user_ffxuIof7hosrErP1zpiiC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     this.resetForm()
 }
  resetForm() {
    this.setState({
       tname: '',     
    email: '',
    company: '',
    country: '',
	pass: '',
	cpass: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
    render(){
        const {tname, email, company, country, pass, cpass, emailStatus} = this.state;

  return (
 
    <Col className="app-body"> 
        <Tab.Container id="left-tabs-example" defaultActiveKey="link-1">
		  
            <Container className="p-0 bd-container">
				<Nav variant="tabs" defaultActiveKey="link-1">
					<Nav.Item>
						<Nav.Link eventKey="dashbaord"> <i class="fa fa-anchor" aria-hidden="true"></i> Dashboard </Nav.Link>
					</Nav.Item>
					
					<Nav.Item>
						<Nav.Link eventKey="link-1"><i class="fa fa-television" aria-hidden="true"></i> Website </Nav.Link>
					</Nav.Item>
					
					<Nav.Item>
						<Nav.Link eventKey="link-2"> <i class="fa fa-pencil"></i>  Template </Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="link-3" disabled>
						   <i class="fa fa-question" aria-hidden="true"></i> Help
						</Nav.Link>
					</Nav.Item>
					<Dropdown>
					  <Dropdown.Toggle variant="default" id="dropdown-basic">
						 <img src="profile.png" className="profile-icon"/> Shail
					  </Dropdown.Toggle>

					  <Dropdown.Menu>
						<Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					  </Dropdown.Menu>
					</Dropdown>
				</Nav>
				
				
   
                <Tab.Content className="text-tab-content">
	  
                    <Tab.Pane eventKey="link-1">
                        <Breadcrumb className="st-breadcrumb">
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">
                                   Website
                                </Breadcrumb.Item>
                            <Breadcrumb.Item active>Data</Breadcrumb.Item>
                        </Breadcrumb>
                       
					    <Col className="form-head-title justify-content-center"> 
  
                             <h2 className="d-flex">     <img src="user.png"/> &nbsp;   New Team </h2>
  
     
                        </Col>
 
                        <Form  className="bt-form" onSubmit={this.handleSubmit.bind(this)}>
						    <Form.Row>
								<Form.Group as={Col} controlId="formGridtname">
								  <Form.Label>Team Name</Form.Label>
								  <Form.Control type="text" name="tname" value={tname}  onChange={this.handleChange.bind(this, 'tname')} placeholder="Enter Team Name" />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridemail">
								  <Form.Label>Primary Email</Form.Label>
								  <Form.Control type="email" name="email" value={email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email" />
								</Form.Group>
						    </Form.Row>

 

 
                            <Form.Row>
							   <Form.Group as={Col} controlId="formGridcompany">
								  <Form.Label>Your Company Name</Form.Label>
								  <Form.Control type="text" name="company" value={company} onChange={this.handleChange.bind(this, 'company')} placeholder="Enter Your company"/>
								</Form.Group>

								<Form.Group as={Col} controlId="formGridcountry">
								  <Form.Label>Country</Form.Label>
								  <Form.Control as="select" name="country" value={country} onChange={this.handleChange.bind(this, 'country')}>
									<option>Choose...</option>
									<option>India</option>
									<option>Other</option>
								  </Form.Control>
								</Form.Group>

							   
							</Form.Row>

						    <Form.Row>
								<Form.Group as={Col} controlId="formGridpass">
								  <Form.Label>Password</Form.Label>
								  <Form.Control type="password" name="pass" value={pass} onChange={this.handleChange.bind(this, 'pass')} placeholder="Enter password" />
								</Form.Group>

								<Form.Group as={Col} controlId="formGridcpass">
								  <Form.Label>Repeat Password</Form.Label>
								  <Form.Control type="password" name="cpass" value={cpass} onChange={this.handleChange.bind(this, 'cpass')} placeholder="confirm password" />
								</Form.Group>
						    </Form.Row>

                           <Col className="text-right pr-0 form-subbtn"> 
                             
								 <Button name="submit"   variant="success" type="submit">
	  
									<i class="fa fa-plus"> </i>   Add
								</Button>
  
                            </Col>
                        </Form>
                   
				   </Tab.Pane>
					<Tab.Pane eventKey="link-2">
					  
					      <Breadcrumb className="st-breadcrumb">
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="#">
                                   Template
                                </Breadcrumb.Item>
                            <Breadcrumb.Item active>New Template</Breadcrumb.Item>
                        </Breadcrumb>
					</Tab.Pane>
                
				</Tab.Content>
  
            </Container>
        </Tab.Container>

    </Col>

  );
}

}

export default App;

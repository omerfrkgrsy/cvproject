import React, { Component } from 'react'
import {connect} from 'react-redux';
import {addUser} from '../actions/userAction';
import { Form, FormGroup, Label, Input,Row,Col,Container, Button} from 'reactstrap';
//import { Link } from 'react-router-dom';

 class UserRegister extends Component {
    
    state ={
        name:"",
        surName:"",
        password:"",
        DOB:"2020-10-10",
        POB:"",
        martialStatus:1,
        gender:true,
        address:"",
        phone:"",
        email:"",
        member:{ }
    }
    changeInput= (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    addUser =(e) => {
        e.preventDefault();
        const {name,surName,email,address,phone,password,DOB,martialStatus,POB,gender}=this.state;
        const newUser={
            name,
            surName,
            password,
            DOB,
            POB,
            martialStatus,
            gender,
            address,
            phone,
            email
        }
        this.props.addUser(newUser);
    }
    
    render() {
        const {name,surName,email,address,phone,password,DOB,martialStatus,POB,gender}=this.state;
        return (
        <Container className="pt-4 ui floating message">
            <Container fluid>
              <h1 >Kayıt Ol</h1>
              <div className="lead">
                <Form className="ui form segment" onSubmit={this.addUser.bind(this)}>
                <Row form>
                <Col md={6}>
                    <FormGroup>
                    <Label for="exampleEmail">İsim</Label>
                    <Input type="text"
                     name="name" id="name" placeholder="İsim" value={name}
                     onChange={this.changeInput} />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                    <Label for="examplePassword">Soy İsim</Label>
                    <Input type="text" name="surName" onChange={this.changeInput} value={surName} id="surName" placeholder="Soy İsim" />
                    </FormGroup>
                </Col>
                </Row>
                <FormGroup>
                <Label for="exampleAddress">Email</Label>
                <Input type="email" name="email" onChange={this.changeInput} value={email} id="email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                <Label for="exampleAddress">Doğum Yeri</Label>
                <Input type="text" name="POB" onChange={this.changeInput} value={POB} id="POB" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                <Label for="exampleAddress">Adres</Label>
                <Input type="textarea" name="address" onChange={this.changeInput} value={address} id="address"  placeholder="Adres." />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Telefon Numarası</Label>
                    <Input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={this.changeInput}
                    value={phone}
                    placeholder="with a placeholder"
                    />
                </FormGroup>
                <FormGroup>
                <Label for="exampleAddress">Parola</Label>
                <Input type="password" value={password} onChange={this.changeInput} name="password" id="password" placeholder="Parola"/>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleDate">Doğum Tarihi</Label>
                    <Input
                    type="date"
                    name="DOB"
                    id="DOB"
                    value={DOB}
                    onChange={this.changeInput}
                    placeholder="date placeholder"
                    />
                </FormGroup>
               <FormGroup>
                    <Label for="exampleSelect">Medeni Durum</Label>
                    <Input type="select" onChange={this.changeInput} value={martialStatus} name="martialStatus" id="martialStatus">
                        <option value="1">Evli</option>
                        <option value="0">Bekar</option>
                        <option value="2">Dul</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Cinsiyet</Label>
                    <Input type="select" onChange={this.changeInput} value={gender} name="gender" id="gender">
                        <option value="true">Erkek</option>
                        <option value="false">Kadın</option>
                    </Input>
                </FormGroup>
                <Button className="positive ui button" >Kayıt Ol</Button>
            </Form>
              </div>
            </Container>
          </Container>
        )
    }
}
const mapStateToProps=(state) => {
    return state;
}
export default connect(mapStateToProps,{addUser})(UserRegister);
import React,{Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import {logout} from "../actions/authAction"
//import {Link} from 'react-router-dom'
class NavbarComponent extends Component{
    render(){
    const {isLoggedIn,isAdmin}=this.props.auth;
      return isLoggedIn===true?( isAdmin===true?(
        <Navbar className="ui pointing menu" light expand="md">
        <NavbarBrand className="item">Cv Project</NavbarBrand>
        <NavbarToggler />
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
          
            <NavItem className="item">
                <Link className="nav-link" to="/Ik/JobPosting">İş İlanları</Link>
            </NavItem>
            <NavItem className="item">
                <Link className="nav-link" to='/User/Alljobapplications'>İş Başvuruları</Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <div className="ui compact menu">
            <div className="ui simple dropdown item">
            {this.props.auth.username}
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item">
                <Link className="nav-link" to="/Login"
                      onClick={()=>{
                        this.props.logout();
                      }}
                    >Çıkış Yap</Link>
                </div>
                </div>
              </div>
            </div>
            </NavbarText>
        </Collapse>
      </Navbar>
      ):
        <Navbar className="ui pointing menu"  light expand="md">
        <NavbarBrand className="item">Cv Project</NavbarBrand>
        <NavbarToggler />
        <Collapse  navbar>
          <Nav className="mr-auto" navbar>
          <NavItem className="item">
              <Link className="nav-link" to="/Home">Anasayfa</Link>
            </NavItem>
            <NavItem className="item">
              <Link className="nav-link" to='/User/Myaplications'>İş Başvurularım</Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <div className="ui compact menu">
            <div className="ui simple dropdown item">
            {this.props.auth.username}
              <i className="dropdown icon"></i>
              <div className="menu">
                <div className="item">
                <Link className="nav-link" to="/Login"
                      onClick={()=>{
                        this.props.logout();
                      }}
                    >Çıkış Yap</Link>
                </div>
                </div>
              </div>
            </div>
          
            </NavbarText>
        </Collapse>
      </Navbar>
      ):
      (    <Navbar className="ui pointing menu" color="light" light expand="md">
            <NavbarBrand className="item">Cv Project</NavbarBrand>
            <NavbarToggler />
            <Collapse  navbar>
              <Nav className="mr-auto" navbar>
                <NavItem className="item">
                <Link className="ui primary button btn-group" to="/Login">Anasayfa</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          )
  }
}
const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,{logout})(NavbarComponent);
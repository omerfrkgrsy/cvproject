import React, { Component } from 'react';
import { Container} from 'reactstrap';
import UserRegister from './userRegister';
import HomeComponent from './home';
import NavbarComponent from './Navbar';
import LanguageComponent from './languages';
import {Switch,Route,Router} from 'react-router-dom'
import LoginComponent from './Login';
import UserDetailComponent from './userDetail'
import PerfectionComponent from './perfection';
import EducationComponent from './education';
import MyApplicationsComponent from './myApplications'
import JobApplicationsComponent from './jobAplications'
import ApplicationDetailComponent from './applicationDetail';
import WorkExperienceComponent from './workExperience';
import JobPostingComponent from './jobPosting';
import history from '../helpers/history';
import {isLoggedIn} from '../actions/authAction';
import {connect} from 'react-redux';
class  App extends Component{
    
    componentDidMount(){
        this.props.isLoggedIn();
    }
    render(){
    return(
        
        
        <Router history={history}>
            <div>
            
                <Container className="pt-4">
                    
                        <NavbarComponent/>
                    
                        <Switch>
                            <Route path='/Home' exact component={HomeComponent}></Route>
                            
                            <Route path='/Register' exact component={UserRegister}></Route>
                            <Route path='/User/Languages' exact component={LanguageComponent}></Route>
                            <Route path='/User/Perfections' exact component={PerfectionComponent}></Route>
                            <Route path='/User/WorkExperiences' exact component={WorkExperienceComponent}></Route>
                            <Route path='/User/Educations' exact component={EducationComponent}></Route>
                            <Route path='/User/Detail' exact component={UserDetailComponent}></Route>
                            <Route path='/Login' exact component={LoginComponent}></Route>
                            <Route path='/IK/JobPosting' exact component={JobPostingComponent}></Route>
                            <Route path='/User/Myaplications' exact component={MyApplicationsComponent}></Route>
                            <Route path='/IK/Aplication/Detail' exact component={ApplicationDetailComponent}></Route>
                            <Route path='/User/Alljobapplications' exact component={JobApplicationsComponent}></Route>
                        </Switch>
                    
                </Container>
            
            </div>
        </Router>
      
     )
    }
}

export default connect(null,{isLoggedIn})(App);
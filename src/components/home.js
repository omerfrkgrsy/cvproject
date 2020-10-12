import React, { Component } from 'react';
import {getPostList} from '../actions/jobPostAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Container } from 'reactstrap';
import {getAuthUser} from '../actions/userAction';
 class HomeComponent extends Component {
    constructor(props){
        
        super(props);
        this.state={
            position:"",
            description:"",
            list:{}
        }
        
    }
    changeInput= (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            description:"asdasdasd"
        })
    }
    componentDidMount(){
        this.props.getPostList();
        this.props.getAuthUser();
        console.log(this.props.list);
    }
    render() {
        return (
            <Container className="pt-4 pl-5 ui floating message container">
            <div className="ui cards container pl-5">
                {this.props.list.map(jobPost =>
                <div key={jobPost.id} className="card">
                    <div className="content">
                    <div className="header">{jobPost.position}</div>
                    <div className="description">
                        {jobPost.description}
                    </div>
                    </div>
                    <Link className="ui bottom attached positive button  float-right" to={{
                    pathname: '/User/Detail',
                    state: {
                        state: { id: jobPost.id }
                    }
                    }}>
                        <i className="add icon"></i>
                        Başvuru Yap</Link> 
                </div>
                )}
            </div>
            </Container>
        )
    }
}
const mapStateToProps=(state,props) => (
    
    { list: state.jobPostingList,
     }
    );
export default connect(mapStateToProps,{getPostList,getAuthUser}) (HomeComponent);
import React, { Component } from 'react';
import {getjobApplications,finishJobApplication} from '../actions/jobApplicationAction';
import {connect} from 'react-redux';
import { Container,Button } from 'reactstrap';
class MyApplicationsComponent extends Component {
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
        this.props.getjobApplications();
        console.log(this.props.list);
    }
    render() {
        return (
            <Container className="pt-4 pl-5 ui floating message container">
            <div className="ui cards container pl-5">
                {this.props.list.map(jobPost =>
                <div key={jobPost.id} className="card">
                    <div className="content">
                    <div className="header">{jobPost.jobPosting.position}</div>
                    <div className="description">
                        {jobPost.jobPosting.description}
                    </div>
                    </div>
                    <Button className="ui bottom attached negative button" onClick={()=>{
                                                this.props.finishJobApplication(jobPost.id)
                                            }}><i className="delete icon"></i>
                                            Başvuruyu İptal Et</Button>
                   
                </div>
                )}
            </div>
            </Container>
        )
    }
}
const mapStateToProps=(state,props) => (
    
    { list: state.jobApplicationList,
     }
    );
export default connect(mapStateToProps,{finishJobApplication,getjobApplications})(MyApplicationsComponent);

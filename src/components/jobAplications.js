import React, { Component } from 'react';
import {getAllJobApplications} from '../actions/jobApplicationAction';
import {examination} from '../actions/applicationsActions';
import {connect} from 'react-redux';
import { Container,Button } from 'reactstrap';
class JobApplicationsComponent extends Component {
    constructor(props){
        
        super(props);
        this.state={
            position:"",
            description:"",
            list:{},
            list2:{}
        }
        
    }
    changeInput= (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            description:"asdasdasd"
        })
    }
    componentDidMount(){
        this.props.getAllJobApplications();
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
                    <Button className="ui bottom attached primary button" onClick={()=>{
                                                this.props.examination(jobPost.member.id)
                                            }}><i className="search icon"></i>
                                            Başvuruyu İncele</Button>
                   
                </div>
                )}
            </div>
            </Container>
        )
    }
}
const mapStateToProps=(state,props) => (
    
    { list: state.jobApplicationList,
    list2:state.selectedApplicationDetail
     }
    );
export default connect(mapStateToProps,{getAllJobApplications,examination})(JobApplicationsComponent);

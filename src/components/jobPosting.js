import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Container,Form,FormGroup,Row,Label,Input,Col,Table,Button} from 'reactstrap';
import {addJobPost,getPostList,finishJobPost} from '../actions/jobPostAction'
 class JobPostingComponent extends Component {
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
            [e.target.name]:e.target.value
        })
    }
    componentDidMount(){
        this.props.getPostList();
        console.log(this.props.list);
    }
    addJobPost =(e) =>{
        e.preventDefault();
        const {position,description}=this.state;
        const newLanguage={
            position,
            description
        }
        this.props.addJobPost(newLanguage);
        this.setState({
            position:"",
            description:"",
        });
    }
    finishJobPost
    render() {
        const {position,description} =this.state;
        return (
            <div className="ui floating message" >
                    <Form onSubmit={this.addJobPost.bind(this)}  className="ui form segment   p-3" fluid="md" >
                        <Row>
                        <Col md={6}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            
                            <Label for="exampleEmail" className="mr-sm-2">Pozisyon</Label>
                            <Input type="text" name="position" id="position" 
                            placeholder="Pozisyon" 
                            onChange={this.changeInput}
                            value={position}
                            />
                        </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                        <Col md={6}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            
                            <Label for="exampleEmail" className="mr-sm-2">Detaylı Bilgi</Label>
                            <Input type="textarea" name="description" id="description" 
                            placeholder="Bilgiler" 
                            onChange={this.changeInput}
                            value={description}
                            />
                        </FormGroup>
                        </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Button className="btn btn-success mt-4 float-right" onSubmit={this.props.addJobPost.bind(this)}>İş İlanı Ekle</Button>
                            </Col>
                        </Row>
                       
                    </Form>
                    <Container>
                        <Table className="ui celled table">
                            <thead>
                                <tr>    
                                <th>Pozisyon</th>
                                <th>Detaylar</th>
                                <th>İlanı Sonlandır</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.list.map(lang =>
                                        <tr key={lang.id}>
                                            <td>{lang.position}</td>
                                            <td>{lang.description}</td>
                                            <td><Button className="ui primary button" onClick={()=>{
                                                this.props.finishJobPost(lang.id)
                                            }} >İlanı Sonlandır</Button> </td>
                                        </tr>
                                        
                                    )}
                            </tbody>
                        </Table>
                    </Container>
            </div>
        )
    }
}
const mapStateToProps=(state,props) => (
    
    { list: state.jobPostingList,
     }
    );
export default connect(mapStateToProps,{addJobPost,getPostList,finishJobPost}) (JobPostingComponent)
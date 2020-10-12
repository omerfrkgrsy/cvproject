import React, { Component} from 'react'
import {connect} from 'react-redux';
import {getWorkExperiences,addWorkExperience,deleteWorkExperience} from '../actions/workExperienceAction';
import { Table,Form,FormGroup,Label,Input ,Button,Container,Row,Col,Progress} from 'reactstrap';
import {Link} from 'react-router-dom'
import '../dist/css/app.css';
class WorkExperienceComponent extends Component {
    constructor(props){
        
        super(props);
        this.state={
            position:"",
            startDate:"",
            finishDate:"",
            company:"",
            list:{}
        }
        
    }
    
    addWorkExperience =(e) => {
        e.preventDefault();
        const {position,startDate,finishDate,company}=this.state;
        const newCompany={
            position,startDate,finishDate,company
        }
        this.props.addWorkExperience(newCompany);
        this.setState({
            position:"",
            startDate:"",
            finishDate:"",
            company:""
        });
    }
    componentDidMount(){
        console.log(this.props.location.state.state.id);
        this.props.getWorkExperiences();
    }
    changeInput= (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {position,startDate,finishDate,company}=this.state;
        return (
            <div className="pt-4 ">
                <Container >
                    
                        <Form onSubmit={this.addWorkExperience.bind(this)} inline className="ui form center  ml-5 p-3" fluid="md" >
                        <Row>
                        <div className="field">
                        <div className="two field">
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 field">
                            
                            <Label for="exampleEmail" className="mr-sm-2">Şirket İsmi</Label>
                            <Input type="text" name="company" id="company" 
                            placeholder="Şirket" 
                            onChange={this.changeInput}
                            value={company}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 field">
                            
                            <Label for="exampleEmail" className="mr-sm-2">Çalıştığı Pozisyon</Label>
                            <Input type="text" name="position" id="position" 
                            placeholder="Pozisyon" 
                            onChange={this.changeInput}
                            value={position}
                            />
                        </FormGroup>
                        </div>
                        </div>
                        </Row>
                        <Row>
                        <div className="field">
                        <div className="two field">
                        <FormGroup className="mb-2 ml-5 mr-sm-2 mb-sm-0 field">
                            <Label for="exampleDate">Başlama Tarihi</Label>
                            <Input
                            type="date"
                            name="startDate"
                            id="startDate"
                            value={startDate}
                            onChange={this.changeInput}
                            placeholder="date placeholder"
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 ml-5 mr-sm-2 mb-sm-0 field">
                            <Label for="exampleDate">Bitiş Tarihi</Label>
                            <Input
                            type="date"
                            name="finishDate"
                            id="finishDate"
                            value={finishDate}
                            onChange={this.changeInput}
                            placeholder="date placeholder"
                            />
                        </FormGroup>
                        </div></div>
                        </Row> 
                        <Button className="btn btn-success ml-5 mt-3 float-right">Kaydet</Button>
                       
                        </Form>
                        <hr></hr>
                        <h1 className="text-center">İş Tecrübesi</h1>
                    <Row className="center ml-4">
                        <Col sm="8">
                            <Table className="ui celled table" >
                            <thead>
                            <tr>
                                <th>Şirket</th>
                                <th>Pozisyon</th>
                                <th>Başlama Tarihi</th>
                                <th>Bitiş Tarihi</th>
                                <th>Sil</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.list.map(workExperience =>
                                        <tr key={workExperience.id}>
                                            <td>{workExperience.company}</td>
                                            <td>{workExperience.position}</td>
                                            <td>{workExperience.startDate}</td>
                                            <td>{workExperience.finishDate}</td>
                                            <td><Button onClick={()=>{
                                                this.props.deleteWorkExperience(workExperience.id)
                                            }} close /></td>
                                        </tr>
                                        
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Link className="ui primary button float-right" to={{
                    pathname: '/User/Languages',
                    state: {
                        state: { id: this.props.location.state.state.id }
                    }
                    }}>Devam Et</Link>             
                <Progress className="mt-5" bar animated color="success" value="50">Tamamlanıyor...</Progress>
                 </Container>
                
            </div>
        )
    }
}
const mapStateToProps=(state,props) => (
    
    { list: state.workExperienceList }
    );
export default connect(mapStateToProps,{getWorkExperiences,addWorkExperience,deleteWorkExperience})(WorkExperienceComponent);

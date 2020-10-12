import React, { Component} from 'react'
import {connect} from 'react-redux';
import {getEducations,addEducation,deleteEducation} from '../actions/educationAction';
import {getEducationLevel} from '../actions/educationLevelAction';
import {Link} from 'react-router-dom'
import { Table,Form,FormGroup,Label,Input ,Button,Container,Row,Col,Progress} from 'reactstrap';
import '../dist/css/app.css';
class EducationComponent extends Component {
    constructor(props){
        
        super(props);
        this.state={
            schoolName:"",
            schoolSubject:"",
            startDate:"",
            finishDate:"",
            educationLevelId:"",
            list:{}
        }
        
    }
    
    addEducation =(e) => {
        e.preventDefault();
        const {schoolName,schoolSubject,startDate,finishDate,educationLevelId}=this.state;
        const newEducation={
            schoolName,schoolSubject,startDate,finishDate,educationLevelId
        }
        this.props.addEducation(newEducation);
        this.setState({
            schoolName:"",
            schoolSubject:"",
            startDate:"",
            finishDate:"",
            educationLevelId:""
        });
    }
    componentDidMount(){
        this.props.getEducations();
        this.props.getEducationLevel();
    }
    changeInput= (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {schoolName,schoolSubject,startDate,finishDate,educationLevelId}=this.state;
        return (
            <div className="pt-4 ">
                <Container >
                        <Form onSubmit={this.addEducation.bind(this)} inline className="ui form center ml-5 p-3" fluid="md" >
                        <div className="field">
                        <div className="two field">
                        <FormGroup className="field mb-2 mr-sm-2 mb-sm-0 field">
                            
                            <Label for="exampleEmail" className="mr-sm-2">Okul İsmi</Label>
                            <Input type="text" name="schoolName" id="schoolName" 
                            placeholder="Okul" 
                            onChange={this.changeInput}
                            value={schoolName}
                            />
                        </FormGroup>
                        <FormGroup className="field mb-2 mr-sm-2 mb-sm-0 field">
                            
                            <Label for="exampleEmail" className="mr-sm-2">Bölümü</Label>
                            <Input type="text" name="schoolSubject" id="schoolSubject" 
                            placeholder="Bölüm" 
                            onChange={this.changeInput}
                            value={schoolSubject}
                            />
                        </FormGroup>
                        </div>
                        </div>
                        <div className="field">
                        <div className="two field">
                        <FormGroup className="field mb-2 mr-sm-2 mb-sm-0 field">
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
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0 field">
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
                        </div>
                        </div>
                        <div className="field">
                        <div className="two field">
                        <FormGroup  className="mb-2 mr-sm-2 mb-sm-0 field" >
                            <Label for="exampleSelect" className="mr-sm-2">Eğitim Düzeyi</Label>
                            <Input type="select" name="educationLevelId" id="educationLevelId"
                            onChange={this.changeInput}
                            value={educationLevelId}
                            >
                                <option>Seçim Yapınız</option>
                                {this.props.educationLevel.map(level =>
                                    <option key={level.id} value={level.id}>{level.levelName}</option>
                                )}
                            </Input>
                        </FormGroup>
                        </div>
                        </div>
                        <Button className="btn btn-success float-right">Kaydet</Button>
                        </Form>
                        <hr></hr>
                        <h1 className="text-center">Eğitim Listesi</h1>
                    <Row className="center ml-4">
                        <Col sm="8">
                            <Table className="ui celled table">
                            <thead>
                            <tr>
                                <th>Okul İsmi</th>
                                <th>Bölümü</th>
                                <th>Düzeyi</th>
                                <th>Başlangıç Tarihi</th>
                                <th>Bitiş Tarihi</th>
                                <th>Sil</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.list.map(education =>
                                        <tr key={education.id}>
                                            <td>{education.schoolName}</td>
                                            <td>{education.schoolSubject}</td>
                                            <td>{education.educationLevel.levelName}</td>
                                            <td>{education.startDate}</td>
                                            <td>{education.finishDate}</td>
                                            <td><Button onClick={()=>{
                                                this.props.deleteEducation(education.id)
                                            }} close /></td>
                                        </tr>
                                        
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Link className="ui primary button float-right" to={{
                    pathname: '/User/WorkExperiences',
                    state: {
                        state: { id: this.props.location.state.id }
                    }
                    }}>Devam Et</Link>                 
                <Progress className="mt-5" bar animated color="success" value="25">Tamamlanıyor...</Progress>
                 </Container>
                
            </div>
        )
    }
}
const mapStateToProps=(state,props) => (
    
    { list: state.educationList,
        educationLevel:state.educationLevelList }
    );
export default connect(mapStateToProps,{getEducations,addEducation,deleteEducation,getEducationLevel})(EducationComponent);
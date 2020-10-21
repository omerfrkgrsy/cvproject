import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getExperience} from '../actions/experienceAction';
import {getPerfections,addPerfection,deletePerfection} from '../actions/perfectionAction';
import {addjobApplication} from '../actions/jobApplicationAction';
import { Table,Form,FormGroup,Label,Input ,Button,Container,Row,Col,Progress} from 'reactstrap';
import '../dist/css/app.css';
class PerfectionComponent extends Component {
    constructor(props){
        
        super(props);
        this.state={
            perfectionName:"",
            ExperienceLevelId:"",
            list:{}
        }
        
    }
    addPerfection =(e) => {
        e.preventDefault();
        const {perfectionName,ExperienceLevelId}=this.state;
        const newPerfection={
            perfectionName,
            ExperienceLevelId
        }
        this.props.addPerfection(newPerfection);
        this.setState({
            perfectionName:"",
            ExperienceLevelId:"",
        });
    }
    addjobApplication=(e) => {
        e.preventDefault();
        this.props.addjobApplication(this.props.location.state.state.id)
    }
    componentDidMount(){
        this.props.getPerfections();
        this.props.getExperience();
    }
    changeInput= (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {perfectionName,ExperienceLevelId}=this.state;
        return (
            <div className="pt-4 ">
                <Container >
                        <Form onSubmit={this.addPerfection.bind(this)} inline className="themed-container center ml-5 p-3" fluid="md" >
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            
                            <Label for="exampleEmail" className="mr-sm-2">Deneyim</Label>
                            <Input type="text" name="perfectionName" id="perfectionName" 
                            placeholder="Deneyim" 
                            onChange={this.changeInput}
                            value={perfectionName}
                            />
                        </FormGroup>
                        <FormGroup  className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleSelect" className="mr-sm-2">Deneyim Seviyesi</Label>
                            <Input type="select" name="ExperienceLevelId" id="ExperienceLevelId"
                            onChange={this.changeInput}
                            value={ExperienceLevelId}
                            >
                                <option>Seçim Yapınız</option>
                                {this.props.experienceList.map(experience =>
                                    <option key={experience.id} value={experience.id}>{experience.levelName}</option>
                                )}
                            </Input>
                        </FormGroup>
                        <Button className="btn btn-success float-right">Kaydet</Button>
                        </Form>
                        <hr></hr>
                        <h1 className="text-center">Deneyim Listesi</h1>
                    <Row className="center ml-4">
                        <Col sm="8">
                            <Table className="ui celled table" >
                            <thead>
                            <tr>
                                <th>Deneyim</th>
                                <th>Deneyim Seviyesi</th>
                                <th>Sil</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.list.map(perfection =>
                                        <tr key={perfection.id}>
                                            <td>{perfection.perfectionName}</td>
                                            <td>{perfection.experienceLevel.levelName}</td>
                                            <td><Button onClick={()=>{
                                                this.props.deletePerfection(perfection.id)
                                            }} close /></td>
                                        </tr>
                                        
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Button className="ui positive button float-right mt-1" onClick={this.addjobApplication.bind(this)}>İş Başvurusunu Tamamla</Button>                
                <Progress className="mt-5" bar animated color="success" value="99">Tamamlanıyor...</Progress>
            </Container>
                
            </div>
        )
    }
}
const mapStateToProps=(state,props) => (
    
    { list: state.perfectionList,
      experienceList:state.experienceList }
);
export default connect(mapStateToProps,{getExperience,addPerfection,deletePerfection,getPerfections,addjobApplication})(PerfectionComponent);
import React, { Component} from 'react'
import {connect} from 'react-redux';
import {getLanguages,addLanguage,deleteLanguage} from '../actions/languageAction';
import {getExperience} from '../actions/experienceAction';
import {Link} from 'react-router-dom'
import { Table,Form,FormGroup,Label,Input ,Button,Container,Row,Col,Progress} from 'reactstrap';
import '../dist/css/app.css';
class LanguageComponent extends Component {
    constructor(props){
        
        super(props);
        this.state={
            languageName:"",
            ExperienceLevelId:"",
            list:{}
        }
        
    }
    
    addLanguage =(e) => {
        e.preventDefault();
        const {languageName,ExperienceLevelId}=this.state;
        const newLanguage={
            languageName,
            ExperienceLevelId
        }
        this.props.addLanguage(newLanguage);
        this.setState({
            languageNameName:"",
            ExperienceLevelId:"",
        });
    }
    componentDidMount(){
        console.log(this.props.location.state);
        this.props.getLanguages();
        this.props.getExperience();
    }
    changeInput= (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        const {languageName,ExperienceLevelId}=this.state;
        return (
            <div className="pt-4 ">
                <Container >
                        <Form onSubmit={this.addLanguage.bind(this)} inline className="themed-container center ml-5 p-3" fluid="md" >
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            
                            <Label for="exampleEmail" className="mr-sm-2">Dil İsmi</Label>
                            <Input type="text" name="languageName" id="languageName" 
                            placeholder="Dil" 
                            onChange={this.changeInput}
                            value={languageName}
                            />
                        </FormGroup>
                        <FormGroup  className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleSelect" className="mr-sm-2">Dil Seviye</Label>
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
                        <h1 className="text-center">Dil Listesi</h1>
                    <Row className="center ml-4">
                        <Col sm="8">
                            <Table className="ui celled table">
                            <thead>
                            <tr>
                                <th>Dil</th>
                                <th>Deneyim</th>
                                <th>Sil</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.list.map(lang =>
                                        <tr key={lang.id}>
                                            <td>{lang.languageName}</td>
                                            <td>{lang.experienceLevel.levelName}</td>
                                            <td><Button onClick={()=>{
                                                this.props.deleteLanguage(lang.id)
                                            }} close /></td>
                                        </tr>
                                        
                                    )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Link className="ui primary button float-right" to={{
                    pathname: '/User/Perfections',
                    state: {
                        state: { id: this.props.location.state.state.id }
                    }
                    }}>Devam Et</Link>            
                <Progress className="mt-5" bar animated color="success" value="75">Tamamlanıyor...</Progress>
                 </Container>
                
            </div>
        )
    }
}
const mapStateToProps=(state,props) => (
    
    { list: state.languageList,
      experienceList:state.experienceList }
    );
export default connect(mapStateToProps,{getLanguages,getExperience,addLanguage,deleteLanguage})(LanguageComponent);
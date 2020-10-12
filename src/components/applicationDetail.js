import React, { Component } from 'react'
import { Container,Table } from 'reactstrap';
class ApplicationDetailComponent extends Component {
    componentDidMount(){
        console.log(this.props.location.state.list);
    }
    render() {
        const {user,educationModel,language,perfection,workExperience}=this.props.location.state.list;
        return (
            <Container className="pt-4 ui floating message container">
                <div className="ui form segment pl-5">
                   <h1>Kişisel Bilgiler</h1>
                   <hr></hr>
                   <label className="font-weight-bold">İsim ve Soy İsim: </label> <label> {user.name} {user.surname}</label>
                   <br />
                   <label className="font-weight-bold">Doğum Yeri: </label> <label> {user.pob}</label>
                   <br />
                   <label className="font-weight-bold">Doğum Tarihi: </label> <label> {user.dob}</label>
                   <br />
                   <label className="font-weight-bold">Medeni Durum: </label> <label> {user.martial?("Evli"):("Bekar")}</label>
                   <br />
                   <label className="font-weight-bold">Cinsiyet: </label> <label> {user.gender?("Erkek"):("Kadın")}</label>
                   <br />
                   <hr></hr>
                   <h1>İletişim Bilgileri</h1>
                   <hr></hr>
                   <label className="font-weight-bold">Telefon Numarası: </label> <label> {user.phone} </label>
                   <br />
                   <label className="font-weight-bold">Email </label> <label> {user.email}</label>
                   <br />
                   <label className="font-weight-bold">Adres: </label> <label> {user.address}</label>
                   <br />
                   <hr></hr>
                   <h1>Eğitim Bilgileri</h1>
                   <hr></hr>
                   <Table className="ui celled table">
                            <thead>
                            <tr>
                                <th>Okul İsmi</th>
                                <th>Bölümü</th>
                                <th>Düzeyi</th>
                                <th>Başlangıç Tarihi</th>
                                <th>Bitiş Tarihi</th>
                            </tr>
                            </thead>
                            <tbody>
                                {educationModel.map(education =>
                                        <tr key={education.id}>
                                            <td>{education.schoolName}</td>
                                            <td>{education.schoolSubject}</td>
                                            <td>{education.educationLevel.levelName}</td>
                                            <td>{education.startDate}</td>
                                            <td>{education.finishDate}</td>
                                        </tr>
                                        
                                    )}
                            </tbody>
                        </Table>
                        <hr></hr>
                        <br />
                        <h1>İş Tecrübeleri</h1>
                        <hr></hr>
                        <Table className="ui celled table" >
                            <thead>
                            <tr>
                                <th>Şirket</th>
                                <th>Pozisyon</th>
                                <th>Başlama Tarihi</th>
                                <th>Bitiş Tarihi</th>
                            </tr>
                            </thead>
                            <tbody>
                                {workExperience.map(workExperience =>
                                        <tr key={workExperience.id}>
                                            <td>{workExperience.company}</td>
                                            <td>{workExperience.position}</td>
                                            <td>{workExperience.startDate}</td>
                                            <td>{workExperience.finishDate}</td>
                                        </tr>
                                        
                                    )}
                            </tbody>
                        </Table>
                        <hr></hr>
                        <br />
                        <h1>Dil Tecrübesi</h1>
                        <hr></hr>
                        <Table className="ui celled table">
                            <thead>
                            <tr>
                                <th>Dil</th>
                                <th>Deneyim</th>
                            </tr>
                            </thead>
                            <tbody>
                                {language.map(lang =>
                                        <tr key={lang.id}>
                                            <td>{lang.languageName}</td>
                                            <td>{lang.experienceLevel.levelName}</td>
                                        </tr>
                                        
                                    )}
                            </tbody>
                        </Table>
                        <hr></hr>
                        <br />
                        <h1>Yetenekler</h1>
                        <hr></hr>
                        <Table className="ui celled table" >
                            <thead>
                            <tr>
                                <th>Deneyim</th>
                                <th>Deneyim Seviyesi</th>
                            </tr>
                            </thead>
                            <tbody>
                                {perfection.map(perfection =>
                                        <tr key={perfection.id}>
                                            <td>{perfection.perfectionName}</td>
                                            <td>{perfection.experienceLevel.levelName}</td>
                                        </tr>
                                        
                                    )}
                            </tbody>
                        </Table>
                </div>
                
            </Container>
        )
    }
}
export default ApplicationDetailComponent;

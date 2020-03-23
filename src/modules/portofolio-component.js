import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout;
const whyData = [
    {
       
        title: 'PMW UGM 2019',
        description: 'Ikut serta dalam Program Mahasiswa Wiarausaha UGM pada periode tahun 2019, sebuah program yang mendidik dan melatih  generasi muda untuk menjadi wirausahawan yang baik.'
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'PPSMB UNIVERSAL 2019',
        description: 'Koordinator bidang Operasional PPSMB Universal 2019 di Departemen Teknik Elektro Dan Informatika Sekolah Vokasi UGM'
    },
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Tech Enthusiast Day ',
        description: 'Menjadi staff bidang operasional pada acara TED(Tech Enthusiast Day) 2019'
    },
    
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                    Apa yang pernah dilakukan?
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                  Something I did past year :
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#ffa64d',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;
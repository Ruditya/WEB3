import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/landing.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; 

class LandingComponent extends Component{
    render(){
        const image1 = require(`../assets/images/tea-cup.svg`); 
        const {initialData,showModal,handleOk,handleCancel} = this.props;
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{maxWidth: '80%'}}
                                />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="title-container">
                                        <span className="text-soft-blue title-biggest bold">Namaku </span>
                                        <br/>
                                        <span className="text-soft-blue title-big bold">Ruditya Candra</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div>
                                    <div className="description-container desc-medium">
                                        Just ordinary people with ordinary life in the extraordinary mind.
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="button-section-1-container">                                
                                        <ButtonHome
                                            text="Contact Me"
                                            className='button-participate'
                                            onClick = {showModal}
                                        />
                                        <ButtonHome
                                            text="Another Information"
                                            background="white"
                                            textColor="#ffa64d"
                                            border="1px solid #ffa64d"
                                            marginLeft={16}
                                            className='button-participate'
                                        />
                                    </div>
                                </Col>
                                <Modal
                                    title="Contact"
                                    visible={initialData.visible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    className = "modal-notif"
                                    >
                                    <p className="text-notif">Find and text me at rudityacandra@mail.ugm.ac.id</p>
                                </Modal>
                            </Row>
                        </Col>  
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default LandingComponent;
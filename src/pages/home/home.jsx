import React  from 'react'
import { Card, Col, Row,Calendar,Descriptions,Carousel } from 'antd';
import moment from 'moment';
import './index.less'
import Line from './line'

export default class Home extends React.Component{

    state = {
        value: moment('2017-01-25'),
        selectedValue: moment('2017-01-25'),
    };

    onSelect = value => {
        this.setState({
            value,
            selectedValue: value,
        });
    };

    onPanelChange = value => {
        this.setState({ value });
    };


    render() {
        return(
            <div className="home">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="用户基本信息" bordered={false}>
                               <Descriptions  column={{ xxl: 2, xl: 2, lg: 2 ,md: 2, sm: 1, xs: 1 }}>
                                    <Descriptions.Item label="用户姓名">张新杰</Descriptions.Item>
                                    <Descriptions.Item label="联系电话">110120119911</Descriptions.Item>
                                    <Descriptions.Item label="年龄">20</Descriptions.Item>
                                    <Descriptions.Item label="性别">男</Descriptions.Item>
                                    <Descriptions.Item label="住址">霸图</Descriptions.Item>
                                   <Descriptions.Item label="状态">恋爱中</Descriptions.Item>
                                   <Descriptions.Item label="最佳搭档">韩文清</Descriptions.Item>
                                   <Descriptions.Item label="星座">摩羯座</Descriptions.Item>
                                   <Descriptions.Item label="角色ID">石不转</Descriptions.Item>
                                   <Descriptions.Item label="角色职业">牧师</Descriptions.Item>
                               </Descriptions>,
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="轮播图" bordered={false}>
                            <Carousel autoplay>
                                <div className="home-image">
                                    <img src="https://imglf6.lf127.net/img/cGhhb2xlMGNrdktLYWdYM3phaTVtbmdvOGxjNVB1WThBbU5jWHAwMUdhUVozTDdES0xEMkZ3PT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0" alt=""/>
                                </div>
                                <div className="home-image">
                                    <img src="https://imglf6.lf127.net/img/cGhhb2xlMGNrdktLYWdYM3phaTVtaXFLUUdPRVhQNTlNR29FamV2eTVvcEtxaWNneTNnRDNBPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0" alt=""/>
                                </div>
                                <div className="home-image">
                                    <img src="https://imglf5.lf127.net/img/cGhhb2xlMGNrdktLYWdYM3phaTVtZ252aGJTTG1Zb095MVNrTEpvM3VWVnZseE9yN3lPd09nPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0" alt=""/>
                                </div>
                                <div className="home-image">
                                    <img src="https://imglf3.lf127.net/img/cGhhb2xlMGNrdktLYWdYM3phaTVtcS9BRUd5Z2FJTmlMM1hvZDI4ZW9RYjkrelYzUFFCc2JnPT0.png?imageView&thumbnail=500x0&quality=96&stripmeta=0" alt=""/>
                                </div>
                            </Carousel>,
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="日历" bordered={false}>
                            <Calendar fullscreen={false} />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="Echarts示例" bordered={false}>
                            <Line></Line>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

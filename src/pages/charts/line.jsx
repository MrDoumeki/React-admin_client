import React  from 'react'
import ReactEcharts from 'echarts-for-react'
import { Card, Col, Row} from 'antd'
import './index.less'

export default class Line extends React.Component{

    getOption1 = () => {
        return{
            title: {
                text: '堆叠区域图'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {},
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {},
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
    }

    getOption2 = () => {
        return{
            title: {
                text: '一天用电量分布',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross'
                }
            },
            toolbox: {
                show: true,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} W'
                },
                axisPointer: {
                    snap: true
                }
            },
            visualMap: {
                show: false,
                dimension: 0,
                pieces: [{
                    lte: 6,
                    color: 'green'
                }, {
                    gt: 6,
                    lte: 8,
                    color: 'red'
                }, {
                    gt: 8,
                    lte: 14,
                    color: 'green'
                }, {
                    gt: 14,
                    lte: 17,
                    color: 'red'
                }, {
                    gt: 17,
                    color: 'green'
                }]
            },
            series: [
                {
                    name: '用电量',
                    type: 'line',
                    smooth: true,
                    data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                    markArea: {
                        data: [ [{
                            name: '早高峰',
                            xAxis: '07:30'
                        }, {
                            xAxis: '10:00'
                        }], [{
                            name: '晚高峰',
                            xAxis: '17:30'
                        }, {
                            xAxis: '21:15'
                        }] ]
                    }
                }
            ]
        }
    }

    getOption3 = () => {
        return{
            title: {
                text: '未来一周气温变化',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['最高气温', '最低气温']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °C'
                }
            },
            series: [
                {
                    name: '最高气温',
                    type: 'line',
                    data: [11, 11, 15, 13, 12, 13, 10],
                    markPoint: {
                        data: [
                            {type: 'max', name: '最大值'},
                            {type: 'min', name: '最小值'}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'}
                        ]
                    }
                },
                {
                    name: '最低气温',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    markLine: {
                        data: [
                            {type: 'average', name: '平均值'},
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: '最大值'
                                },
                                type: 'max',
                                name: '最高点'
                            }]
                        ]
                    }
                }
            ]
        }
    }

    render() {
        return(
            <div className="line">
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title="折线图1" bordered={false}>
                            <ReactEcharts option={this.getOption1()} style={{height:300}}></ReactEcharts>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title="折线图2" bordered={false}>
                            <ReactEcharts option={this.getOption2()} style={{height:300}}></ReactEcharts>
                        </Card>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title="折线图3" bordered={false}>
                            <ReactEcharts option={this.getOption3()} style={{height:300}}></ReactEcharts>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

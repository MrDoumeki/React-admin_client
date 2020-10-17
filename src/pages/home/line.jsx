import React, {Component} from 'react'
import ReactEcharts from 'echarts-for-react'

export default class Line extends Component {
    state = {
        sales: [5,20,36,10,10,20],
        inventorys: [15,30,46,20,20,40]
    }

    getOption = () => {
        const {sales,inventorys} = this.state
        return{
            title: {
                text:''
            },
            tooltip: {},
            legend: {
                data:['销量','库存']
            },
            xAxis: {
                data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name:'销量',
                type:'line',
                data:sales
            },{
                name:'库存',
                type:'line',
                data:inventorys
            }]
        }
    }

    update = () => {
        const sales = this.state.sales.map(sale => sale+1)
        this.setState({
            sales,
        })
    }

    render() {
        return (
            <div>
                <ReactEcharts option={this.getOption()} style={{height:300}}></ReactEcharts>
            </div>
        )
    }

}

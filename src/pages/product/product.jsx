import React from 'react'
import { Table, Space, Divider } from 'antd';
import './index.less'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => {
            return(
                <Space size="middle">
                    <a>删除</a>
                    <a>修改</a>
                    <a>详情</a>
                </Space>
            )
        },
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '5',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '6',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '7',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '8',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
    }
];

export default class Product extends React.Component{


    render() {
        return(
            <div className="product">
                <h3>商品列表</h3>
                <Divider />
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        )
    }
}

import React from 'react'
import {Link} from 'react-router-dom'
import { Table, Space, Card } from 'antd';
import './index.less'

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
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
                    <a href="https://www.bilibili.com/video/BV1RZ4y1P7Gc/?spm_id_from=333.788.videocard.2">删除</a>
                    <a href="https://www.bilibili.com/video/BV1RZ4y1P7Gc/?spm_id_from=333.788.videocard.2">修改</a>
                    <Link to='/admin/product-detail'>详情</Link>
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
                <Card title="商品列表">
                    <Table
                        columns={columns}
                        dataSource={data}
                    />
                </Card>
            </div>
        )
    }
}

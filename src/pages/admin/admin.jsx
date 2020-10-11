import React,{Component} from 'react'
import memoryUtils from '../../utils/memoryUtils'
import {Layout} from 'antd'
import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'
import {Route,Switch,Redirect} from 'react-router-dom'

import Category from '../category/category'
import Home from '../home/home'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'


const { Footer, Sider, Content } = Layout;

export default class Admin extends Component{
    render() {
        const user = memoryUtils.user
        if(!user || !user._id) {
            // return  <Redirect to='/login'></Redirect>
        }
        return (
            <Layout style={{height:'100%'}}>
                <Sider style={{height:'100%'}}>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin:20,backgroundColor:'#fff'}}>
                        <Switch>
                            <Route path='/admin/home' component={Home} />
                            <Route path='/admin/category' component={Category} />
                            <Route path='/admin/product' component={Product} />
                            <Route path='/admin/role' component={Role} />
                            <Route path='/admin/user' component={User} />
                            <Route path='/admin/bar' component={Bar} />
                            <Route path='/admin/line' component={Line} />
                            <Route path='/admin/pie' component={Pie} />
                            <Redirect to='/admin/home'></Redirect>
                         </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#ccc'}}>后台管理系统</Footer>
                </Layout>
            </Layout>
        )
    }
}

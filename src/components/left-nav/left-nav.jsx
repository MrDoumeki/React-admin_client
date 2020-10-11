import React, {Component} from 'react'
import {Link,withRouter} from 'react-router-dom'
import './index.less'
import {Menu} from 'antd'
import menuList from '../../config/menuConfig'

import {
    HomeOutlined,
    AccountBookOutlined

} from '@ant-design/icons'

const { SubMenu } = Menu

class LeftNav extends Component {
    // map+递归
    getMenuNodes = (menuList) =>{
        return menuList.map(item=>{
            if(!item.children) {
                return(
                    <Menu.Item key={item.key} icon={<HomeOutlined></HomeOutlined>}>
                        <Link to={item.key}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }else{
                return(
                    <SubMenu key={item.key}  title={item.title} icon={<AccountBookOutlined></AccountBookOutlined>}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

    //reduce+递归
    // getMenuNodes = (menuList) =>{
    //     return menuList.reduce((pre,item)=>{
    //        if(!item.children){
    //            pre.push((
    //                <Menu.Item key={item.key} icon={<PieChartOutlined />}>
    //                    <Link to={item.key}>
    //                        <span>{item.title}</span>
    //                    </Link>
    //                </Menu.Item>
    //            ))
    //        }else{
    //            pre.push((
    //                <SubMenu key={item.key}  title={
    //                    <span>
    //                         <span>{item.title}</span>
    //                     </span>
    //                }>
    //                    {this.getMenuNodes(item.children)}
    //                </SubMenu>
    //            ))
    //        }
    //     },[])
    // }


    render() {

        const path = this.props.location.pathname

        return(
            <div className="left-nav">
                <Link to="/" className="left-nav-header">
                    <img src="https://wx2.sinaimg.cn/mw690/001PqkCtly1gjiz1j60brj60u01400yk02.jpg" alt=""/>
                    <h1>React</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={[path]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.getMenuNodes(menuList)
                    }

                </Menu>

            </div>
        )
    }
}

// withRouter包装LeftNav返回一个新组件传入history、location、match三个属性
export default withRouter(LeftNav)

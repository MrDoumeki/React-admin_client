import React, {Component} from 'react'
import './index.less'
import {Modal} from 'antd'
import {withRouter} from 'react-router-dom'
import menuList from '../../config/menuConfig'

class Header extends Component {

    logOut = () => {
        //显示确认框
        Modal.confirm({
            title: '提示',
            content: '确定退出吗?',
            onOk: () => {
                this.props.history.push('/login')
                //删除保存的用户数据...
            },
            onCancel:() => {}
        })
    }

    getTitle = () => {
        const path = this.props.location.pathname
        let title = ''
        menuList.forEach(item => {
            if(item.key === path) {
                title = item.title
            }else if (item.children)  {
                const cItem = item.children.find(cItem => cItem.key === path)
                if(cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    }

    render() {

        const title = this.getTitle()

        return(
            <div className="header">
               <div className="header-top">
                   <span>欢迎，admin</span>
                   <a href="javascript:" onClick={this.logOut}>退出</a>
               </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>2019-5-16 10:12:36</span>
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602411622617&di=0ff31979aad01348e1731ec7a597428d&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F28%2F19%2F01300000080242123692198795581.jpg" alt="weather"/>
                        <span>晴</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)

import React, {Component} from 'react'
import './index.less'

export default class Header extends Component {
    render() {
        return(
            <div className="header">
               <div className="header-top">
                   <span>欢迎，admin</span>
                   <a href="https://ant.design/components/icon-cn/">退出</a>
               </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">
                        首页
                    </div>
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

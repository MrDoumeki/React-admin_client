// 入口Js渲染
import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import './index.less'
import store from './redux/store'
// 挂载App组件
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// let store = createStore()

ReactDOM.render(
    <App />,
     document.getElementById('root')
)

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//      document.getElementById('root')
// )

// 通过 store 订阅 state 改变的监听 ==> 一旦 store 中的 state 改变了立即调用回调函数
// store.subscribe(() => { ReactDOM.render(<App store={store}/>, document.getElementById('root')) })

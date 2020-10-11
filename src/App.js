// 应用根组件
import React from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import './index.less'

export default class App extends React.Component{
    render () {
        return (
            <BrowserRouter>
                    <Switch>
                        <Route path='/admin' component={Admin}/>
                        <Route path='/login' component={Login} />
                        <Redirect to='/login'></Redirect>
                    </Switch>
            </BrowserRouter>
        )
    }
}

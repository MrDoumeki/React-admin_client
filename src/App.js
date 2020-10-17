// 应用根组件
import React from 'react'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import './index.less'
//props的数值的类型检查
// import PropTypes from 'prop-types'
// import {increment,decrement} from './redux/actions'

export default class App extends React.Component{

    // static propTypes = {
    //     store:PropTypes.object.isRequired
    // }
    //
    // constructor (props) {
    //     super(props)
    //     this.numberRef = React.createRef()
    // }
    //
    // increment = () => {
    //     const number = this.numberRef.current.value*1
    //     this.props.store.dispatch(increment(number))
    // }



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

import React,{Component} from 'react'
import './login.less'
import { Form, Input, Button} from 'antd'

// import memoryUtils from "../../utils/memoryUtils";
// import {Redirect} from "react-router-dom";
// import {reqLogin} from '../../api'
// import memoryUtils from '../../utils/memoryUtils'
  export default class Login extends Component{


     formRef = React.createRef()

        handleSubmit = () =>{
          //阻止事件的默认行为
          const info = this.formRef.current.getFieldsValue()
          console.log(info);
        //   this.props.login()
         // reqLogin(info.username,info.password).then(res=>{
         //     console.log(res.data);
         // }).catch(error=>{
         //     console.log(error);
         // })
         this.props.history.push('/admin')
      }

        render() {
         // 如果用户已经登录自动跳转到主页
         //    const user = memoryUtils.user
         //    if(user || user._id) {
         //        return  <Redirect to='/admin'></Redirect>
         //    }

        return (
            <div className="login">
                <header className="login-header">
                    <img src="https://wx2.sinaimg.cn/mw690/001PqkCtly1gjiz1j60brj60u01400yk02.jpg" alt=""/>
                    <h1>React项目:后台管理系统</h1>
                </header>
                <section className="login-section">
                    <h2>用户登录</h2>
                    <Form className="login-form" ref={this.formRef} name="control-ref" onFinish={this.handleSubmit}>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required:true,
                                    message:'用户名不能为空'
                                }
                            ]}
                        >
                           <Input placeholder="Username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required:true,
                                    message:'密码不能为空'
                                }
                            ]}
                        >
                            <Input.Password placeholder="Password"/>
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit" className="login-form-button">
                               提交
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/* 1.高阶函数
1.1一类特别的函数
  a.接受函数类型的参数
  b.返回值是函数

1.2常见高阶函数
  a.定时器:setTime()/setInterval()
  b.Promise函数:Promise(()=>{}).then(value => {},reason =>{})
  c.数组遍历相关方法:forEach()/filter()/map()reduce()/find()/findIndex()
  d.函数对象的bind()

 2.高阶组件
 a.本质就是一个函数
 b.接收一个组件，返回一个新的组件，包装组件会向被包装组件传入特定属性
 c.作用是扩展组件的功能
 */
/*
 包装Form组件生成一个新的组件Form(Login)
 新组件会向Form传递一个强大的对象属性：form
 但是在antd4中已经不需要这么干了
* */
// const WrapLogin = Form.create()(Login)
// export default WrapLogin




// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   }
// }

// const mapDispatchToProps = {
//   login
// } 

// export default connect(mapStateToProps, mapDispatchToProps)(WrapLogin)


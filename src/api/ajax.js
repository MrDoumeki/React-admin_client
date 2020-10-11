/*
ajax异步请求封装
统一处理请求异常
* */
import axios from 'axios'


export default function ajax(url,data = {},type='GET') {

    return new Promise((resolve,reject)=>{
        let promise
        // 1.执行异步ajax请求
        if(type === 'GET'){
            promise =  axios.get(url,{
                params:data
            })
        }else {
            promise = axios.post(url,data)
        }
        // 2.如果成功调用resolve
        // 3.如果失败调用reject
        promise.then(res=>{
            resolve(res)
        }).catch(error=>{
            // reject(error)
            console.log(error);
        })

    })

}

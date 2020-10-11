// 同理可设置cookie、session
export default {
    // 保存
    saveUser(user) {
        localStorage.setItem('user_key',JSON.stringify(user))
    },
    // 读取
    getUser() {
        return JSON.parse(localStorage.getItem('user_key')||'{}')
    },
    // 删除
    removeUser(user) {
        localStorage.removeItem('user_key')
    }
}

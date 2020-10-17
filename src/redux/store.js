import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'//中间件优化
import reducers from './reducer'

//向外暴露store
export default createStore(
  reducers
  // composeWithDevTools(applyMiddleware(thunk))
)

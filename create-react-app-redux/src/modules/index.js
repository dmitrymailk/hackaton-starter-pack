import { combineReducers } from 'redux'
import counter from './counter'
import mydata from './mydata'

export default combineReducers({
  counter,
  mydata
})

import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment
  // incrementAsync,
  // decrement,
  // decrementAsync
} from '../../modules/counter'

import { my_increment } from '../../modules/mydata'

const Home = props => {
  console.log(props)
  return (
    <div>
      <h1>Home</h1>
      <p>Count: {props.count}</p>
      <p>My Count:</p>
      <ul>
        {props.mydata.myData.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <p>
        <button onClick={props.increment}>Increment</button>

        {/* <button onClick={() => props.changePage()}>
          Go to about page via redux
        </button> */}
      </p>
      <button onClick={props.my_increment}>My Increment</button>
    </div>
  )
}

// свойства, которые передаются в props
const mapStateToProps = props => ({
  count: props.counter.count,
  isIncrementing: props.counter.isIncrementing,
  isDecrementing: props.counter.isDecrementing,
  mydata: props.mydata
})

// Добавление функций в стор, чтобы они отслеживались и работали при вызове
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      // incrementAsync,
      // decrement,
      // decrementAsync,
      my_increment,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import store, { history } from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route basename={process.env.PUBLIC_URL}>
        <div>
          <App />
        </div>
      </Route>
    </ConnectedRouter>
  </Provider>,
  target
)

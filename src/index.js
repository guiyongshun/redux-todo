import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import todoApp from './redux/reducers'

let store = createStore(todoApp)
let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import Stort from './redux/store'


Stort.subscribe(() => {
    ReactDOM.render(<App/>, document.getElementById('root'))
  })

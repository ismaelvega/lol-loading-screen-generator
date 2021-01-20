import React from 'react'
import { Provider} from 'react-redux'
import store from './store'
import PickChamps from './components/PickChamps.jsx'
import Match from './components/Match.jsx'
import './assets/styles/components/App.scss'

const App = () => (
  <Provider store={store}>
    <>
      <PickChamps />
      <Match />
    </>
  </Provider>
)



export default App;

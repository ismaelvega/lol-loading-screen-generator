import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import champs from './champs'

const initialState = {
    redTeamchamps: champs.slice(),
    blueTeamChamps: champs.slice(),
    redTeam: [
        {
            "id": 0,
            "position": "Top Lane"
        },
        {
            "id": 1,
            "position": "Jungle"
        },
        {
            "id": 2,
            "position": "Mid Lane"
        },
        {
            "id": 3,
            "position": "Marksman"
        },
        {
            "id": 4,
            "position": "Support"
        }
    ],
    blueTeam: [
        {
            "id": 0,
            "position": "Top Lane"
        },
        {
            "id": 1,
            "position": "Jungle"    
        },
        {
            "id": 2,
            "position": "Mid Lane"
        },
        {
            "id": 3,
            "position": "Marksman"
        },
        {
            "id": 4,
            "position": "Support"
        }
    ],
    currentRedPick: [],
    currentBluePick: [],
}

const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
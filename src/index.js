import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { getDataChamps } from './api.js'

async function getResults(){
    const results = await getDataChamps()
    const data = [ results.data ]
    const champs = Object.values(data[0])

    const dataChamps = champs.map((champ) => champ)

    return dataChamps
}

async function getInitialState(){
    const champs = await getResults()
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

    return initialState
}

document.addEventListener('DOMContentLoaded', async () => {
    const initialState = await getInitialState()
    const store = createStore(reducer, initialState)

    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('app')
      );
})



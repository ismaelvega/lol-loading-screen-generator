import { createStore } from 'redux'
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

const reducerBlueTeam = (state = initialState, action) => {
  switch(action.type){
    case "RED_PICK":{
      return{
          ...state,
          currentRedPick: state.currentRedPick.concat(action.champ),
          redTeamchamps: state.redTeamchamps.filter(champ => champ.id !== action.champ.id)
      }
    }
    case "BLUE_PICK":{
      return{
          ...state,
          currentBluePick: state.currentBluePick.concat(action.champ),
          blueTeamChamps: state.blueTeamChamps.filter(champ => champ.id !== action.champ.id)
      } 
    }
    case "DISPLAY_RED_PICK":{
        return{
            ...state,
            currentRedPick: [],
            redTeamchamps: state.redTeamchamps
        }
    }
    case "DISPLAY_BLUE_PICK":{
        return{
            ...state,
            currentBluePick: [],
            blueTeamChamps: state.blueTeamChamps
        }
    }
    case "RETURN_RED_PICKED_CHAMP":{
        return{
            ...state,
            redTeamchamps: state.redTeamchamps.concat(action.champ).sort((a, b) => {
                if (a.id > b.id) {
                    return 1;
                  }
                  if (a.id < b.id) {
                    return -1;
                  }
                  return 0;
            })
        }
    }
    case "RETURN_BLUE_PICKED_CHAMP":{
        return{
            ...state,
            blueTeamChamps: state.blueTeamChamps.concat(action.champ).sort((a, b) => {
                if (a.id > b.id) {
                    return 1;
                  }
                  if (a.id < b.id) {
                    return -1;
                  }
                  return 0;
            })
        }
    }
    default:
  }
  return state
}


export default createStore(reducerBlueTeam)
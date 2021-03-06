const reducer = (state, action) => {
    switch(action.type){
      case "RED_PICK":{
          console.log(action.payload.id)
        return{
            ...state,
            currentRedPick: state.currentRedPick.concat(action.payload),
            redTeamchamps: state.redTeamchamps.filter(champ => champ.id !== action.payload.id)
        }
      }
      case "BLUE_PICK":{
        return{
            ...state,
            currentBluePick: state.currentBluePick.concat(action.payload),
            blueTeamChamps: state.blueTeamChamps.filter(champ => champ.id !== action.payload.id)
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
              redTeamchamps: state.redTeamchamps.concat(action.payload).sort((a, b) => orderArray(a, b))
          }
      }
      case "RETURN_BLUE_PICKED_CHAMP":{
          return{
              ...state,
              blueTeamChamps: state.blueTeamChamps.concat(action.payload).sort((a, b) => orderArray(a, b))
          }
      }
      case "GET_PICKED_CHAMP_SKINS":{
          console.log( action.payload)
          console.log(typeof action.payload)
          return{
              ...state,
            //   pickedChampSkins: state.pickedChampSkins.push(action.payload)
          }
      }
      default:
    }
  
      function orderArray(previousElement, element) {
      if (previousElement.id > element.id) {
          return 1;
          }
      if (previousElement.id < element.id) {
          return -1;
      }
      return 0;
      }   
    return state
  }

export default reducer
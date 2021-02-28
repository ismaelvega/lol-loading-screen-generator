export const redSummonerPick = payload => {
    document.querySelectorAll('.red-team-summoner--card .champ-img').forEach(card => {
      card.classList.add('toPick')
    })
    return {
        type: "RED_PICK",
        payload
    }
  }

export const blueSummonerPick = payload => {
    document.querySelectorAll('.blue-team-summoner--card .champ-img').forEach(card => {
      card.classList.add('toPick')
    })
    return{
      type: "BLUE_PICK",
      payload
    }
  }

export const displayCurrentRedPick = payload => {
    return {
      type: "DISPLAY_RED_PICK",
      payload
    }
  }

export const displayCurrentBluePick = payload => {
  return{
    type: "DISPLAY_BLUE_PICK",
    payload
  }
}

export const returnRedPickedChamp = payload => {
  return {
    type: "RETURN_RED_PICKED_CHAMP",
    payload
  }
}

export const returnBluePickedChamp = payload => {
  return {
    type: "RETURN_BLUE_PICKED_CHAMP",
    payload
  }
}
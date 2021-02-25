export const redSummonerPick = payload => {
    document.querySelectorAll('.red-team-summoner--card').forEach(card => {
      card.style['border'] = '3px solid yellow'
      card.style['cursor'] = 'pointer'
    })
    return {
        type: "RED_PICK",
        payload
    }
  }

export const blueSummonerPick = payload => {
    document.querySelectorAll('.blue-team-summoner--card').forEach(card => {
      card.style['border'] = '3px solid yellow'
      card.style['cursor'] = 'pointer'
    })
    return{
      type: "BLUE_PICK",
      payload
    }
  }

export const displayCurrentRedPick = payload => {
    document.querySelectorAll('.red-team-summoner--card').forEach(card => {
      card.style['border'] = '3px solid transparent'
      card.style['cursor'] = 'initial'
    })
    return {
      type: "DISPLAY_RED_PICK",
      payload
    }
  }

export const returnRedPickedChamp = payload => {
  return {
    type: "RETURN_RED_PICKED_CHAMP",
    payload
  }
}

export const displayCurrentBluePick = payload => {
  document.querySelectorAll('.blue-team-summoner--card').forEach(card => {
    card.style['border'] = '3px solid transparent'
    card.style['cursor'] = 'initial'
  })
  
  return{
    type: "DISPLAY_BLUE_PICK",
    payload
  }
}

export const returnBluePickedChamp = payload => {
  return {
    type: "RETURN_BLUE_PICKED_CHAMP",
    payload
  }
}
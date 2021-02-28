import React from 'react'
import { connect } from 'react-redux'
import { displayCurrentRedPick, returnRedPickedChamp} from '../actions'
import initialPositionImages from '../initialCards'
import { getSummonerData } from '../api'

import '../assets/styles/components/Match.scss'

const RedTeamSummonerCard = ({position, currentVersion, currentRedPick, displayCurrentRedPick, returnRedPickedChamp}) => {
  let imgSource = false
  let storePick = currentRedPick[0]
  
  if(currentRedPick[0]){
    imgSource = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentRedPick[0].id}_0.jpg`
  }
  
  function displayPick(event){
    if (currentRedPick[0]) {
      document.querySelectorAll('.red-team-summoner--card .champ-img').forEach(card => {
        card.classList.remove('toPick')
      })
      event.target.classList.add('picked')
      displayCurrentRedPick(currentRedPick)
    }
    
    if(imgSource){
      event.target.src = imgSource
      event.target.onclick = () => {
        if(storePick){
          event.target.classList.remove('picked')
          returnRedPickedChamp(storePick)
        }
        storePick = false
      }
    } else{
      event.target.src = initialPositionImages[position.id]
    }
  }
  const summonerIconURL = `http://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/profileicon/`
  
  return(
    <article className="red-team-summoner--card">
          <img 
            className="champ-img" 
            onClick={(event) => displayPick(event)} 
            src={initialPositionImages[position.id]} 
            alt={position.position} 
          />
          <img 
            className="profile-icon" 
            src={`${summonerIconURL}1.png`} 
            alt="icon"
          />
          <input 
            className="input-summoner-name" 
            type="text" 
            placeholder="Summoner"
            onKeyDown={async (event) => { 
              const img = event.target.previousSibling
              if(event.key === 'Enter'){
                const summoner = await getSummonerData(event.target.value)
                img.setAttribute('src', `${summonerIconURL}${summoner.profileIconId}.png`)
              }
            }}>
          </input>
      </article>
  )
}   

const mapStateToProps = state => {
  return {
    currentRedPick: state.currentRedPick,
    currentVersion: state.currentVersion
  }
}
  
const mapDispatchToProps = {
  displayCurrentRedPick,
  returnRedPickedChamp
}

export default connect(mapStateToProps, mapDispatchToProps)(RedTeamSummonerCard)
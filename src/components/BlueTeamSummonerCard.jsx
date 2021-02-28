import React from 'react'
import { connect } from 'react-redux'
import { displayCurrentBluePick, returnBluePickedChamp} from '../actions'
import { getSummonerData } from '../api'
import initialPositionImages from '../initialCards'

import '../assets/styles/components/Match.scss'

const BlueTeamSummonerCard = ({position, currentVersion, currentBluePick, displayCurrentBluePick, returnBluePickedChamp}) => {
    let imgSource = false
    let storePick = currentBluePick[0]
    if(currentBluePick[0]){
        imgSource = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentBluePick[0].id}_0.jpg`
    }

    function displayPick(event){
      if (currentBluePick[0]) {
        document.querySelectorAll('.blue-team-summoner--card .champ-img').forEach(card => {
          card.classList.remove('toPick')
        })
        event.target.classList.add('picked')
        displayCurrentBluePick(currentBluePick)
      }

      if(imgSource){
        event.target.src = imgSource
        event.target.onclick = () => {
          if(storePick){
            event.target.classList.remove('picked')
            returnBluePickedChamp(storePick)
          }
          storePick = false
        }
      } else{
        event.target.src = initialPositionImages[position.id]
      }
    }
  const summonerIconURL = `http://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/profileicon/`
    return(
      <article className="blue-team-summoner--card">
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

const mapStateToProps = state => ({
  currentBluePick: state.currentBluePick,
  currentVersion: state.currentVersion
})
  
const mapDispatchToProps = {
  displayCurrentBluePick,
  returnBluePickedChamp
}

export default connect(mapStateToProps, mapDispatchToProps)(BlueTeamSummonerCard)
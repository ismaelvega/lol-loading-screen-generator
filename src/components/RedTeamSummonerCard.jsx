import React from 'react'
import { connect } from 'react-redux'
import top from '../assets/images/top.png'
import jungle from '../assets/images/jungle.png'
import midlane from '../assets/images/midlane.png'
import marksman from '../assets/images/marksman.png'
import support from '../assets/images/support.png'

import '../assets/styles/components/Match.scss'

const RedTeamSummonerCard = ({position, currentRedPick, displayCurrentPick, returnPickedChamp}) => {
  const positions = [top, jungle, midlane, marksman, support]
  let imgSource = false
  let storePick = currentRedPick[0]

  if(currentRedPick[0]){
      imgSource = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentRedPick[0].id}_0.jpg`
  }
  
  function displayPick(event){
    if (currentRedPick[0]) {
      displayCurrentPick(currentRedPick)
    }
    
    if(imgSource){
      event.target.src = imgSource
      event.target.onclick = () => {
        if(storePick){
          returnPickedChamp(storePick)
          event.target.classList.remove('picked')
        }
        storePick = false
      }
      event.target.classList.add('picked')
    } else{
      event.target.src = positions[position.id]
    }
  }
  return(
      <article className="red-team-summoner--card">
          <img onClick={(event) => displayPick(event)} src={positions[position.id]} alt={position.position} />
      </article>
  )
}   

const mapStateToProps = state => ({
    currentRedPick: state.currentRedPick
  })
  
//   const mapDispatchToProps = dispatch => ({})
  const mapDispatchToProps = dispatch => ({
    displayCurrentPick(pick){
      document.querySelectorAll('.red-team-summoner--card').forEach(card => {
        card.style['border'] = '3px solid transparent'
        card.style['cursor'] = 'initial'
      })
      dispatch({
        type: "DISPLAY_RED_PICK",
        pick
      })
    },
    returnPickedChamp(champ){
      dispatch({
        type: "RETURN_RED_PICKED_CHAMP",
        champ
      })
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(RedTeamSummonerCard)
import React from 'react'
import { connect } from 'react-redux'
import { displayCurrentRedPick, returnRedPickedChamp} from '../actions'
import top from '../assets/images/top.png'
import jungle from '../assets/images/jungle.png'
import midlane from '../assets/images/midlane.png'
import marksman from '../assets/images/marksman.png'
import support from '../assets/images/support.png'

import '../assets/styles/components/Match.scss'

const RedTeamSummonerCard = ({position, currentRedPick, displayCurrentRedPick, returnRedPickedChamp}) => {
  const positions = [top, jungle, midlane, marksman, support]
  let imgSource = false
  let storePick = currentRedPick[0]

  if(currentRedPick[0]){
      imgSource = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentRedPick[0].id}_0.jpg`
  }
  
  function displayPick(event){
    if (currentRedPick[0]) {
      displayCurrentRedPick(currentRedPick)
    }
    
    if(imgSource){
      event.target.src = imgSource
      event.target.onclick = () => {
        if(storePick){
          returnRedPickedChamp(storePick)
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

const mapStateToProps = state => {
  return {
    currentRedPick: state.currentRedPick
  }
}
  
const mapDispatchToProps = {
  displayCurrentRedPick,
  returnRedPickedChamp
}

export default connect(mapStateToProps, mapDispatchToProps)(RedTeamSummonerCard)
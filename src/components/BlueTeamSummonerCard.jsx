import React from 'react'
import { connect } from 'react-redux'
import { displayCurrentBluePick, returnBluePickedChamp} from '../actions'
import top from '../assets/images/top.png'
import jungle from '../assets/images/jungle.png'
import midlane from '../assets/images/midlane.png'
import marksman from '../assets/images/marksman.png'
import support from '../assets/images/support.png'

import '../assets/styles/components/Match.scss'

const BlueTeamSummonerCard = ({position, currentBluePick, displayCurrentBluePick, returnBluePickedChamp}) => {
    const positions = [top, jungle, midlane, marksman, support]
    let imgSource = false
    let storePick = currentBluePick[0]
    if(currentBluePick[0]){
        imgSource = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${currentBluePick[0].id}_0.jpg`
    }

    function displayPick(event){
      if (currentBluePick[0]) {
          displayCurrentBluePick(currentBluePick)
      }

      if(imgSource){
        event.target.src = imgSource
        event.target.onclick = () => {
          if(storePick){
            returnBluePickedChamp(storePick)
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
      <article className="blue-team-summoner--card">
          <img onClick={(event) => displayPick(event)} src={positions[position.id]} alt={position.position} />
      </article>
    )
}   

const mapStateToProps = state => ({
  currentBluePick: state.currentBluePick
})
  
const mapDispatchToProps = {
  displayCurrentBluePick,
  returnBluePickedChamp
}

export default connect(mapStateToProps, mapDispatchToProps)(BlueTeamSummonerCard)
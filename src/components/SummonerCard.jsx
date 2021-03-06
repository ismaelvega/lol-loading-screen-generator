import React from 'react'
import { connect } from 'react-redux'
import { displayCurrentRedPick, returnRedPickedChamp, displayCurrentBluePick, returnBluePickedChamp, getPickedChampSkins} from '../actions'
import initialPositionImages from '../initialCards'
import { getSummonerData} from '../api'

const SummonerCard = (props) => {
    const { 
      position,
      team, 
      cardClass, 
      currentVersion, 
      currentRedPick,
      displayCurrentRedPick, 
      returnRedPickedChamp, 
      currentBluePick, 
      displayCurrentBluePick, 
      returnBluePickedChamp
    } = props

    const redTeamSummonerCard = team === 'red'
    let imgSource = false
    let storePick = redTeamSummonerCard ? currentRedPick[0] : currentBluePick[0]
    //if redTeamSummonerCard is false or null we asume that the team is blue instead of red
    
    if(storePick){
      imgSource = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${storePick.id}_0.jpg`
    }
    
    async function displayPick(event, colorTeam){
      if (storePick) {
        document.querySelector('html').setAttribute('style', `cursor: initial`);
        document.querySelectorAll(`.${colorTeam}-team-summoner--card .champ-img`)
          .forEach(card => {
            card.classList.remove('toPick')
          })
        
          event.target.classList.add('picked')

          // const champSkins = await getSkins(currentRedPick[0].id)
          // getPickedChampSkins(champSkins)
          // console.log(pickedChampSkins)
          // champSkinsArray = pickedChampSkins[0]
          // console.log(champSkinsArray)

          if(storePick === currentRedPick[0])
          displayCurrentRedPick(currentRedPick)
            else
                displayCurrentBluePick(currentBluePick)
      }
        
      if(imgSource){
        event.target.src = imgSource
        event.target.onclick = () => {
          event.target.classList.remove('picked')
          if(storePick === currentRedPick[0]){
            returnRedPickedChamp(storePick)
          } else if(storePick === currentBluePick[0]) {
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
        <article className={cardClass}>
          <img 
            className="champ-img"
            onClick={(event) => displayPick(event, team)}
            src={initialPositionImages[position.id]}
            alt={position.position}
          />
          <img 
            className="profile-icon" 
            src={`${summonerIconURL}1.png`} 
            alt="icon"
          />
          <p className="summoner-level"></p>
          <input 
            className="input-summoner-name"
            type="text"
            placeholder="Summoner"
            onKeyDown={async (event) => { 
              const summonerLevel = event.target.previousSibling
              const img = summonerLevel.previousSibling
              if(event.key === 'Enter'){
                const summoner = await getSummonerData(event.target.value)
                img.setAttribute('src', `${summonerIconURL}${summoner.profileIconId}.png`)
                summonerLevel.textContent = `Lvl. ${summoner.summonerLevel}`

                // creating <p> summoner level
                const summonerName = document.createElement('p')
                summonerName.classList.add("summoner-name")
                summonerName.textContent = summoner.name
                
                // replacing the input
                summonerLevel.append(summonerName)
                event.target.remove()
              }
            }}>
          </input>
      </article>
    )
}

const mapStateToProps = state => ({
  currentRedPick: state.currentRedPick,
  currentBluePick: state.currentBluePick,
  currentVersion: state.currentVersion,
  pickedChampSkins: state.pickedChampSkins
})

const mapDispatchToProps = {
  displayCurrentRedPick, 
  returnRedPickedChamp, 
  displayCurrentBluePick, 
  getPickedChampSkins,
  returnBluePickedChamp
}

export default connect(mapStateToProps, mapDispatchToProps)(SummonerCard)
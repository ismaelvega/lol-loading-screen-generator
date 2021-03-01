import React from 'react'
import { connect } from 'react-redux'
import { blueSummonerPick, redSummonerPick } from '../actions'
import '../assets/styles/components/PickChamps.scss'

const PickChamps = (props) =>{
  const {redTeamchamps, blueTeamChamps, blueSummonerPick, redSummonerPick, currentVersion, currentRedPick, currentBluePick} = props
  const imgSourceURL = `http://ddragon.leagueoflegends.com/cdn/${currentVersion}/img/champion/`
  return(
    <section className="pick-champs">
      <div className="red-team">
        {
          redTeamchamps.map(champ => {
            const imgSource = `${imgSourceURL}${champ.id}.png`
            return(
              <article className="red-team-champ-option" key={champ.id}>
                <img 
                  className="champ" 
                  onClick={() => currentRedPick[0] ? null : redSummonerPick(champ, imgSource)} 
                  src={imgSource} 
                  alt={champ.name} 
                /><span>{champ.name}</span>
              </article>
            ) 
          })
        }
      </div>
      <div className="versus">
        <h2>VS</h2>
      </div>
      <div className="blue-team">
      {
        blueTeamChamps.map(champ => {
          const imgSource = `${imgSourceURL}${champ.id}.png`
          return(
            <article className="blue-team-champ-option" key={champ.id}>
              <img 
                className="champ" 
                onClick={() => currentBluePick[0] ? null : blueSummonerPick(champ, imgSource)} 
                src={imgSource} 
                alt={champ.name} 
              /><span>{champ.name}</span>
            </article>
          ) 
        })
      }
      </div>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    redTeamchamps: state.redTeamchamps,
    blueTeamChamps: state.blueTeamChamps,
    currentRedPick: state.currentRedPick,
    currentBluePick: state.currentBluePick,
    currentVersion: state.currentVersion
  }
}

const mapDispatchToProps = {
 redSummonerPick,
 blueSummonerPick
}

export default connect(mapStateToProps, mapDispatchToProps)(PickChamps)

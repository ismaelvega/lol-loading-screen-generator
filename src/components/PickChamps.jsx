import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/PickChamps.scss'

const PickChamps = ({redTeamchamps, blueTeamChamps, blueSummonerPick, redSummonerPick, currentRedPick, currentBluePick}) =>(
  <section className="pick-champs">
    <div className="red-team">
      {
        redTeamchamps.map(champ => {
          const imgSource = `http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${champ.id}.png`
          return(
            <article className="red-team-champ-option" key={champ.id}>
              <img className="champ" onClick={() => currentRedPick[0] ? null : redSummonerPick(champ)} src={imgSource} alt={champ.name} /><span>{champ.name}</span>
            </article>
          ) 
        })
          // <RedTeamPicks redPick={champ} />
      }
    </div>
    <div className="versus">
      <h2>VS</h2>
    </div>
    <div className="blue-team">
    {
      blueTeamChamps.map(champ => {
        const imgSource = `http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/${champ.id}.png`
        return(
          <article className="blue-team-champ-option" key={champ.id}>
            <img className="champ" onClick={() => currentBluePick[0] ? null : blueSummonerPick(champ)} src={imgSource} alt={champ.name} /><span>{champ.name}</span>
          </article>
        ) 
      })
    }
    </div>
  </section>
)

const mapStateToProps = state => ({
  redTeamchamps: state.redTeamchamps,
  blueTeamChamps: state.blueTeamChamps,
  currentRedPick: state.currentRedPick,
  currentBluePick: state.currentBluePick
})

// const mapDispatchToProps = dispatch => ({})
const mapDispatchToProps = dispatch => ({
  redSummonerPick(champ){
    document.querySelectorAll('.red-team-summoner--card').forEach(card => {
      card.style['border'] = '3px solid yellow'
      card.style['cursor'] = 'pointer'
    })
    dispatch({
      type: "RED_PICK",
      champ
    })
  },
  blueSummonerPick(champ){
    document.querySelectorAll('.blue-team-summoner--card').forEach(card => {
      card.style['border'] = '3px solid yellow'
      card.style['cursor'] = 'pointer'
    })
    dispatch({
      type: "BLUE_PICK",
      champ
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PickChamps)
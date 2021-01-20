import React from 'react'
import { connect } from 'react-redux'
import RedTeamSummonerCard from './RedTeamSummonerCard'
import BlueTeamSummonerCard from './BlueTeamSummonerCard'
import '../assets/styles/components/Match.scss'

const Match = ({blueTeam, redTeam}) => {
  return( 
    <main className="match">
      <section className="match-hero">
        <h1>League of Legends match generator</h1>
      </section>

      <section className="red-team-summoners--container">
        {
          redTeam.map(pick => {
            return(
              <RedTeamSummonerCard position={pick} />
            )
          })
        }
      </section>

      <section className="blue-team-summoners--container">
        <div className="versus-summoners">
          <h2>VS</h2>
        </div>
        {
          blueTeam.map(pick => {
            return(
              <BlueTeamSummonerCard position={pick} />
            )
          })
        }
      </section>
    </main>
  )
}

const mapStateToProps = state => ({
  redTeam: state.redTeam,
  blueTeam: state.blueTeam
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Match)
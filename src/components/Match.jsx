import React from 'react'
import { connect } from 'react-redux'
import '../assets/styles/components/Match.scss'
import SummonerCard from './SummonerCard'

const Match = ({blueTeam, redTeam}) => {
  return( 
    <main className="match">
      <section className="match-hero">
        <h1>League of Legends loading screen generator</h1>
      </section>

      <section className="red-team-summoners--container">
        {
          redTeam.map(pick => {
            return(
              <SummonerCard 
                position={pick} 
                cardClass={'red-team-summoner--card'} 
                team={'red'} 
                key={pick.id}
              />
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
              <SummonerCard 
                position={pick} 
                cardClass={'blue-team-summoner--card'} 
                team={'blue'} 
                key={pick.id}
              />
            )
          })
        }
      </section>
    </main>
  )
}

const mapStateToProps = state => {
  return {
    redTeam: state.redTeam,
    blueTeam: state.blueTeam
  }
}


export default connect(mapStateToProps, null)(Match)
require('dotenv').config()
const API_KEY = process.env.REACT_APP_API_KEY


export async function getDataChamps(){
    const currentVersion = await getCurrentVersion()
    const API = `https://ddragon.leagueoflegends.com/cdn/${currentVersion}/data/en_US/champion.json`
    const response = await fetch(API, {})
    const data = await response.json()
    return data
}

async function getSummonerData(summonerName){
    const url = `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName.split(' ').join('%20')}?api_key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

async function getCurrentVersion(){
    const response = await fetch('https://ddragon.leagueoflegends.com/api/versions.json')
    const versions = await response.json()
    const currentVersion = versions[0]

    return currentVersion
}

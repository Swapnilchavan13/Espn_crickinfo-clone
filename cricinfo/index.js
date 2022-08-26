import { headerSecond } from "./component/headerSecond.js"
document.getElementById('headerSec').append(headerSecond())


async function score() {
    try {
        let req = await fetch('https://cricapi.com/api/cricketScore/?apikey=&unique_id=1254066')
        let data = await req.json()
        console.log(data)
        let team = data.description.split('v')
        //console.log(team)
        let teamf = document.getElementById('teamf')
        teamf.innerHTML = team[0]
        let teams = document.getElementById('teams')
        teams.innerHTML = team[1]
    } catch (e) {
        console.log(e)
    }
}
score()
async function score1() {
    try {
        let req = await fetch('https://cricapi.com/api/cricketScore/?apikey=&unique_id=1254067')
        let data = await req.json()
        //console.log(data)
        let team = data.description.split('v')
        //console.log(team)
        let teamf1 = document.getElementById('teamf1')
        teamf1.innerHTML = team[0]
        let teams1 = document.getElementById('teams1')
        teams1.innerHTML = team[1]
        let type1 = document.getElementById('type1')
        let date = data.provider.pubDate.split('T')
        

        //console.log(date)
    } catch (e) {
        console.log(e)
    }
}
score1()
async function score2() {
    try {
        let req = await fetch('https://cricapi.com/api/cricketScore/?apikey=&unique_id=1254068')
        let data = await req.json()
        //console.log(data)
        let team = data.description.split('v')
        //console.log(team)
        let teamf2 = document.getElementById('teamf2')
        teamf2.innerHTML = team[0]
        let teams2 = document.getElementById('teams2')
        teams2.innerHTML = team[1]
        let type2 = document.getElementById('type2')
        let date = data.provider.pubDate.split('T')
        
        //console.log(date)

    } catch (e) {
        console.log(e)
    }
}
score2()
async function score3() {
    try {
        let req = await fetch('https://cricapi.com/api/cricketScore/?apikey=&unique_id=1254069')
        let data = await req.json()
        //console.log(data)
        let team = data.description.split('v')
        //console.log(team)
        let teamf2 = document.getElementById('teamf3')
        teamf2.innerHTML = team[0]
        let teams2 = document.getElementById('teams3')
        teams2.innerHTML = team[1]
        let type3 = document.getElementById('type3')
        let date = data.provider.pubDate.split('T')
        type3.innerHTML= date[0]
        //console.log(date)

    } catch (e) {
        console.log(e)
    }
}
score3()

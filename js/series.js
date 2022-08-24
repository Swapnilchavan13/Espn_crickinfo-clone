let top_ads = ["https://tpc.googlesyndication.com/simgad/4599272747741584314?",
    "https://tpc.googlesyndication.com/simgad/4806003440218956751?"]

let right_ads = ["https://tpc.googlesyndication.com/simgad/12365718001132389279?",
    "https://tpc.googlesyndication.com/simgad/7411421147266363877?",
    "https://tpc.googlesyndication.com/simgad/12598192234913773850?",
    "https://tpc.googlesyndication.com/simgad/15841686395453576998?",
    "https://tpc.googlesyndication.com/simgad/15582684688719062778?",
    "https://tpc.googlesyndication.com/simgad/12239562037567381132?",
    "https://tpc.googlesyndication.com/simgad/6181019838457675129?",
    "https://tpc.googlesyndication.com/simgad/3541276014299803378?",
    "https://tpc.googlesyndication.com/simgad/16995279651211156069?",
    "https://tpc.googlesyndication.com/simgad/4461905471653839514?"]

window.addEventListener('load', () => {
    document.getElementById('series').innerHTML = currentCricket();

    document.getElementById('topAd').setAttribute('src', `${top_ads[Math.floor(Math.random() * 2)]}`)
    document.getElementById('rightAd1').setAttribute('src', `${right_ads[Math.floor(Math.random() * right_ads.length)]}`)
    document.getElementById('rightAd2').setAttribute('src', `${right_ads[Math.floor(Math.random() * right_ads.length)]}`)
})

let series_div = document.getElementById('series')

function asd() {
    console.log('hello')
}
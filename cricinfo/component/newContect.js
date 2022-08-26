function News(img, heading, para) {
    this.img = img
    this.heading = heading
    this.para = para
}
var arr = []
let news1 = new News("../image/csk.jpg", "Chahar's 4 for 13 sets up big CSK win", "Punjab Kings never recovered after being 26 for 5 in the seventh over")
let news2 = new News("../image/pak.jpg", "Nawaz drags stumbling Pakistan to series win", "Both teams suffered collapses, but South Africa's 145 target proved insufficient in fourth T20I")
let news3 = new News("../image/319496.4.jpg", "Do players trust data insights? Not as much as analysts and coaches might want", "Cricketers are now incoreasingly exposed to numbers, but many factors still hold them back from wholehearted acceptance")
let news4 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/319600/319631.6.jpg", "Maxwell, de Villiers make it three in three for RCB", "KKR lose steam as Siraj concedes just one run in the penultimate over")
let news5 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/233500/233595.12.jpg", "No. 6: Brendon McCullum's 158 not out vs the Royal Challengers Bangalore", "The best advertisement for IPL came in the very first game")
let news6 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/319600/319630.14.jpg", "de Villiers to discuss T20 WC comeback with Boucher", "Talks have already begun. and the two set to catch up again during the IPL")
let news7 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/319500/319509.14.jpg", "Javed Miandad on Sharjah 1986: 'To describe it is impossible. This was a gift from God'", "Thirty-five years on, a look back at the short that marked a high point in pakistan's cricket history")
let news8 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/319200/319296.14.jpg", "The number tell us match-ups work", "We can calculate how effective a batter or bowler is against a specific type of oppenent is each phase of a game")
let news9 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/310700/310780.jpg", "Flawed CSK and Rajasthan Royal search for consistency", "Their face off could tell us if one of them will enjoy a dark-horse run deep into the IPL")
let news10 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/291600/291656.jpg", "BCCI gets 'government assurances' to provide Pakistan visas for T20 World Cup", "'However. whether the fans can travel across the border to watch matches is still not clear'")
let news11 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/319500/319518.jpg", "In T20 cricket, Mohammad Nawaz's case is a curious one", "Danyal Rasool says number don't quite tell the complete story of what he brings to the side")
let news12 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_gn_w_656/lsci/db/PICTURES/CMS/319500/319550.jpg", "Babar hails 'complete team effort' after Pakistan seal ODI-T20I double", "'The way Fakhar performed stood out obviously. but I think we should pay creadit pay credit to the bowlers. too'")

arr = [news1, news2, news3, news4, news5, news6, news7, news8, news9, news10, news11, news12]
//console.log(arr)
//console.log(news1, news2, news3, news4, news5, news6, news7, news8)

arr.forEach(el => {
    let newsContent = document.getElementById('newsContent')
    let newsInner = document.createElement('div')
    newsInner.innerHTML = `<div class="newsInner">
    <div style="width: 500px;padding: 10px 22px;">
        <img style="width: 500px; margin: 10px auto;border-radius: 7px;" src="${el.img}" alt="">
        <a class="a_hover" style="color: black;font-size: 1.5rem;text-decoration: none;font-weight: bold;box-sizing: border-box"
            href="">${el.heading}</a>
        <P style="margin-bottom: 10px;">${el.para}</P>
    </div>
</div>`

    newsContent.appendChild(newsInner)
})
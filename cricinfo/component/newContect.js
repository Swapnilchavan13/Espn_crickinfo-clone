function News(img, heading, para) {
    this.img = img
    this.heading = heading
    this.para = para
}
var arr = []
let news1 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2022/0827/dm_220827_INET_CRIC_asiacup_kohli-pkg_nonbranded_global/dm_220827_INET_CRIC_asiacup_kohli-pkg_nonbranded_global.jpg", "Kohli: 'Faking being strong is far worse than admitting being weak", "The India batter opens up on his struggles while admitting feeling mentally down before taking a break")
let news2 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/343700/343778.6.jpg", "Behind square, one step ahead of the bowlers", "Suryakumar's T20 batting has been a perfect mix of flair and functionality, writes")
let news3 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/332900/332995.6.jpg","Pakistan's strength is also their weakness in T20Is", "The numbers for batters four to eight are impressive, but, as Danyal Rasool writes, the top three don't trust them enough")
let news4 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/344800/344811.6.jpg","Live - England roar as Anderson cleans up Elgar", "")
let news5 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2022/0826/dm_220826_INET_CRIC_aisacup-promo_nonbranded_global/dm_220826_INET_CRIC_aisacup-promo_nonbranded_global.jpg", "Babar, Rohit, Shakib? Which captain will score the most runs?", "Pujara, Maharoof, Nafees, Jaffer and Uthappa preview the tournament")
let news6 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/esci/media/motion/2022/0826/dm_220826_COM_CRIC_Analysis_PoliteEnquiries_Andersons_reverse_sweep_or_Leachs_reverse_sweep_220826/dm_220826_COM_CRIC_Analysis_PoliteEnquiries_Andersons_reverse_sweep_or_Leachs_reverse_sweep_220826.jpg","#PoliteEnquiries: Anderson's reverse sweep or Leach's reverse sweep?","Firdose Moonda and Vithushan Ehantharajah take your questions after day two at Old Trafford")
let news7 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/344500/344566.6.jpg","Methodical Sriram will 'challenge the norms' with Bangladesh","Sriram's approach could deliver the results for Bangladesh, but they have to give him time, writes <b> Shashank Kishore </b>")
let news8 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/341400/341473.6.jpg","Australia begin ODI World Cup prep with a rare Zimbabwe series","There are not massive holes to fill in Australia's side that is allrounder-heavy, but Zimbabwe could pose tough challenge")
let news9 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1200,q_60/lsci/db/PICTURES/CMS/344000/344094.6.jpg","Out-of-favour Agarwal 'ticking all boxes' to give white-ball future a thrust","Happy with whatever comes my way, but aspirations and dreams never die")
let news10 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/331200/331280.jpg","Clear winners spotted after four-way bidding for ICC media rights","The identity of the new rights holder(s) has not yet been disclosed, with the ICC board set to make that call on Saturday")
let news11 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/244700/244741.8.jpg","Sanjeev Gupta withdraws conflict-of-interest complaints to 'safeguard health and life'", "Sends email saying as much to Supreme Court, BCCI top brass and members of media")
let news12 = new News("https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_720/lsci/db/PICTURES/CMS/344800/344815.6.jpg","Lyth blitz kills chase as Fire fizzle out to seventh straight defeat","Superchargers' qualification hopes still mathematically alive after drab win")

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
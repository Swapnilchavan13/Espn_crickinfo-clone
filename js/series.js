let top_ads = ["https://tpc.googlesyndication.com/simgad/11321537340682502286?",
    "https://tpc.googlesyndication.com/simgad/4271044209677937619?"]


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

function series() {
    let x = event.target

    console.log(x)

    let ser = document.getElementsByClassName('series');

    for (let i = 0; i < ser.length; i++) {
        console.log(ser[i].setAttribute('style', 'color : #000'))
    }

    x.setAttribute('style', 'color : #439ec9')

    if (x.id == 1) {

        series_div.innerHTML = '';

        series_div.innerHTML = currentCricket();

    }
    else if (x.id == 2) {

        series_div.innerHTML = '';

        series_div.innerHTML = futureSeriesTornaments();

        document.getElementById('ser-right').setAttribute('style', 'border-left : none')

    }
    else {

        series_div.innerHTML = '';

        series_div.innerHTML = recentlyConcluded();

    }
}



function currentCricket() {
    let current_cricket = `<div id="ser-left">
    <h2>International Tours</h2>
    <ul>

        <li><a href="#">India vs Zimbabwe </a></li>
        <li><a href="#">England vs South Africa</a></li>
        <li><a href="#">Zimbabwe v Pakistan</a></li>
        <li><a href="#">Nepal Tri-Nation T20I</a></li>
        <li><a href="#">NZ-A in India</a></li>
        
    </ul>

    <h2>International Tournaments</h2>
    <ul>

        <li><a href="#">Asia Cup Qualifier</a></li>
        <li><a href="#">Asia Cup 2022</a></li>
        <li><a href="#">CWC Challenge Group A</a></li>
        <li><a href="#">CWC Challenge  Group B</a></li>
        
    </ul>

  </div>

  <div id="ser-right">

  <h2>ICC Tournaments</h2>
    <ul>

        <li><a href="#">ICC Women's Championship</a></li>
        <li><a href="#">Men's Cricket World Cup League 2</a></li>
        <li><a href="#">CWC Challenge League Group A</a></li>
        <li><a href="#">CWC Challenge League Group B</a></li>
        <li><a href="#">ICC CWC Super League</a></li>
        <li><a href="#">ICC World Test Championship</a></li>
        
    </ul>

    <h2>T20/T10 Tournaments</h2>
    <ul>

        <li><a href="#">Asia Cup 2022</a></li>     
        <li><a href="#">SLC T20</a></li>
        <li><a href="#">Maharaja T20</a></li>
        <li><a href="#">T20 QUAD (in UAE)</a></li>
        <li><a href="#">Namibia T20</a></li>
        
    </ul>

    <h2>Associate Cricket</h2>
    <ul>

        <li><a href="#">Kenya v Nepal</a></li>                      
        <li><a href="#">Bahrain v Kuwait</a></li>                      
        <li><a href="#">ITA-W in Austria</a></li>                   
        <li><a href="#">Continental Cup</a></li>
        
    </ul>

    <h2>Australia Domestic</h2>
    <ul>

    <li><a href="#">Sheffield Shield</a></li> 
        <li><a href="#">Big Bash League</a></li>  
        <li><a href="#">Women's Big Bash League</a></li> 
        <li><a href="#">Marsh Cup</a></li>   
        <li><a href="#">WNCL</a></li>   
        
        
    </ul>

    <h2>England Domestic</h2>
    <ul>

        <li><a href="#">County Div1</a></li>   
        <li><a href="#">County Div2</a></li>   
        <li><a href="#">100 (Men's)</a></li>   
        <li><a href="#">100 (Women's)</a></li>  
        <li><a href="#">RL One-Day Cup</a></li>   
        <li><a href="#">RHFT Trophy</a></li>  
        <li><a href="#">Vitality Blast</a></li>
        
    </ul>

    <h2>India Domestic</h2>
    <ul>

        <li><a href="#">Women's Senior ODI</a></li>
        <li><a href="#">Vijay Hazare Trophy</a></li>
        <li><a href="#">SMA Trophy</a></li>
        
    </ul>

    

    <h2>New Zealand Domestic</h2>
    <ul>

        <li><a href="#">Plunket Shield</a></li>
        <li><a href="#">Ford Trophy</a></li>
        <li><a href="#">Women's 1-Day</a></li>
        
    </ul>

    <h2>West Indies Domestic</h2>
    <ul>

        <li><a href="#">6IXTY (W)</a></li>
        <li><a href="#">6IXTY (M)</a></li>
        <li><a href="#">CPL 2022</a></li>
        <li><a href="#">WCPL 2022</a></li>
        
    </ul>

   

  </div>`

    return current_cricket;
}

// future and recently







function futureSeriesTornaments() {
    let future_sereis_tornaments = `<div id="ser-left">

    <h2>International Tours</h2>
    <ul>
        <li><a href="#">New Zealand tour of England, Sep - Oct 2022</a></li>
        <li><a href="#">Sri Lanka tour of England, Oct - Nov 2022</a></li> 
        <li><a href="#">Ireland tour of Netherlands, Dec 2022</a></li>
        <li><a href="#">Pakistan tour of England, Jan 2023</a></li>
        <li><a href="#">South Africa tour of Ireland, Feb 2023</a></li>
        <li><a href="#">Zimbabwe tour of Ireland, Mar 2023</a></li>
        <li><a href="#">India tour of England, Apr - May 2023</a></li>
        <li><a href="#">England tour of Pakistan, Jun 2023</a></li>
        <li><a href="#">England tour of West Indies, Jul - Aug 2023</a></li>   
    </ul>

    <h2>International Tournaments</h2>
    <ul>
        <li><a href="/series/icc-women-s-world-cup-2022-22-1219028">Women's World Cup</a></li>    
    </ul>

</div>
<div id="ser-right"></div>`

    return future_sereis_tornaments;
}

function recentlyConcluded() {
    let recently_concluded = `<div id="ser-left">

    <h2>International Tours</h2>
    <ul>

        <li><a href="#">Namibia v Uganda</a></li>
        <li><a href="#">NAM Over-50s v ZIM Over-50s</a></li>
        <li><a href="#">BDESH-U19 v PAK-U19</a></li>
        <li><a href="#">India v England</a></li>
        <li><a href="#">West Indies v Sri Lanka</a></li>
        <li><a href="#">New Zealand v Bangladesh</a></li>
        <li><a href="#">Afghanistan v Zimbabwe</a></li>
        <li><a href="#">South Africa Women in IND</a></li>
        <li><a href="#">Ireland A in BDESH</a></li>
        <li><a href="#">Road Safety Series</a></li>
        <li><a href="#">New Zealand v Australia</a></li>
        <li><a href="#">England Women in NZ</a></li>
        <li><a href="#">Pakistan v South Africa</a></li>
        <li><a href="#">Bangladesh v West Indies</a></li>
        <li><a href="#">Pakistan Women in SA</a></li>
        <li><a href="#">Sri Lanka v England</a></li>
        <li><a href="#">Australia v India</a></li>
        <li><a href="#">Ireland tour of UAE</a></li>
        <li><a href="#">Afghanistan in UAE</a></li>
        <li><a href="#">New Zealand v Pakistan</a></li>
        <li><a href="#">South Africa v Sri Lanka</a></li>
        <li><a href="#">Pakistan A in New Zealand</a></li>
        <li><a href="#">West Indies A in New Zealand</a></li>
        <li><a href="#">New Zealand v West Indies</a></li>
        <li><a href="#">South Africa v England</a></li>
        <li><a href="#">Pakistan v Zimbabwe</a></li>
        <li><a href="#">Australia Women v New Zealand Women</a></li>
        
    </ul>

    <h2>T20 Tournaments</h2>
    <ul>

        <li><a href="#">T20 Challenge</a></li>
        <li><a href="#">Big Bash League</a></li>
        <li><a href="#">Abu Dhabi T10</a></li>
        
    </ul>
</div>

<div id="ser-right">

    <h2>Associate Cricket</h2>
    <ul>

        <li><a href="#">Buddha Cup</a></li>
        <li><a href="#">Balkan Cup</a></li>
        <li><a href="#">Hong Kong PL T20</a></li>
        <li><a href="#">Richelieu Franchise T20</a></li>
        
    </ul>
</div>`

    return recently_concluded;
}




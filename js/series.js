let top_ads = ["https://tpc.googlesyndication.com/simgad/11321537340682502286?",
    "https://tpc.googlesyndication.com/simgad/4271044209677937619?"]



window.addEventListener('load', () => {
    document.getElementById('series').innerHTML = currentCricket();

    document.getElementById('topAd').setAttribute('src', `${top_ads[Math.floor(Math.random() * 2)]}`)
   
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




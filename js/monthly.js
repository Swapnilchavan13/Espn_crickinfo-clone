



     let mdata= [
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/343200/343219.4.jpg",
            "title" : " The 'real value' of wickets: can anyone match e smashed jaws, he thrashed sixes: Wasim Akram in the Birmingham league in 1999? ",
            "desc": "About 23 years ago, caught in the turmoil of the match-fixing saga, the Pakistani legend turned out for Smethwick CC",
            // "name": "Charlotte Tilbury",
            "link" : "https://www.thecricketmonthly.com/story/1320218/the-real-value-of-wickets---can-anyone-match-mcgrath"
           
        },
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/342500/342597.4.jpg",
            "title" : "The 'real value' of wickets: can anyone match McGrath?",
            "desc": "Jul 12, 2022: In 1992 in Australia, Sachin Tendulkar, batting genius, was only just taking shape",
            // "name": "Charlotte Tilbury",
            "link" : "https://www.thecricketmonthly.com/story/1320218/the-real-value-of-wickets---can-anyone-match-mcgrath"
           
        },
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/342800/342853.4.jpg",
            "title" : " 'You can't fully run away from where you come' ",
            "desc": "Jul 12, 2022: In 1992 in Australia, Sachin Tendulkar, batting genius, was only just taking shape",
            "name": "Charlotte Tilbury",
            "link" : "https://www.thecricketmonthly.com/story/1320218/the-real-value-of-wickets---can-anyone-match-mcgrath"
           
        },
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/209100/209187.5.jpg",
            "title" : "Exile on main street ",
            "desc": " A boy, his bread, a ballgame in the balance in a foreign land",
            // "name": "Charlotte Tilbury",
            "link" : "https://www.thecricketmonthly.com/story/1320015/my-favourite-cricket-photo---an-afghan-boy-buying-bread-watches-a-world-cup-game-involving-his-team"
           
        },

        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/314000/314087.4.jpg",
            "title" : "Boy wonder down under ",
            "desc": "Jul 12, 2022: In 1992 in Australia, Sachin Tendulkar, batting genius, was only just taking shape",
            "name": "Karthik Krishnaswamy",
            "link" : "https://www.thecricketmonthly.com/story/1320218/the-real-value-of-wickets---can-anyone-match-mcgrath"
           
        },
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/342200/342284.4.jpg",
            "title" : "To serve and protect",
            "desc": "Jul 11, 2022: Helping players stay a head of the game, one helmet at a time",
            "name": "Deepti Unni",
            "link" : "https://www.thecricketmonthly.com/story/1323704/photo-feature---helmets-in-cricket"
           
        },
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/217600/217689.4.jpg",
            "title" : "The 'real value' of wickets: can anyone match McGrath?",
            "desc": "Jul 12, 2022: In 1992 in Australia, Sachin Tendulkar, batting genius, was only just taking shape",
            "name": "Charlotte Tilbury",
            "link" : "https://www.thecricketmonthly.com/story/1320218/the-real-value-of-wickets---can-anyone-match-mcgrath"
           
        },
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/340500/340548.4.jpg",
            "title" : "Going up a level",
            "desc": "Jun 10, 2022: There's a step, or 25, to cricket",
            "name": "Deepti Unni",
            "link" : "https://www.thecricketmonthly.com/story/1318940/photo-feature---stairs-and-cricket"
           
        },
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/340200/340228.4.jpg",
            "title" : "Temba Bavuma: 'I understand I have a voice, and the influence to make things better around me'",
            "desc": "Jun 3, 2022: South Africa's white-ball captain talks about his year in charge and his role as an agent of change",
            "name": "Interview by Firdose Moonda",
            "link" : "https://www.thecricketmonthly.com/story/1317779/temba-bavuma---i-understand-i-have-a-voice-and-the-influence-to-make-things-better-around-me"
           
        },
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/296900/296943.3.jpg",
            "title" : "The 'real value' of wickets: can anyone match McGrath?",
            "desc": "Jul 12, 2022: In 1992 in Australia, Sachin Tendulkar, batting genius, was only just taking shape",
            "name": "Charlotte Tilbury",
            "link" : "https://www.thecricketmonthly.com/story/1320218/the-real-value-of-wickets---can-anyone-match-mcgrath"
           
        },
    ] 

    display(mdata)   ;                                        
   function display(mdata){
    mdata.forEach(function (elem) {

         var mcards = document.createElement("div");
         mcards.setAttribute("class","mcards")

         let image = document.createElement('img')
         image.src =  elem.image 
         let title = document.createElement("h1");
         title.innerText = elem.title;
         let desc= document.createElement("h4");
         desc.innerText = elem.desc; 
         let name = document.createElement("p");
         if(elem.name == undefined ){
            name.innerText = null ;
         }
         else{
            name.innerText = elem.name;
         }
       

         mcards.addEventListener("click", () => {
             window.location.href = elem.link ;
          });
         mcards.append(image,title, desc,name)
         document.querySelector("#writersm").append(mcards);
     });


   }

           

            //    ****************************************

    let data= [
        {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/103900/103930.1.jpg",
            "name": "Andrew McGlashan",
            "title" : "Cricket could learn from the NFL and start thinking of itself as a collective",
            "desc": "At the moment international cricket is a loose coalition of often conflicting self-interests. If that doesn't change, the future is grim",
            "link" : "https://twitter.com/alanroderick"
          },
          {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/178600/178647.gif",
            "name": "Alan Gardner",
            "title" : "Cricket could learn from the NFL and start thinking of itself as a collective",
            "desc": "Perhaps you've been signed up for one and don't know about it yet",
            "link" : "https://twitter.com/alanroderick"
          },
          {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/314600/314662.png",
            "name": "Sidharth Monga",
            "title" : "Cricket could learn from the NFL and start thinking of itself as a collective",
            "desc": "At the moment international cricket is a loose coalition of often conflicting self-interests. If that doesn't change, the future is grim",
            "link" : "https://twitter.com/alanroderick"
          },
          {
            "image":  "https://p.imgci.com/db/PICTURES/CMS/103600/103657.gif",
            "name": "Ian Chappell",
            "title" : "The upmpires I admired",
            "desc": "Perhaps you've been signed up for one and don't know about it yet",
            "link" : "https://twitter.com/alanroderick"
          },
          
 
      
   
    ]
 
    wdisplay(data)

    function wdisplay(data){
        data.forEach(function (elem) {

         let wcards = document.createElement("div");
         wcards.setAttribute("class","wcards")
             
         let diva = document.createElement("div");
         diva.setAttribute("class","diva")

         let divb = document.createElement("div");
         divb.setAttribute("class","divb")

        let image = document.createElement('img')
         image.src =  elem.image 
         image.setAttribute("class","wimage")
      
         let name = document.createElement("h3");
         name.innerText = elem.name;

         let title = document.createElement("h4");
         title.innerText = elem.title;
         let desc= document.createElement("p");
         desc.innerText = elem.desc; 

        //  wcards.addEventListener("click", () => {
        //     // localStorage.setItem("article", JSON.stringify(elem));
        //     window.location.href = elem.link ;
        //   });
   
         diva.append(image,name)
         divb.append(title, desc)
         wcards.append(diva,divb);
         document.querySelector("#writers").append(wcards);
     });


   }

      
document.getElementById("mhome").addEventListener("click",function(){
  window.location.href = "feat.html"
})

document.getElementById("mwriter").addEventListener("click",function(){
  window.location.href = "writers.html"
})

document.getElementById("mmonthly").addEventListener("click",function(){
  window.location.href = "monthly.html"
})
document.getElementById("mgalleries").addEventListener("click",function(){
  window.location.href = "photos.html"
})
  

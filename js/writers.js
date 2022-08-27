










     let data= [
        {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/105900/105930.gif",
            "title" : "Former India opening batter",
            "name": "Aakash Chopra ",
            "desc": "@cricketaakash",
            "link" : "https://twitter.com/cricketaakash"
           
        },
        {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/178600/178647.gif",
            "title" : "Deputy editor, ESPNcricinfo",
            "name": "Alan Gardner",
            "desc": "@alanroderick",
            "link" : "https://twitter.com/alanroderick"
          },
          {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/320000/320032.png",
            "title" : "Sri Lanka correspondent, ESPNcricinfo",
            "name": "Andrew Fidel Fernando",
            "desc": "@afidelf",
            "link" : "https://twitter.com/andymcg_cricket"
           
          },
          {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/73900/73941.1.jpg",
            "title" : "Deputy editor, ESPNcricinfo",
            "name": " Andrew McGlashan ",
            "desc": "@andymcg_cricket",
            "link" : "https://twitter.com/alanroderick"
          },
          {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/103600/103650.gif",
            "title" : "UK editor, ESPNcricinfo",
            "name": "Andrew Miller",
            "desc": "@miller_cricket",
            "link" : "https://twitter.com/alanroderick"
           
          },
          {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/314600/314653.png",
            "title" : "South Africa correspondent, ESPNcricinfo",
            "name": "Firdose Moonda",
            "desc": "@FirdoseM",
            "link" : "https://twitter.com/FirdoseM"
          },
          {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/103600/103657.gif",
            "title" : "Former Australia captain",
            "name": "Ian Chappell",
            "desc": "@ajarrodkimber",
            "link" : "https://twitter.com/alanroderick"
           
          },
          {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/137600/137625.2.gif",
            "title" : "Writer, ESPNcricinfo",
            "name": "Jarrod Kimber",
            "desc": "@ajarrodkimber",
            "link" : "https://twitter.com/ajarrodkimber"
           
          },
          {
            "image":  "https://wassets.hscicdn.com/static/images/headshot_fallback.svg",
            "title" : "Senior sub-editor, ESPNcricinfo",
            "name": "Karthik Krishnaswamy",
            "desc": "@the_kk",
            "link" : "https://twitter.com/alanroderick"
           
        },
        {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/172300/172385.gif",
            "title" : "Cricket presenter on TV and writer",
            "name": "Mark Nicholas",
            "desc": "@andymcg_cricket",
            "link" : "https://twitter.com/alanroderick"
          },
          {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/314600/314657.png",
            "name": "Mohammad Isam",
            "title" : "Bangladesh correspondent, ESPNcricinfo",
            "desc": "@isam84",
            "link" : "https://twitter.com/alanroderick"
           
          },
          {
            "image":  "https://wassets.hscicdn.com/static/images/headshot_fallback.svg",
            "title" : "News editor, ESPNcricinfo",
            "name": "Nagraj Gollapudi",
            "desc": "@FirdoseM",
            "link" : "https://twitter.com/alanroderick"
          },
          {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/103900/103930.1.jpg",
            "title" : "Senior editor, ESPNcricinfo",
            "name": "Osman Samiuddin",
            "desc": "@OsmanSamiuddin",
            "link" : "https://twitter.com/alanroderick"
           
          },
          {
            "image":  "https://wassets.hscicdn.com/static/images/headshot_fallback.svg",
            "title" : "Social media editor",
            "name": "Paul Muchmore",
            "desc": "@miller_cricket",
            "link" : "https://twitter.com/alanroderick"
           
          },
          {
            "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_h_100/lsci/db/PICTURES/CMS/184300/184337.png",
            "title" : "Stats editor, ESPNcricinfo",
            "name": "S Rajesh",
            "desc": "@rajeshstats",
            "link" : "https://twitter.com/alanroderick"
           
        },
   
    ]


   function display(data){
        data.forEach(function (elem) {

         var wcards = document.createElement("div");
         wcards.setAttribute("id","wcards")

          var wimage = document.createElement("img");
            wimage.setAttribute("src", elem.image);
            wimage.setAttribute("class","wimage")
        // let wimage = document.createElement("div");
        // wimage.setAttribute("class","wimage")

        let wdetails = document.createElement("div");
        wdetails.setAttribute("class","wdetails")

         let image = document.createElement('img')
         image.src =  elem.image 
          let name = document.createElement("h3");
         name.innerText = elem.name;
         let title = document.createElement("h4");
         title.innerText = elem.title;
         let desc= document.createElement("p");
         desc.innerText = elem.desc; 

         wcards.addEventListener("click", () => {
            // localStorage.setItem("article", JSON.stringify(elem));
            window.location.href = elem.link ;
          });
   
         wimage.append(image)
         wdetails.append(name,title, desc)
         wcards.append(wimage,wdetails);
         document.querySelector("#writers").append(wcards);
     });


   }
   display(data)

                  //  ***************************

 const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
 const API_KEY = "9865dcb6e4684a84b7f2a4c9efdeb934";

  let newsDataArr = [];


  async function moreRead(){
      let response = await fetch(SPORTS_NEWS+API_KEY);
     newsDataArr = [];

      if(response.status >=200 && response.status < 300) {
         let data = await response.json();
           newsDataArr  = data.articles ;
           console.log(newsDataArr)
            //  displaymore(data)
      } else {
       
          console.log(response.status, response.statusText);
          newsdetails.innerHTML = "<h5>No data found.</h5>"
          return;
      } 
      newsDataArr = newsDataArr.slice(11,18);
      displaymore()
    // try{
    //      let response = await fetch(SPORTS_NEWS+API_KEY);
    //       newsDataArr = [];
    //        let data = await response.json();
    //        newsDataArr  = data.articles ;
    //        console.log(newsDataArr)

    //   } catch(err){
    //     console.log("err",err)
    //   }
    //     newsDataArr = newsDataArr.slice(0,6);
    //     displaymore(newsDataArr)
       
  }
  moreRead()
  
  function displaymore(){
    let container =    document.querySelector("#sidebar") ;
    container.innerHTML = null ;

   
    newsDataArr.forEach(function (elem) {


        let newscard =  document.createElement('div') ;
        newscard.setAttribute("class","newscard") ;

         let diva =  document.createElement('div') ;
         diva.setAttribute("class","simage")

        let divb =  document.createElement('div') ;
         divb.setAttribute("class","snews")
 
          let image = document.createElement('img')
          image.src =  elem.urlToImage 
          image.setAttribute("class","simage")
   

          let title = document.createElement('h5')
          title.innerText = elem.title
          let author = document.createElement('p')
          author.innerText =  elem.author
       

          newscard.addEventListener("click", () => {
            // localStorage.setItem("article", JSON.stringify(elem));
            window.location.href = elem.url ;
          });

          diva.append(image)
          divb.append(title,author)
          newscard.append(diva,divb)
          container.append(newscard)

      } ) ;
    
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


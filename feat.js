 
      // import featnav from "./component/featnav.js";

      // document.body.innerHTML  = featnav() ;


   


 const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
 const API_KEY = "9865dcb6e4684a84b7f2a4c9efdeb934";

  let newsDataArr = [];

  async function getnewsdata(){

      let response = await fetch(SPORTS_NEWS+API_KEY);
      newsDataArr = [];
      if(response.status >=200 && response.status < 300) {
         let data = await response.json();
         newsDataArr  = data.articles ;
             console.log(newsDataArr)
      } else {
          console.log(response.status, response.statusText);
          newsdetails.innerHTML = "<h5>No data found.</h5>"
          return;
      }
   
      display()  

    //   try{
    //     let response = await fetch(SPORTS_NEWS+API_KEY);
    //      newsDataArr = [];
    //       let data = await response.json();
    //       newsDataArr  = data.articles ;
    //       console.log(newsDataArr)

    //  } catch(err){
    //    console.log("err",err)
    //  }
    //    newsDataArr = newsDataArr.slice(0,6);
    //    displaymore(newsDataArr)

  }
  getnewsdata()
 
  function display(){
 
  // console.log("data is ", data);
  let container =    document.querySelector("#news_container") ;
  container.innerHTML = null ;

  newsDataArr.forEach(function (elem) {

         let newscard =  document.createElement('div') ;
         newscard.setAttribute("id","newscard") ; 

          let diva =  document.createElement('div') ;
          diva.setAttribute("class","reaimage")

          let divb =  document.createElement('div') ;
          divb.setAttribute("class","featdetail")
     
          let image = document.createElement('img')
          image.src =  elem.urlToImage 
          let title = document.createElement('h4')
          title.innerText = elem.title ;
          let content = document.createElement('p')
          content.innerText = elem.description ;
          let author = document.createElement('h5')
          author.innerText =  elem.author

          newscard.addEventListener("click", () => {
            // localStorage.setItem("article", JSON.stringify(elem));
            window.location.href = elem.url ;
          });
        
          diva.append(image)
          divb.append(title,content,author)
          newscard.append(diva,divb)
          container.append(newscard)

      }) ;
  
}


// const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
// const API_KEY = "9865dcb6e4684a84b7f2a4c9efdeb934";

  async function moreRead() {
      let response = await fetch(SPORTS_NEWS+API_KEY);
     newsDataArr = [];
      if(response.status >=200 && response.status < 300) {
         let data = await response.json();
           newsDataArr  = data.articles ;
           newsDataArr = newsDataArr.slice(0,6);
           console.log(data)
          //  displaymore()
      } else {
       
          console.log(response.status, response.statusText);
          newsdetails.innerHTML = "<h5>No data found.</h5>"
          return;
      }
      displaymore()
  }
  moreRead()

  
  function displaymore(){
    let container =    document.querySelector("#sidebar") ;
    container.innerHTML = null ;
 
    // console.log("data is ", data);

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
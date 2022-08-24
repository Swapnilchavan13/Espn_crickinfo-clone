 
 const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
 const API_KEY = "9865dcb6e4684a84b7f2a4c9efdeb934";

var newsDataArr = [];

  async function getnewsdata()
   {
      let response = await fetch(SPORTS_NEWS+API_KEY);
     newsDataArr = [];
      if(response.status >=200 && response.status < 300) {
         let data = await response.json();
             data = (data.articles);
             console.log(data)
             display(data)
      } else {
       
          console.log(response.status, response.statusText);
          newsdetails.innerHTML = "<h5>No data found.</h5>"
          return;
      }
  }

   getnewsdata()
 
  function display(data){
    let container =    document.querySelector("#news_container") ;
    container.innerHTML = null ;
 
    // console.log("data is ", data);

   data.forEach(function (elem) {

        let newscard =  document.createElement('div') ;
        newscard.setAttribute = ("id","newscard") ;
        newscard.style.display = "flex" ;
        newscard.style.gap = "10px" ;
        newscard.style.border = "1px solid whitesmoke" ;

        let diva =  document.createElement('div') ;
        diva.setAttribute = ("class","nimage")

        let divb =  document.createElement('div') ;
         diva.setAttribute = ("class","news")
         newscard.style.gap = "5px" ;

        let image = document.createElement('img')
          image.src =  elem.urlToImage 
          diva.setAttribute = ("class","reaimage")
          image.style.width = "300px" ;
          image.style.height = "150px" ;
          image.style.borderRadius = "10px" ;

        
          let title = document.createElement('h4')
          title.innerText = elem.title
          let content = document.createElement('p')
          content.innerText = elem.description
          content.style.color = "gray " ;
          let author = document.createElement('p')
          author.innerText =  elem.author
          author.style.color = "gainsboro" ;

          diva.append(image)
          divb.append(title,content,author)
          newscard.append(diva,divb)
          container.append(newscard)

      } ) ;


}



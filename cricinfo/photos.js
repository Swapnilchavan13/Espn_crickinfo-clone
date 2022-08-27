






let data= [
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/310200/310227.jpg",
      "title" : "Former India opening batter",
      "date": "Mar 04,2022",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/335200/335268.jpg",
      "title" : "Hosts have work to do",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/324400/324419.jpg",
      "title" : "Vince trumps Babar as England seal thrilling chase",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/313900/313966.jpg",
      "title" : "Archer tries wicketkeeping gloves for size",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/308800/308829.jpg",
      "title" : "Buttler, Woakes power run chase",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/307800/307864.jpg",
      "title" : "Healy party at the G",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/291800/291869.jpg",
      "title" : "Roach wins duel with Stokes",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/307600/307613.jpg",
      "title" : "Fired-up Rabada delivers breakthroughs",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/307600/307614.jpg",
      "title" : "Broad lifts England's hopes before batting gamble",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/306900/306959.jpg",
      "title" : "Banton, Parkinson join debutants list",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/306700/306748.jpg",
      "title" : "Roach wins duel with Stokes",
      "date": "Jan 16,2020",
    },
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/306800/306822.jpg",
      "title" : "Burns fires England's Edgbaston reply",
      "date": "Jan 16,2020",
    },
    {
      "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/306500/306528.jpg",
      "title" : "Root to the fore ... for",
      "date": "Jan 16,2020",
    },
   
   
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/300300/300318.jpg",
      "title" : "Tom and Taylor make merry in Dunedin",
      "date": "Jan 16,2020",
    },
    {
      "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/299600/299638.jpg",
      "title" : "Philander walks the walk",
      "date": "Jan 19,2020",
    },
    
    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/299100/299173.jpg",
      "title" : "Root, Pope give England chance to squeeze NZ",
      "date": "Jan 16,2020",
    },
    {
      "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/298700/298784.jpg",
      "title" : "Gallery - Chris Gayle, Oshane Thomas lead West Indies to victory",
      "date": "Jan 19,2020",
    },

    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/298600/298680.jpg",
      "title" : "Jofra Archer's keeping session",
      "date": "Jan 16,2020",
    },
    {
      "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/297500/297506.jpg",
      "title" : "England ease to victory over Ireland",
      "date": "Jan 19,2020",
    },

    {
      "image":  "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/297400/297468.jpg",
      "title" : "Taylor, Williamson guide NZ to series win",
      "date": "Jan 16,2020",
    },
    {
      "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_400/lsci/db/PICTURES/CMS/297400/297421.jpg",
      "title" : "Buttler goes big as England beat Gayle-force Windies",
      "date": "Jan 19,2020",
    },



  

]


function display(data){
  data.forEach(function (elem) {

   var ecards = document.createElement("div");
   ecards.setAttribute("class","ecards")

  // let wimage = document.createElement("div");
  // wimage.setAttribute("class","wimage")
     let image = document.createElement('img')
      image.src =  elem.image 
      image.setAttribute("class","gimage")

   let title = document.createElement("h3");
   title.innerText = elem.title;
   let date= document.createElement("p");
   date.innerText = elem.date;


   ecards.append(image,title,date)
    document.querySelector("#egallery").append(ecards);
});


}
display(data)


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


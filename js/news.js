let moviearr=[
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344699.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344300/344312.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344695.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/318500/318523.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344677.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344400/344483.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/340400/340441.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344673.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344000/344094.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/335700/335749.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344632.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/310800/310829.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344602.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344699.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344300/344312.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344695.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/318500/318523.6.jpg",
    "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_320/lsci/db/PICTURES/CMS/344600/344677.6.jpg"
]

let moviehead=[
    "Pakistan Women head coach David Hemp won't extend his contract in October",
    "Hayley Matthews hopes to bring 'flair' as she joins Melbourne Renegades",
    "Kane Richardson, Tom Helm drive Phoenix to key victory",
    "Taylor, Hasnain, Smeed in final batch of players for BBL draft",
    "Toby Pettman makes his mark but Nottinghamshire left to wait",
    "Marco Jansen: 'We don't take anything for granted because Mother Cricket will kick you in the backside'",
    "Joe Root: Ben Stokes' honesty about mental health epitomises leadership qualities",
    "Capsey stars to help Invincibles end Phoenix's unbeaten streak",
    "Out-of-favour Agarwal is 'ticking all those boxes' to give white-ball future a thrust",
    "Shakib isn't thinking about winning Asia Cup, just wants 'the improvement graph going up'",
    "Gill's 130 trumps Raza's heroic 115 as rattled India make it 3-0",
    "Paine returns to training, first-class comeback a possibility",
    "Kyle Mayers hundred in vain as four New Zealand half-centurions seal series 2-1",
    "Pakistan Women head coach David Hemp won't extend his contract in October",
    "Hayley Matthews hopes to bring 'flair' as she joins Melbourne Renegades",
    "Kane Richardson, Tom Helm drive Phoenix to key victory",
    "Taylor, Hasnain, Smeed in final batch of players for BBL draft",
    "Toby Pettman makes his mark but Nottinghamshire left to wait"
]

let moviep=[
    "Says he took the difficult decision to spend more time with his young family",
    "The West Indies captain will join Harmanpreet Kaur at the top of the order",
    "Roy fails again after Livingstone, Moeen lift Phoenix to sufficient 166",
    "Pakistan represents the majority of the additional names in the draft and includes Abdullah Shafique, Imam-ul-Haq and Khushdil Shah",
    "Tom Lawes prevents Surrey capitulation on green pitch",
    "South Africa's towering left-arm quick talks about his upbringing and the hard yards to get to the top",
    "Team-mate hopes his example can encourage others to seek help when they need it",
    "Invincibles' qualification chances are looking healthy after a comprehensive eight wicket win",
    "I will be very happy with whatever comes my way, but the aspirations and dreams never die",
    "We don't have to change the way we play cricket but it is important that we use our resources properly",
    "Zimbabwe fought back from 169 for 7 to fall narrowly short in a chase of 290",
    "The former Australia captain will play club cricket first but the Sheffield Shield is on the horizon",
    "Latham (69), Mitchell (63), Guptill (57) and Conway (56) make short work of a chase of 302",
    "Says he took the difficult decision to spend more time with his young family",
    "The West Indies captain will join Harmanpreet Kaur at the top of the order",
    "Roy fails again after Livingstone, Moeen lift Phoenix to sufficient 166",
    "Pakistan represents the majority of the additional names in the draft and includes Abdullah Shafique, Imam-ul-Haq and Khushdil Shah",
    "Tom Lawes prevents Surrey capitulation on green pitch"
]


   for(let i=0;i<moviearr.length;i++){

    let mainnews=document.getElementById('mainnews')

    let mdiv=document.createElement('div')
    mdiv.setAttribute('class', 'latestnews')

    let div1=document.createElement('div')
    div1.addEventListener('click', newspage)

    let img=document.createElement('img')
    img.src= moviearr[i]

    let div2=document.createElement('div')

    let head=document.createElement('h5')
    head.innerText= moviehead[i]

    let p=document.createElement('p')
    p.innerText= moviep[i]

    div1.append(img)
    div2.append(head,p)
    
    mdiv.append(div1,div2)

    mainnews.append(mdiv)

    console.log(mainnews)
   }

   function newspage(){
    window.location.href="newsclick.html"
   }
   

facility = () =>{
  var body,article;
  body = document.getElementById('body');
  article = document.createElement('article');

  body.appendChild(article);
  
  article.setAttribute('class','article0');

  article.innerHTML+='<div class="container"><div class="row"><h3>Expert Care <span class="color_blue">of the Elderly</span></h3></div></div>';

  
    var facilty_jason= [{
      img:'images/xray.png',
      para:'X-ray Treatment',
    },{
      img:'images/ecg-hospital-heart-electrocardiogram-512.png',
      para:'ECG Treatment'
    },{
      img:'images/ultrasonography.png',
      para:'Sonography Treatment'
    },{
      img:'images/In_Vitro_23-512.png',
      para:'Urin & Blood test',
      
    }]
    facilty_jason.forEach(i=>{
       document.querySelector('article>.container>.row').innerHTML+=`
         <div class="col-md-3">
             <div class="my_facilty pad-10">
                 <img src="${i.img}" class="faci_img">
                 <p>${i.para}</p>
             </div>
         </div>
       `;
    })
 
  

}
facility();


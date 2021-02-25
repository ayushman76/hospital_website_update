banner = () =>{
  var body,section;
  body = document.getElementById('body');
  section = document.createElement('section');

  body.appendChild(section);
 

  section.innerHTML+='<div class="container"><div class="row"></div></div>';

  var banner_jason = [{
      head:'Welcome to Pooja Nursing Home & Hospital',
      para:'<b>Welcome to Pooja Nursing Home & Hospital</b>. We are from <b>Bilaspur Chhattisgarh .Dr. Pooja singh has done M.B.B.S. , D.G.O., F.C.G.P,She is also expert for Obstetrics, Gynecology,infertility.</b>',
      btn:'Call For Appointment'

  },{
      banner_img:'images/hospital.jpg'
  }]
  document.querySelector('section>.container>.row').innerHTML+=`
     <div class="col-md-6">
         <div class="banner_content pad-10">
             <h2>${banner_jason[0].head}</h2>
             <p>${banner_jason[0].para}</p>
             <a href="#" class="my_btn"><i class="fa fa-phone"></i> ${banner_jason[0].btn}</a>
         </div>
     </div>
     <!--//col-md-6-->
     <div class="col-md-6">
         <div class="banner_img">
            <img src="${banner_jason[1].banner_img}" class="img-responsive">
         </div>
     </div>
     <!--//col-md-6-->
  `;

// 7509551011
  

}
banner();


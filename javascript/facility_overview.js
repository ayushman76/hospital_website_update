facility = () => {
    var body, article;
    body = document.getElementById('body');
    article = document.createElement('article');

    body.appendChild(article);
    article.setAttribute('class', 'article01')


    article.innerHTML += '<div class="container"><div class="row"><h3>Available <span class="color_blue">Facility</span></h3></div></div>';

    var facility_overview = [{
        img: 'images/about_image1-removebg-preview.png'

    }, {
        list01: '24 Hours Emergency Operation',
        list02: 'Treatment & Operation',
        list03: 'Fully Air Condition Nursing Home',
        list04: 'A/c Private Deluxe Ward',

    }]
    document.querySelector('.article01>.container>.row').innerHTML += `
     <div class="col-md-6">
         <div class="facility_overview pad-10">
              <img src="${facility_overview[0].img}" class="img-responsive">
         </div>
     </div>
     <!--//col-md-6-->
     <div class="col-md-6">
         <div class="facility_list">
             <ul class="nav">
                <li><a class="text"><i class="fa fa-ambulance icon" style="font-size:24px"></i>&nbsp; ${facility_overview[1].list01}</a></li>
                <li ><a class="text"><i class="fa fa-stethoscope icon" style="font-size:24px"></i>&nbsp; ${facility_overview[1].list02}</a></li>
                <li><a class="text"><i class="fa fa-medkit icon" style="font-size:24px"></i>&nbsp; ${facility_overview[1].list03}</a></li>
                <li><a class="text"><i class="fa fa-heart-o icon" style="font-size:24px"></i>&nbsp; ${facility_overview[1].list04}</a></li>
             </ul>
         </div>
     </div>
     <!--//col-md-6-->
  `;

    // 7509551011


}
facility();
service_featured = () => {
    var body, article;
    body = document.getElementById('body');
    article = document.createElement('article');

    body.appendChild(article);
    article.setAttribute('class', 'article02')


    article.innerHTML += '<div class="container"><div class="row"><h3>Our <span class="color_blue">Treatments</span></h3></div></div>';

    var service_overview = [{
        img: 'images/normal_delevery.jpg',
        serv: 'Normal Delivery',

    }, {
        img: 'images/Menstrual-Problems.jpg',
        serv: 'Menstrual Treatment',

    }, {
        img: 'images/high-risk-pregnancy-1.png',
        serv: 'High-Risk-Pregnancy',

    }, {
        img: 'images/Obstetrics-Gynecology.jpg',
        serv: 'Obstetrics-Gynecology',

    }];

    service_overview.forEach(i => {
        document.querySelector('.article02>.container>.row').innerHTML += `
                           
            <div class="col-md-3">
                <div class="service_featured pad-10">
                    <img src="${i.img}" class="img-responsive">
                    <p class="my_service_name">${i.serv}</p>
                </div>
            </div>
            <!--//col-md-3-->
          `;

    })




}
service_featured()

var btn = function() {
    var body = document.getElementById('body');
    var a = document.createElement('div');
    body.appendChild(a);
    a.setAttribute('class', 'text-center pad-10')
    a.innerHTML += '<a href="treatment.html" class="my_btn">View Services</a>';
}
btn();
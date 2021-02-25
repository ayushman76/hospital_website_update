(function() {

    var body = document.getElementById('body');
    var footer = document.createElement('footer');
    body.appendChild(footer);
    footer.innerHTML += "<div class='layer'><div class='container'><div class='row'></div></div></div>";
    var Footer_Data = [{
            footer_nav01: "Home",
            footer_nav02: "About",
            footer_nav03: "Service",
            footer_nav04: "Gallery",
            footer_nav05: "Contact Us"
        },
        {
            footer_Service01: "24 Hours Emergency Operation",
            footer_Service02: "Treatment & Operation",
            footer_Service03: "Fully Air Condition Nursing Home",
            footer_Service04: "On call surgeon facility available for general surgey like hernia,appendix,kidney stone and gall stone operation",
        },
        {
            footer_adsress: "Front of Old High Court,beside of Canara Bank Bilaspur (495001)",
            footer_phone: "07752-400130",
            footer_phone01: "78288-07181",
            footer_email: "poojanursing@gmail.com"
        }
    ];
    document.querySelector('footer>.layer>.container>.row').innerHTML += `
     <div class="col-md-4">
     <div class="footer_nav">
     <p>My Navigation</p>
     <ul class=" nav">
     <li><a href="index.html">${Footer_Data[0].footer_nav01}</a></li>
     <li><a href="about.html">${Footer_Data[0].footer_nav02}</a> </li>
     <li><a href="treatment.html">${Footer_Data[0].footer_nav03}</a>
     </li>
     <li><a href="gallery.html">${Footer_Data[0].footer_nav04}</a>
     </li>
     <li><a href="contact.html">${Footer_Data[0].footer_nav05}</a>
     </li>
     </ul>
     </div>
     </div>
     <div class="col-md-4">
     <div class="footer_nav">
     <p>Our facilities</p>
     <ul class="navbar-nav nav">
     <li><a href="">${Footer_Data[1].footer_Service01}</a>
     </li>
     <li><a href="">${Footer_Data[1].footer_Service02}</a>
     </li>
     <li><a href="">${Footer_Data[1].footer_Service03}</a>
     </li>
	 <li><a href="">${Footer_Data[1].footer_Service04}</a>
     </li>
     </ul>
     </div>
     </div>
     <div class="col-md-4">
     <div class="footer_nav">
     <p>Address</p>
     <ul class="navbar-nav nav">
     <li><a href="">${Footer_Data[2].footer_adsress}</a>
     </li>
     <li><a href="tel:${Footer_Data[2].footer_phone}">${Footer_Data[2].footer_phone}</a>
     </li>
	 <li><a href="tel:${Footer_Data[2].footer_phone01}">${Footer_Data[2].footer_phone01}</a>
     </li>
     <li><a href="mailto:${Footer_Data[2].footer_email}">${Footer_Data[2].footer_email}</a>
     </li>
     </ul>
     </div>

     </div>
     
	 </div>
     `;

})(); //footer function
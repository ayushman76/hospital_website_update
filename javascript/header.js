header = () => {
var body,header;
body = document.getElementById('body');
header = document.createElement('header');

body.appendChild(header)
header.innerHTML+='<div class="container"><div class="row"></div></div>';

var header_jason = [{
logo:'Pooja Nursing<span class="color_blue">  Home & Hospital Bilaspur (C G).</span>',
},{
con_email:'hospital@gmail.com',
con_phone:'8728247284',
con_phone01:'8638446849'

}]

document.querySelector('header>.container>.row').innerHTML+=`
<div class="col-md-6">
<div class="my_logowidget pad-10">
<h1 class="logo">${header_jason[0].logo}</h1>
</div>
</div>
<!--//col-md-6-->
<div class="col-md-6">
<div class="my_widget pad-10">
<ul class="navbar-nav nav pad-10">
<li><a href="#"><i class="fa fa-phone"></i> ${header_jason[1].con_phone}</a></li>
<li><a href="#"><i class="fa fa-phone"></i> ${header_jason[1].con_phone01}</a></li>
<li><a href="#"><i class="fa fa-envelope"></i> ${header_jason[1].con_email}</a></li>
</ul>
</div>

</div>
`;

}
header();
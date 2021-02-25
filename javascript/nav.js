(function(){
var nav,body;

    body = document.getElementById('body');
    nav = document.createElement('nav');

    body.appendChild(nav);

    nav.innerHTML+='<div class="container"><div class="row"></div></div>';

    var nav_jason = [{

        menu01:'Home',
        menu02:'About',
        menu03:'Treatment',
        menu04:'Gallery',
        menu05:'Contact Us'

    },{
       link01:'index.html',
       link02:'about.html',
       link03:'treatment.html',
       link04:'gallery.html',
       link05:'contact.html'
    },{
       btn01:'Get Appointment'
    }]

    document.querySelector('nav>.container>.row').innerHTML+=`
       <div class="col-md-8">
            <div class="navigation me">
                <ul class="navbar-nav nav">
       <li>
	    <a href="${nav_jason[1].link01}">${nav_jason[0].menu01}</a>
	</li>
	<li>
	    <a href="${nav_jason[1].link02}">${nav_jason[0].menu02}</a>
	</li>
	<li>
	    <a href="${nav_jason[1].link03}">${nav_jason[0].menu03}</a>
	</li>
	<li>
	    <a href="${nav_jason[1].link04}">${nav_jason[0].menu04}</a>
	</li>
	<li>
	    <a href="${nav_jason[1].link05}">${nav_jason[0].menu05}</a>
	</li>

                </ul>
            </div>
       </div>
       <!--//col-md-8-->
       <div class="col-md-4">
            <div class="navigation_btn">
                <ul class="navbar-nav nav">
                    <li>
	    <a href="${nav_jason[1].link05}"><i class="fa fa-calendar" aria-hidden="true"></i> ${nav_jason[2].btn01}</a>
	</li>
	
                </ul>
            </div>
			<i class="fa fa-bars menu-btn" onclick="menu()"></i>
       </div>
        <!--//col-md-4-->
    `;

})()
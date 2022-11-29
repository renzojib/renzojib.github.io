window.onload = () => {
	var nav = document.getElementById("nav");
	var navUl = document.getElementById("nav-list");
	var homeA = document.getElementById("home-a");
	var oldiesA = document.getElementById("oldies-a");
	var projectsA = document.getElementById("projects-a");
	var aboutA = document.getElementById("about-a");
	var menuOpen = document.getElementById("nav-img-open");
	var menuClose = document.getElementById("nav-img-close");
	var aboutH2 = document.getElementById("about-h2");
	var aboutP = document.getElementById("about-p");
	var contact = document.getElementById("contact");
	var project1 = document.getElementById("view-project1");
	var project2 = document.getElementById("view-project2");
	var oldies2022 = document.getElementById("2022");
	var oldies2023 = document.getElementById("2023");
	var tbc = document.getElementById("tbc");
	
	contact.onclick = () => {
		open("mailto:ojibaebuka@yahoo.com")
	}
	
	project1.onclick = () => {
		open("https://renzojib.pythonanywhere.com/cdde/default/index")
	}
	
	project2.onclick = () => {
		open("https://www.figma.com/proto/cNGxMQPOO1jIyQsC2L6Y95/Ridgeline?scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A3&node-id=5%3A3")
	}
	
	oldies2022.onclick = () => {
		open("oldies/2022/index.html","_self");
	}
	
	oldies2023.onclick = () => {
		if(window.screen.width < 480) {
			tbc.style.fontSize = "4rem"
		}
		tbc.style.textShadow = "rgb(255,255,255) 1px -3px 4px";
	}
	
	oldies2023.onmouseout = () => {
		if(window.screen.width < 480) {
			tbc.style.fontSize = "3rem"
		}
		tbc.style.textShadow = "none";
	}
	
	if(window.screen.width < 480) {
		menuOpen.onclick = () => {
			nav.style.height = "max(1024px,100vh)";
			nav.style.textAlign = "center";
			nav.style.backgroundColor = "rgb(0,0,0)";
			navUl.style.display = "block";
			menuOpen.style.display = "none";
			menuClose.style.display = "inline-block";
			homeA.style.color = "rgb(255,255,255)";
			oldiesA.style.color = "rgb(255,255,255)";
			projectsA.style.color = "rgb(255,255,255)";
			aboutA.style.color = "rgb(255,255,255)";
			
		};
		
		function menuCls() {
				nav.style.height = "max(512px,50vh)";
				nav.style.textAlign = "right";
				nav.style.backgroundColor = "transparent";
				navUl.style.display = "none";
				menuOpen.style.display = "inline-block";
				menuClose.style.display = "none";
				homeA.style.color = "rgb(0,0,0)";
				oldiesA.style.color = "rgb(0,0,0)";
				projectsA.style.color = "rgb(0,0,0)";
				aboutA.style.color = "rgb(0,0,0)";
		}
		
		menuClose.addEventListener("click", menuCls);
		homeA.addEventListener("click", menuCls);
		oldiesA.addEventListener("click", menuCls);
		projectsA.addEventListener("click", menuCls);
		
		aboutA.onclick = () => {
				nav.style.height = "max(512px,50vh)";
				nav.style.textAlign = "right";
				nav.style.backgroundColor = "transparent";
				navUl.style.display = "none";
				menuOpen.style.display = "inline-block";
				menuClose.style.display = "none";
				homeA.style.color = "rgb(0,0,0)";
				oldiesA.style.color = "rgb(0,0,0)";
				projectsA.style.color = "rgb(0,0,0)";
				aboutA.style.color = "rgb(0,0,0)";
				aboutH2.style.fontSize = "6rem"
				aboutP.style.fontSize = "2.5rem"
				
		};
	}
	
	
	//--------------
	
	(function(){

    var doc = document.documentElement;
    var w   = window;

    /*
    define four variables: curScroll, prevScroll, curDirection, prevDirection
    */

    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;

    /*
    how it works:
    -------------
    create a scroll event listener
    create function to check scroll position on each scroll event,
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0
    then set the direction value to curDirection
    compare curDirection and prevDirection
    if it is different, call a function to show or hide the header
    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > already hidden, do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
    */

    var toggled;
    var threshold = 30;

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        }
        else {
            //scrolled up
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleHeader();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };

    var toggleHeader = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            nav.style.position = "fixed";
            nav.style.width = "100vw";
			homeA.style.color = "rgb(255,255,255)";
			oldiesA.style.color = "rgb(255,255,255)";
			projectsA.style.color = "rgb(255,255,255)";
			aboutA.style.color = "rgb(255,255,255)";
			nav.style.backgroundColor = "rgb(0,0,0)";
			nav.style.opacity = "0.3";
			
			nav.onmouseover = ()=> {
				nav.style.opacity = "1"
			}
        }
        else if (curDirection === 1) {
            nav.style.position = "absolute";
            nav.style.width = "70vw";
			homeA.style.color = "rgb(0,0,0)";
			oldiesA.style.color = "rgb(0,0,0)";
			projectsA.style.color = "rgb(0,0,0)";
			aboutA.style.color = "rgb(0,0,0)";
			nav.style.backgroundColor = "transparent";
			nav.style.opacity = "1"
			
			
        }
        else {
            toggled = false;
        }
        return toggled;
    };
	if(window.screen.width > 480) {
		window.addEventListener('scroll', checkScroll);
	}
    

})();
}
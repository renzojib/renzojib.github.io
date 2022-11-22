window.onload = () => {
	var btn = document.getElementById("btn")
	var home = document.getElementById("home")
	var projects = document.getElementById("projects")
	var about = document.getElementById("about")
	var sPortfolio = document.getElementById("s-portfolio")
	var nav = document.querySelector("nav")
	var navStyle = window.getComputedStyle(nav)
	var navHt = navStyle.getPropertyValue("height")
	var cr = document.getElementById("cr")
	var crm = document.getElementById("crm")
	
	if(btn) {
		btn.onclick = () => {
		open("mailto:ojibaebuka@yahoo.com")
	}
	}
	
	home.onclick = () => {
		open("index.html", "_self")
	}
	
	projects.onclick = () => {
		open("projects.html", "_self")
	}
	
	about.onclick = () => {
		open("index.html", "_self")
	}
	
	cr.onclick = () => {
		open("https://www.figma.com/proto/cNGxMQPOO1jIyQsC2L6Y95/Ridgeline?scaling=scale-down&page-id=0%3A1&starting-point-node-id=5%3A3&node-id=5%3A3")
	}
	
	crm.onclick = () => {
		open("https://renzojib.pythonanywhere.com/cdde/default/index")
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
    var threshold = 100;

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
            nav.style.visibility = "hidden"
        }
        else if (curDirection === 1) {
            nav.style.visibility = "visible"
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);

})();
}
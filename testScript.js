function highlight(name)
{
	document.getElementById(name).style.color = "red";
}
function unhighlight(name)
{
    document.getElementById(name).style.color = "";
}
function holdHighlight(name)
{
	var colored = false;
	if(document.getElementById(name).style.color == "red")
	{
		colored = true;
		
	}
	else
	{
	    colored = false;	
	}
	
	if(colored == false)
	{
	    document.getElementById(name).style.color = "red";
		return;
	}
	else
	{
	    document.getElementById(name).style.color = "";	
		return;
	}
}
function transformLine(x,y,angle,width,length,name)
{
	document.getElementById(name).style.position = "absolute";
	document.getElementById(name).style.left = x + 'px';
	document.getElementById(name).style.top = y + 'px';
    document.getElementById(name).style.transform = "rotate(" + angle + "deg)";
	document.getElementById(name).style.width = width + 'px';
	document.getElementById(name).style.height = length + 'px';
	
}
function transform(x,y,name)
{
     document.getElementById(name).style.position = "absolute";
     document.getElementById(name).style.left = x + 'px';
	 document.getElementById(name).style.top = y + 'px';
	
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
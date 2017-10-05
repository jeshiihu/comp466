
var index = 0;
var photos = {
	"img": ["Photos/img1.jpg", "Photos/img2.jpg", "Photos/img3.jpg", "Photos/img4.jpg",
		  "Photos/img5.jpg", "Photos/img6.jpg", "Photos/img7.jpg", "Photos/img8.jpg",
		  "Photos/img9.jpg", "Photos/img10.jpg", "Photos/img11.jpg", "Photos/img12.jpg",
		  "Photos/img13.jpg", "Photos/img14.jpg", "Photos/img15.jpg", "Photos/img16.jpg",
		  "Photos/img17.jpg", "Photos/img18.jpg", "Photos/img19.jpg", "Photos/img20.jpg"],
	"caption": ["Stanley Park Totem Poles", "Hidden Trail at Stanley Park", 
				"Ships Ahoy at Jericho Beach", "Jericho Beach", "Crab Hunting", 
				"All hands on deck!", "Jericho Beach Pier", "Could this be a shark?", 
				"Whytecliff Park", "Driving to Whytecliff", "English Bay", 
				"Lindeman Lake", "Horseshoe Bay", "Sunset at Whytecliff", "Cleveland Dam", 
				"Lions Gate Bridge at Night", "It's a year to celebrate!", "BC Ferry to Victoria, BC", 
				"Victoria Island View from the waters", "Richmond World Fest - Dragonette"]
};

var shuffle = false;
var shuffledList = new Array();

var slideshow = document.getElementById('slideshow');
var context = slideshow.getContext('2d');
window.onload = function()
{
	var image = GetImage(0)
}

function GetImage()
{
	var im = new Image();
	im.onload = function() {
    	DisplayImage(im)
    };
	im.src = photos.img[index];
	var photoIndex = document.getElementById("photoIndex");
	var photoNum = index + 1;
	photoIndex.textContent = "Photo " + photoNum;

}

var fps = 60;
var cbxEffect = document.getElementById("effect");
var alpha = 0.00;
function DisplayImage(im)
{
	context.fillRect(im, 0, 0, slideshow.width, slideshow.height);

	var done = false;
	for(var i = 0; i < 1000000; i++)
	{
		setTimeout(function()
		{
			ContextMod(im);
	 	}, 100);
	 	// Sleep(10);
	}
}

function ContextMod(im)
{
	alpha = (cbxEffect.value == "fade") ? alpha + 0.01 : 1;

	context.globalAlpha = alpha;
	context.imageSmoothingEnabled = true;
	context.drawImage(im, 0, 0, slideshow.width, slideshow.height);

    context.fillStyle = 'rgba(58,58,58,0.5)';
	context.fillRect(0,slideshow.height-50, slideshow.width,50);

	context.font = "15pt Lato";
	context.fillStyle = "white";
	context.textAlign = "center";
    context.fillText(photos.caption[index], slideshow.width/2, slideshow.height-20);
}

function Sleep(ms)
{
	var currTime = new Date().getTime();
	while((currTime + ms) >= new Date().getTime());
}

function IsFinished()
{
	if(cbxEffect.value == "none")
		return true;

	if(cbxEffect.value == "fade");
	{
		if(alpha > 1.00)
		{
			alpha = 0.00;
			return true;
		}
	}
}

var cbxSize = document.getElementById("size");
cbxSize.onchange = function()
{
	if(cbxSize.value == "l")
	{
		slideshow.width = "1024";
		slideshow.height= "768";
	}
	else if(cbxSize.value == "m")
	{
		slideshow.width = "640";
		slideshow.height= "480";
	}
	else
	{
		slideshow.width = "320";
		slideshow.height= "240";
	}

	GetImage();
}

var shuffleBtn = document.getElementById("shuffle");
shuffleBtn.onclick = function() 
{
	if(shuffleBtn.getAttribute("src") == "Icons/shuffle_off.png")
	{
		shuffleBtn.setAttribute("src", "Icons/shuffle_on.png");
		shuffle = true;
		shuffledList.push(index);
	}	
	else
	{
		shuffleBtn.setAttribute("src", "Icons/shuffle_off.png");
		shuffle = false;
	}	
}

var playBtn = document.getElementById("playStop");
var interval;
playBtn.onclick = function() 
{
	if(playBtn.getAttribute("src") == "Icons/play.png")
	{
		playBtn.setAttribute("src", "Icons/stop.png");
		interval = setInterval(function(){ DisplayImageTimed() }, 2000);
	}
	else
	{
		playBtn.setAttribute("src", "Icons/play.png");
		clearInterval(interval)
		shuffledList = new Array();
	}
}

function DisplayImageTimed()
{
	if(!shuffle)
		index++
	else
		index = GetRandom();
	GetImage();
}

function GetRandom()
{
	if(shuffledList.length == photos.img.length)
		shuffledList = new Array();

	var newIndex = Math.floor(Math.random() * (photos.img.length-1));
	if(shuffledList.indexOf(newIndex) > -1)
		return GetRandom();

	shuffledList.push(newIndex);
	return newIndex;
}

var prevArrow = document.getElementById('prevArrow');
prevArrow.onclick = function() 
{
	if(shuffle) return;

	if(index == 0)
		index = 19;
	else
		index--;
	GetImage();
}

var nextArrow = document.getElementById('nextArrow');
nextArrow.onclick = function() 
{
	if(shuffle) return;

	if(index == 19)
		index = 0;
	else
		index++;
	GetImage();
}

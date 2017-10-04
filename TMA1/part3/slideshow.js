
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

var slideshow = document.getElementById('slideshow');
var context = slideshow.getContext('2d');
window.onload = function()
{
	var image = GetImage(0)
}

// var im = new Image();
function GetImage()
{
	var im = new Image();
	im.onload = function() {
    	DisplayImage(im);
    };
	im.src = photos.img[index];
}

function DisplayImage(im)
{
	context.imageSmoothingEnabled = true;
	context.drawImage(im, 0, 0, slideshow.width, slideshow.height);

    context.fillStyle = 'rgba(58,58,58,0.5)';
	context.fillRect(0,slideshow.height-50, slideshow.width,50);

	context.font = "15pt Lato";
	context.fillStyle = "white";
	context.textAlign = "center";
    context.fillText(photos.caption[index], slideshow.width/2, slideshow.height-20);
}

var prevArrow = document.getElementById('prevArrow');
prevArrow.onclick = function() 
{
	if(index == 0)
		index = 19;
	else
		index--;
	GetImage();
}

var nextArrow = document.getElementById('nextArrow');
nextArrow.onclick = function() 
{
	if(index == 19)
		index = 0;
	else
		index++;
	GetImage();
}

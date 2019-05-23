document.getElementById("search-button").onclick = function(){
	let num = document.getElementById("search-input").value; 
	

	let fig = document.getElementsByTagName("figure")[0].innerHTML;
	console.log(fig);

	document.getElementById("thumbnails").innerHTML = "";

	for(let i= 0; i < num; i++){
		document.getElementById("thumbnails").innerHTML += `<figure><img class="responsive-image">${fig}</figure>`;
	}
}
var $img = $('#content img'),
    imageWidth = $img[0].width, //need the raw width due to a jquery bug that affects chrome
    imageHeight = $img[0].height, //need the raw height due to a jquery bug that affects chrome
    maxWidth = $(window).width(),
    maxHeight = $(window).height(),
    widthRatio = maxWidth / imageWidth,
    heightRatio = maxHeight / imageHeight;

var ratio = widthRatio; //default to the width ratio until proven wrong

if (widthRatio * imageHeight > maxHeight) {
    ratio = heightRatio;
}

//now resize the image relative to the ratio
$img.attr('width', imageWidth * ratio)
    .attr('height', imageHeight * ratio);

//and center the image vertically and horizontally
$img.css({
    margin: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
});

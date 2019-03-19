document.getElementById("search-button").onclick = function(){
	let num = document.getElementById("search-input").value; 
	

	let fig = document.getElementsByTagName("figure")[0].innerHTML;
	console.log(fig);

	document.getElementById("thumbnails").innerHTML = "";

	for(let i= 0; i < num; i++){
		document.getElementById("thumbnails").innerHTML += `<figure><img class="responsive-image">${fig}</figure>`;
	}
}
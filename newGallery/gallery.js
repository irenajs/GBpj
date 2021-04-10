function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
    var prev = document.getElementById("previous");
    prev.onclick = previous;

    var n = document.getElementById("next");
    n.onclick = next;
}
function changeBigPicture(eventObj) {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.id.split("_");
    var src = "img/big" + imageNameParts[1] + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    appDiv.appendChild(imageDomElement);
}
var m = 1;
function next() {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var src = "img/small/" + m + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    appDiv.appendChild(imageDomElement);
    m++;

}
function previous() {
    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var src = "img/small/" + m + ".jpg";
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    appDiv.appendChild(imageDomElement);
    m--;

}
window.onload = init;








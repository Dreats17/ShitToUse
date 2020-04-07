var elem = document.getElementById("main-logo");
elem.parentNode.removeChild(elem);
$( "a.WireframeButtons_button" ).remove();
var lem = document.getElementById("footerDiv");
lem.parentNode.removeChild(lem);
var element = document.getElementById("visualizationColumn");
element.classList.remove("wireframeShare");
var butGone = document.getElementById("gameButtons");
butGone.parentNode.remove("gameButtons");
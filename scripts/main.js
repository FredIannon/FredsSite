var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world from JS!';

document.querySelector('html').style.backgroundColor = 'purple';

/*
var myImage = document.createElement('img');
myImage.setAttribute('src','https://blog.mozilla.org/press/wp-content/themes/OneMozilla/img/mozilla-wordmark.png');
document.querySelector('h1').appendChild(myImage);
*/

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/SteelersLogo.png') {
      myImage.setAttribute ('src','images/PennStateLogo.jpg');
    } else {
      myImage.setAttribute ('src','images/SteelersLogo.png');
    }
}

var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')

function setUserName()
{
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Hello ' + myName
}


if (!localStorage.getItem('name'))
{
	setUserName()
}
else
{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Hello ' + storedName;
}

myButton.onclick = function()
{
	setUserName()
}

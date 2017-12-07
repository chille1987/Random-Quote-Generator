/*
	name: 'Random Quote Generator',
	description: 'JavaScript app that prints random quotes based on user interaction',
	author: 'Denis Omerović',
	year: 2017
*/

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, true);


//Picking a random number in array of quotes and returning a random quote from that array
function getRandomQuote() {
		var randomQuotePicker = Math.floor(Math.random() * quotes.length);
		return quotes[randomQuotePicker];
}

//Function that picks random number between 0 and 256
function randomColorNumber() {
	return Math.floor(Math.random() * 256);
}

//Random RGB values
function randomRGB() {
	var color = 'rgb(';
	color += randomColorNumber() + ',';
	color += randomColorNumber() + ',';
	color += randomColorNumber() + ')';
	return color;
}

var change;

//Function that change quote every 5 seconds
function changeQuote() {
	change = setInterval(printQuote, 5000);
}

//Defining function to stop changing quotes after 5 seconds
function stopChangeQuote() {
	clearInterval(change);
}

//Print function that calls getRandomQuote and prints random quote into HTML
function printQuote() {
	var rgb = randomRGB();
	var randomQuote = getRandomQuote();
	var printRandomQuote = '<p class="quote">' + randomQuote.quote + '</p>';
	printRandomQuote += '<p class="source">' + randomQuote.source;
	if(randomQuote.hasOwnProperty('citation')) {
		printRandomQuote += '<span class="citation">' + randomQuote.citation + '</span>';
	}
	if(randomQuote.hasOwnProperty('year')) {
		printRandomQuote += '<span class="year">' + randomQuote.year + '</span>';
	}
	printRandomQuote += '</p>';
	if(randomQuote.hasOwnProperty('tags')) {
		printRandomQuote += '<p class="tags">' + 'Tags: ' + randomQuote.tags + '</p>';
	}
	//Printing random quote in HTML
	document.getElementById('quote-box').innerHTML = printRandomQuote;
	//Changing background color
	document.getElementById('body').style.backgroundColor = rgb;
}
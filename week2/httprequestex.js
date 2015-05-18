

var request = new XMLHttpRequest(); // create a new HTTP object
// The XMLHttpRequest object is used to exchange data with a server behind the scenes to update a webpage without reloading
request.open("GET", 'name.txt',false); //use the open method on the HTTP object
// setting the 3rd parameter to false means that the send method does not return until until the open request has returned. 
// setting it to true means it runs in the background so you have to wait until you know tha status of the request is 4 (i.e. it has returned) before calling the send method
request.send(null);
print(request.responseText);
print(request.statusText);


//alternatively if the 3rd parameter in open is set to true. 

request.open("GET", 'name.txt',true);
request.send(null);

request.onreadystatechange = function() {
	if(request.readyState == 4) {
		print(request.responseText);
	};
});





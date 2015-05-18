#Front End Devs
## What is an HTTP request? 

HTTP stands for Hyper Text Transfer protocol, and this is basically an agreed upon method that defines how computers communicate with each other. Whenever you use a browser(or an application) to view a website you are using the HTTP protocol. 

### HTTP cycle 

Whenever you visit a web page on the web your browser makes a request to a webserver to load that websites onto your browswer. so for example, when you visit: http://wikipedia.org your browser uses the HTTP protocol to request the pages for Wikipedia and the web server (another computer on the Internet) will send back the pages to your browser. The data that the web server sends back is typically HTML mark up code, CSS, and JavaScript. Your broswer then renders the web page along with the CSS styling and any JS logic that the pages need. This is all done very quickly, but there are several streps involved when you request a page from a webserver. 

**Step 1:** Type in the URL of the web page you wish to view

**Step 2:** Your request is sent using the HTTP protocol across the Internet 

**Step 3:** The web server(in our example wikipedia's web server) receives the request and looks to see if the page requested is there. 

**Step 4:** The web server sends back the web page requested as data via the Internet, again using the HTTP protocol. 

**Step 5:** The browser receives the data sent by the web server and renders this to make it viewable to the reader. So, this involves rendering the mark up, CSS and any JS logic. 

### Summary 

So essentially, HTTP is a method that both client (browser) and server use to communicate with each other and make sure everything is consistent in their communication. 

# How to make an HTTP request in vanilla JS

There are four steps involved in making an HTTP request in JS: 

**1.** Create an XMLHTTP request object 

**2.** Define a call back function -

This is the programming that is run when the server responds with the data along with the logic that to update the DOM. 

**3.** Open a request 

This step gives the browser two pieces of information  the method the browser will use to send the request, usually either get or post, and the URL where the request is sent (the web server). 

**4.** Send the request 

The last step is to actually send the request. The previous three steps gave the web browser all the information it needs so we can finally send off the request to the web server.

### Summary 

To make an HTTP request using vanilla JavaScript you will need to follow four steps. XMPHTTPRequest is a JS object that was first designed by Microsoft in the late 90's and was later adopted as a standard the web community, it is now in the process of being standardized by the W3 consortium. The XMLHTTPRequest object has many methods and properties, however you will most likely use only a few of these methods and properties. 

#Notable properies and methods that are used in an HTTP request are: 

onreadystatechange
This is a property that stores a call back function that is called every time the readyState property changes. 

readyState 
This property holds the status of the XMLHTTPRequest object as it changes from 0 to 4. Here's a breakdown of the 4 states in the readyState property: 

0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready

The state that you will need to be checking for is 4, as this means that the request has finished and the the server has sent all of the data. 

### AJAX?

Whenever you talk about HTTP request you will likely come across AJAX. AJAX stands for Asynchronous JavaScript And XML. This basically means using making HTTP requests asynchronously to update a web page without reloading the whole page. 

The format that data is sent in from servers in most cases is JSON - JavaScript Object Notation, but the name has stuck from the days that XML was used exclusively or maybe it was hard to pronounce AJSON? 


### Another way for making HTTP calls 

Besides using vanilla JS you can use many different libraries to make HTTP requests, the most common way is to use the hugely popular JQuery library. There are methods available in JQuery that abstract away some of the steps involved such as the $.get() method.  



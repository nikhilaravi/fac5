#HTTP Request with javascript

We use Asychronus JavaScript and XML (AJAX) to create http request with javascript. Specifically we use the XMLHttpRequest javascript object to communicate with the server. This object can send and receive information. XMLHttpRequest is also asychronus and can send/recieve information without reloading the brower.

##Step1: How to make an HTTP request

We first create the XMLHttpRequest:

```javascript
var httpRequest = new XMLHttpRequest();
```
We create a function to execute when we receive the response of the server. For that we need to define a function to the property onreadystatechange.

```javascript
    httpRequest.onreadystatechange = function(){
      console.log("The state of the request change");
      return "state changed";
    }
```
Now we need to actually make the http request. We use two methods open and send.

```javascript
httpRequest.open('GET', 'http://mywebsite.com',true);
httpRequest.send(null);
```
Parameter of the open method:
- The first one is the request method (GET, POST or othe)
- The second one is the URL
- the third one which is optional define if the request is asychronous and if the script should wait the response of the server before continuing the javascript code. It's set to true by default.

Parameter of the send method:
- The information you wan to send to the server.

##Step2: Handling the server response

You can check the state of the request with the property readyState:

```javascript
httpRequest.readyState; //return a number between 0 and 4
```
- 0, uninitialized
- 1, loading
- 2, loaded
- 3, interactive (processing request)
- 4, complete

So when the readyState property is equal to 4 it mean that the response has been properly receive by the client.

```javascript
if(httpRequest.readyState === 4){
  //code ok we can continue
}
else{
  //response not ready
}
```

Next we need to check the status of the http server response. The status 200 means that everything is OK.

```javascript
if(httpRequest.status === 200){
  //everything is OK
}
else{
  //Problem
}
```

Finally you have to method for accessing the response of the server:
- responseText, returns the response as a string
- responseXML, returns a XMLDocument object

## a GET Wrapper

To simplify all the previous steps we can create a wrapper. This wrapper is a function which takes two parameters, the URL and a function you want to call when the response is received. The wrapper

```javascript
function AjaxGetRequest(url, callback){
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        callback(httpRequest.responseText);
      } else {
        console.log('There was a problem with the request.');
      }
    }
  };
  httpRequest.open(method, url, true);
  httpRequest.send(null);
};
```

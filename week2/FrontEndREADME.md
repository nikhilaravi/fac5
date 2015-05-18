#Front End Devs

##HTTP Requests

Hypertext Transfer Protocol is a text language that allow two machines to communicate.

####Step 1

Every communication start with a request. A request is a text message which has the HTTP format. The test message is created by a client (brower, application, ...) and is sent to a server.
Example of a request:

    GET / HTTP/1.1
    Host: google.com
    Accept: text/html
    User-Agent: Mozilla/5.0 (Macintosh)

The first line contains the URI (here it's just / but can be /contacts or whatever the server can reply) and the http method (GET) whic define what to do with the URI.

The most important method in HTTP are:

- GET Retrieve the resource from the server
- POST Create a resource in the server
- PUT Update a resource on the server
- DELETE Delete the resource on the server

You can find in total 9 http methods but GET and POST are the most important ones.

The others lines of the request example are called request headers and contain information about the server Host, the response format the client accept and the application the client use to send request. There are a lot more (http://en.wikipedia.org/wiki/List_of_HTTP_header_fields[header Request])

####Step 2

The server returns a response.

    HTTP/1.1 200 OK
    Date: Sat, 02 Apr 2011 21:05:05 GMT
    Server: lighttpd/1.4.19
    Content-Type: text/html
    
    <html>
      <!-- ... HTML for the xkcd comic -->
    </html>

The first line is the http resoponse status.
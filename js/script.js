console.log(1);
console.log(2);


setTimeout(() =>{
    console.log('callback function fired');
},2000);

console.log(3);
console.log(4);
console.log(5);


//USING JSON PLACEHOLDER API AS DEMO
//eg of an endpoint ( https://jsonplaceholder.typicode.com/todos/1) from jsonplaceholder free REST api


//HTTP REQUESTS
//We make requests to endpoints that are given by databases, this databases then send us back response data in the form of json file
//We normally use the GET request to get data from a database
//There are several http request methods
//GET-when we get data

//POST-used to send data

//PUT- used to update data

//DELETE-delete data

//Making a rewuest using the XML format

const request =new XMLHttpRequest();//Now this creates a request object, remember the keyword request,new and XMLHttpRequest.

//the request object is built in the js engine and it coms with some methods that we can use on it,such as the .open method
//the open method takes a number of arguements, the first being a string which is the type of htttp request method we want to use, eg GET,PUT,POST,DELETE
//THE second arguement is the api endpoint we want to use

//However at the moment we do not know the status of our request, whether it has encountered a problem or its successful, we can solve for this using the readystatechange eventlistener that is normally attached to our request object

request.addEventListener('readystatechange', ()=>{
    console.log(request, request.readyState);//.readystate will trigger the console to print out the state of our request,normally there are 5 types of states.0,1,2,3,4.
});

//console will print out 4 states of our request, lets head to the mdn developer docs and see whats this states mean
/* 
0=UNSENT==	Client has been created. open() not called yet.
1=OPENED==open() has been called.
2=HEADERS_RECEIVED==send() has been called, and headers and status are available.
3=LOADING==Downloading; responseText holds partial data.
4=DONE==The operation is complete.
 */

//readystate 4 is the most important thing

request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4){
        console.log(request.responseText);//.responseText is the property containing the response data from the server, the console returns a json file
    }
});




request.open('GET', ' https://jsonplaceholder.typicode.com/todos/');//this is just setting up the request , to send it, we use the .send() method



request.send();


//STATUS CODES
//Checking the state of the request is not enough,lets say there is an error,like a misspelled endpoint, that the state is not able to catch,we shouls also check the status code to be sure our request is fully successful, there are various types of status codes ranges from mdn docs
/* 
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
*/

//200 status code is the expected code for a successful request from the client side

request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);//.responseText is the property containing the response data from the server, the console returns a json file
         }
         else if(request.readyState === 4){
            console.log('error making a request');
         }
});

request.open('GET', ' https://jsonplaceholder.typicode.com/todos/');//this is just setting up the request , to send it, we use the .send() method



request.send();




//EXAMPLE WITH A MISPELLED ENDPOINT
/* 
request.open('GET', ' https://jsonplaceholder.typicode.com/todosS/');//this is just setting up the request , to send it, we use the .send() method



request.send();
 */






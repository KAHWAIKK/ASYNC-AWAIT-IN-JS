console.log(1);
console.log(2);


setTimeout(() =>{
    console.log('fire me after 2000 milliseconds to demo the async nature of callback functions in javascript');
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

//Making a request using the XML format

//const request =new XMLHttpRequest();
//Now this creates a request object, remember the keyword request,new and XMLHttpRequest.

//the request object is built in the js engine and it comes with some methods that we can use on it,such as the .open method
//the open method takes a number of arguements, the first being a string which is the type of htttp request method we want to use, eg GET,PUT,POST,DELETE
//THE second arguement is the api endpoint we want to use

//However at the moment we do not know the status of our request, whether it has encountered a problem or its successful, we can solve for this using the readystatechange eventlistener that is normally attached to our request object

/* request.addEventListener('readystatechange', ()=>{
    console.log(request, request.readyState); */
    //.readystate will trigger the console to print out the state of our request,normally there are 4 types of states.1,2,3,4.
//});

//console will print out 4 states of our request, lets head to the mdn developer docs and see whats this states mean
/* 
0=UNSENT==	Client has been created. open() not called yet.
1=OPENED==open() has been called.
2=HEADERS_RECEIVED==send() has been called, and headers and status are available.
3=LOADING==Downloading; responseText holds partial data.
4=DONE==The operation is complete.
 */

//readystate 4 is the most important thing

/* request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4){
        console.log(request.responseText);//.responseText is the property containing the response data from the server, the console returns a json file
    }
});

 */


//request.open('GET', ' https://jsonplaceholder.typicode.com/todos/1');
//this is just setting up the request , to send it, we use the .send() method



//request.send();


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

/* request.addEventListener('readystatechange', ()=>{
    if(request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);//.responseText is the property containing the response data from the server, the console returns a json file
         }
         else if(request.readyState === 4){
            console.log('error making a request');
         }
});
 */
//request.open('GET', ' https://jsonplaceholder.typicode.com/todos/');
//this is just setting up the request , to send it, we use the .send() method



//request.send();




//EXAMPLE WITH A MISPELLED ENDPOINT
/* 
request.open('GET', ' https://jsonplaceholder.typicode.com/todosS/');//this is just setting up the request , to send it, we use the .send() method



request.send();
 */

//Callback Functions
//It would be nice for us to wrap the making of a request code inside one fn so that anytime we need to make a request we would jus call the fn

//Nesting a function inside of another function as an arguement is what a callback function is

//basic syntax of a callback function

function firstFunc(parameter1,callback){
    //do stuff
    callback();
}

//Example 

function one (callTwo){
    console.log('Call me first,then call step 2');
    callTwo();
};

function two (){
    console.log('Call me second');
};

one(two);//



const makeRequest = () => {
    const request1 =new XMLHttpRequest();

request1.addEventListener('readystatechange', ()=>{
    if(request1.readyState === 4 && request1.status === 200) {
            console.log(request1.responseText);
    }else if(request1.readyState === 4){
            console.log('error making a request');
         }
});

request1.open('GET', 'https://jsonplaceholder.typicode.com/todos/3');

request1.send();
};

//calling the fn to make the request
makeRequest();

 
//(passing the callback fn  as a parameter)
const makeRequest1 = (callback) => {
    const request2 =new XMLHttpRequest();

request2.addEventListener('readystatechange', ()=>{
    if(request2.readyState === 4 && request2.status === 200) {
            callback(undefined, request2.responseText);
    }else if(request2.readyState === 4){
            callback("error encounterd",undefined);
         }
});

request2.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

request2.send();
};

//passing the callback function as an arguement 
//makeRequest1(() =>{
 //   console.log('callback fired')//console returns callback fired
//});

/* The problem with this code is that the callback will still be fired even if we encounter an error,to combat this, we need to pass in two parameters into the callback function err, and data. we normally do the err first then the data second,that is convention*/

makeRequest1((err,data) =>{
    console.log('callback fired');
    //console.log(err,data);
    if(err){
        console.log(err);
    }else{
        console.log(data);
    };
})


/* to have a clear demo of async and sync nature of javascript and callback functions */
console.log(6);
console.log(7);
console.log(8);

//WORKING WITH JSON FILE

//json is a data format that we get from databases,it is a widely accepted format accepted by all programming languages, this now tasks us to convert the data to JS dat so that we can make use of it

//example of json file,which comes in key-value pairs wrapped in (double quotes""), basically string data

/* 
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
*/

//we make use of .parse() method to convert the json data into javascript objects

const makeRequest2 = (callback) => {
    const request3 =new XMLHttpRequest();

request3.addEventListener('readystatechange', ()=>{
    if(request3.readyState === 4 && request3.status === 200) {
        const data = JSON.parse(request3.responseText);
        callback(undefined, data);
    }else if(request3.readyState === 4){
            callback("error encounterd",undefined);
         }
});

request3.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

request3.send();
};

makeRequest2((err,data) =>{
    console.log('callback fired');
    //console.log(err,data);
    if(err){
        console.log(err);
    }else{
        console.log(data);
        /* 
        the console returns an array fo objects from
        {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
        }

        to 
        {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
        completed: false
        id: 1
        title: "delectus aut autem"
        userId: 1
        [[Prototype]]: Object
        */
    };
});


//CALLBACK HELL-lets say we want to make several requests to different databases and each request depands on the previous request to execute, our code sample would resemble sth this below, this is what i  call a spagetti code aka callback function


/* 
firstFunction(parameter,function(){
    //do something
    secondFunction(parameter,function(){
        //do something
        thirdFunction(parameter,function(){
            //do something
        });
    });
});

firstFunction(); */

//PROMISES

//To avoid such, we use Promises

const makeRequest3 = (callback) => {
    const request3 =new XMLHttpRequest();

request3.addEventListener('readystatechange', ()=>{
    if(request3.readyState === 4 && request3.status === 200) {
        const data = JSON.parse(request3.responseText);
        callback(undefined, data);
    }else if(request3.readyState === 4){
            callback("error encounterd",undefined);
        }
});

request3.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');

request3.send();
};

//promise eexample

const getData = () => {

    return new Promise((resolve,reject) =>{
        //fetch something
        resolve("some data");
        //reject('some error');
    })
};

getData().then((data)=>{
    console.log(data);
},(err) =>{
    console.log(err);
})

//a better way ot write promises using thanables and .catch method

getData().then((data)=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});


//Example
const makeRequest4 = (resource) => {

    return new Promise((resolve,reject)=>{
        const makeRequest4 =new XMLHttpRequest();
        makeRequest4.addEventListener('readystatechange', ()=>{
        if(makeRequest4.readyState === 4 && makeRequest4.status === 200) {
            const data = JSON.parse(makeRequest4.responseText);
            resolve(data);
        }else if(makeRequest4.readyState === 4){
                reject("error encounterd");
             }
     });

    makeRequest4.open('GET', resource);

    makeRequest4.send();
    });
};

makeRequest4('https://jsonplaceholder.typicode.com/todos/1').then((data) =>{
    console.log('promise resolved',data);
}).catch((err) =>{
    console.log("promise rejected:", err)
});


    /* CHAINING PROMISES */

    const makeRequest5 = (resource) => {

        return new Promise((resolve,reject)=>{
            const makeRequest5 =new XMLHttpRequest();
            makeRequest5.addEventListener('readystatechange', ()=>{
            if(makeRequest5.readyState === 4 && makeRequest5.status === 200) {
                const data = JSON.parse(makeRequest5.responseText);
                resolve(data);
            }else if(makeRequest5.readyState === 4){
                    reject("error encounterd");
                 }
         });
    
        makeRequest5.open('GET', resource);
    
        makeRequest5.send();
        });
    };
    
    makeRequest5('https://jsonplaceholder.typicode.com/todos/1').then((data) =>{
        console.log('promise 1 resolved',data);
return makeRequest5('https://jsonplaceholder.typicode.com/todos/2');
    }).then((data)=>{
    console.log('promise 2 resolved',data);
return makeRequest5('https://jsonplaceholder.typicode.com/todos/3');
    }).then((data) =>{
        console.log('promise 3 resolved',data);
}).catch((err) =>{
    console.log("promise rejected:", err)
    });

    /* FETCHING API */

fetch('https://jsonplaceholder.typicode.com/todoss/4').then((response)=>{
    console.log('promise 4 resolved', response)
}).catch((err)=>{
    console.log('promise rejected',err)
});

//however you will notice that this fetch api means of making request, you will notice that even if there is an error in making the request(lets say a wrong endpoint),the promise will still get resolved,however we can conduct an if check to makle sure the status code is 200 in order for a promise to get resolved
//fetch api only rejects request if only ever get a network error pr we cant get to the api, otherwise the promise will be resolved

fetch('https://jsonplaceholder.typicode.com/todos/5').then((response)=>{
    console.log('promise 5 resolved', response)
     return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log('promise rejected',err)
});

//ASYNC/AWAIT

/* Recap of fetch api 
Async/Await
Promises
Thenables
Callbacks
*/















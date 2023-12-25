// async await or promises.  examples are DB calls, network, cryptographic and file system.

// Fetch request will execute first because Node js store them in different queue which is 
// known as Micro task queue/ Fetch queue/ Priority queue.

/*

response = fetch('Something')  ===> Data (Private Fields) = global response  +   Web browser/node
                                   OnFulfilled function (promise resolve)        network request
                                   OnRejection function (promise reject)   
                                   
                                   
Data, OnFulfilled and OnRejection are the private fields you can't access them also don't able to push
values in it.

if network request get any response (404 or anything) then it will store in OnFulfilled field and
if network request didn't get any response then it will store in OnRejection field.
then these 2 function OnFulfilled and OnRejection is responsible for filling Data field.

*/
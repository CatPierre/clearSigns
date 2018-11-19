/*
SOURCES:
https://codepen.io/sandeep821/pen/JKaYZq?editors=0010
*/

//This function saves parameters into a text file
(function writeToFile(userName, password) 
{
    console.log(userName);
    console.log(password);
    if(!userName)
    {
        //throw error
        console.log("error, username cannot be empty");
        return;
    }
    if(!password)
    {
        //throw error
        console.log("error, username cannot be empty");
        return;
    }
    var filename = 'console.json'

    var newBlob = new Blob([userName, password], {type: 'text/plain'}),
        event = document.createEvent('MouseEvents'),
        element = document.createElement('a');
    if(window.navigator && window.navigator.msSaveOrOpenBlob)
    {
        window.navigator.msSaveOrOpenBlob(newBlob, filename);
    }
    else
    {
        var event = document.createEvent('MouseEvents'),
        element = document.createElement('a');

        element.download = filename;
        element.href = window.URL.createObjectURL(newBlob);
        element.dataset.downloadurl = ['text/plain', element.download, element.href].join(':');
        event.initEvent('click', true, false);
        element.dispatchEvent(event);
    }




})();

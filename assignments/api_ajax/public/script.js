console.log("hello");
var RESPONSE_DONE = 4;
var STATUS_CHECK = 200;
var xhr = new XMLHttpRequest();
function append()
{
    document.getElementById("my_ajax").innerText=xhr.responseText;
}
function ajaxbutton() {


    xhr.open("GET","/api/todos",true);
    xhr.onreadystatechange = function () {

        if(xhr.readyState == RESPONSE_DONE)
        {
            if (xhr.status == STATUS_CHECK)
            {
                append();
            }
        }
    }
    xhr.send(data=null);
}
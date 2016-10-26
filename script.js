var sendButton=document.getElementById("send");
var div=document.getElementById("response-string");

 
sendButton.onclick=function(){
  var input=document.getElementById("search-string").value;
  var languageInput=document.getElementById("language-string").value;
  div.innerHTML="";
  function dumpResponse() {
   // `this` will refer to the `XMLHTTPRequest` object that executes this function
   var responseStr=JSON.parse(this.responseText);

   var h2=document.createElement("h2");
   h2.innerHTML="We have found" + " " + responseStr.total_count+ " " + "Repositories";
   div.appendChild(h2);
   var hr=document.createElement("hr");
   div.appendChild(hr);

   var div1=document.createElement("div");
   div1.setAttribute("class","repositories");
   div.appendChild(div1);

   for(var i=0;i<responseStr.items.length;i++){

    var h3=document.createElement("h3");
    h3.innerHTML=responseStr.items[i].full_name;
    div1.appendChild(h3);

    var p=document.createElement("p");
    p.innerHTML=responseStr.items[i].description;
    div1.appendChild(p);

    var hr=document.createElement("hr");
    div1.appendChild(hr);
    
   }

   /*var div2=document.createElement("div");
   div2.setAttribute("id","languages");
   var ul=document.createElement("ul");
   var li=document.createElement("li");
   li.innerHTML="JavaScript";
   var li1=document.createElement("li");
   li1.innerHTML="Java";
   var li2=document.createElement("li");
   li2.innerHTML="HTML";
   ul.appendChild(li);
   ul.appendChild(li1);
   ul.appendChild(li2);
   div2.appendChild(ul);
   div.appendChild(div2);*/

   //Testing the responseText 
   console.log(responseStr);
   
   /*for(var i=0;i<responseStr.items.length;i++)
   {
    
    console.log(responseStr.items[i]);
   }*/

  }


 var url = 'https://api.github.com/search/repositories?q='+input+'&sort=stars&order=desc'
 var urlWithLanguage='https://api.github.com/search/repositories?q='+input+'+language:'+languageInput+'&sort=stars&order=desc'
 var request = new XMLHttpRequest();
 // Set the event handler
 request.onload = dumpResponse;
 // Initialize the request
 console.log(languageInput, typeof(languageInput), "input-field");
 if(languageInput===""){ 
  request.open('get', url,  true);
 }
 else{
  request.open('get',urlWithLanguage ,  true);
 }
 // Fire away!
 request.send();



}

function resultMessage(xhr){
  if(xhr.readyState == 4){
    if(xhr.status == 200){
      var response = JSON.parse(xhr.responseText);
        if (response.result == "success") {
          alert(response.message);
        } else {
          alert(response.message);
        }
    }
  }
}

var xhr = false;
if (window.XMLHttpRequest){
  xhr = new XMLHttpRequest();
} else if(window.ActiveXObject){
  try{
    xhr = new ActiveXObject('Msxml2.XMLHTTP');
  } catch(e){
    try{
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }catch(e){}
  }
}

if (!xhr){
  alert("Ошибка: невозможно создать");
}


function resultSuccess() {
  xhr.onreadystatechange = function (){resultMessage(xhr)};
  xhr.open('GET', "http://sordes.easy4web.ru/mail/success.json", true); //
  xhr.send();
}

function resultError() {
  xhr.onreadystatechange = function (){resultMessage(xhr)};
  xhr.open('GET', "http://sordes.easy4web.ru/mail/error.json", true); //
  xhr.send();
} 


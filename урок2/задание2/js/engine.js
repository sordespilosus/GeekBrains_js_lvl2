function Container()
{
  this.src = "";
  this.alt = "";
  this.className = "";
  this.href = "";
  this.htmlCode = "";
}

Container.prototype.render = function()
{
   return this.htmlCode;
}

function ImageWrap(my_class, my_items){
   Container.call(this);
   this.className = my_class;
   this.items = my_items;
}

Image.prototype = Object.create(Container.prototype);
Image.prototype.constructor = ImageWrap;

ImageWrap.prototype.render = function(){
  var result = "<div class='"+this.className+"'>";
  
  for(var item in this.items){
    if(this.items[item] instanceof Images){
      result += this.items[item].render();
    }
  }
  
  result += "</div>";
  
  return result;
}

function Images(my_src, my_alt, my_class, my_href){
   Container.call(this);
   this.src = my_src;
   this.alt = my_alt;
   this.className = my_class;
   this.href = my_href;
}

Images.prototype = Object.create(Container.prototype);
Images.prototype.constructor = Images;

Images.prototype.render = function(){
  return "<img src='"+this.src+"' alt='"+this.alt+"' class='"+this.className+"' href='"+ this.href +"' />";
}

var my_items;
function fullImageContent(xhr){
  my_items ={}

  if(xhr.readyState == 4){
    if(xhr.status == 200){
        var items = JSON.parse(xhr.responseText);
        
        
        for (var i=0; i< items.image_items.length;i++){
            my_items[i] = new Images(items.image_items[i].src, items.image_items[i].alt, "my_class", items.image_items[i].href);
        }
        var gallery = new ImageWrap("gal_class", my_items);
      var div = document.write(gallery.render());
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


xhr.onreadystatechange = function (){fullImageContent(xhr)};
xhr.open('GET', "http://sordes.easy4web.ru/mail/gallery.json", true); //
xhr.send();

document.write(gallery.render());
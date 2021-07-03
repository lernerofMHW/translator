// I have used libre translate api because it does not reqire api key
// and it is free to use

function myFunction() {
    // I get option value in target
    var x = document.getElementById("mySelect").selectedIndex;
    const target = document.getElementsByTagName("option")[x].value;
    // then I got text value which is typed in input box
    const text = document.querySelector("#textBox").value;
    // then with the help of above data I make full api path
    console.log(text);
    const url = "https://libretranslate.de/translate?q="+text+"&source=en&target="+target;
    // then I have created a api request with post method to the server of libre translate
    // with the help of ajax technology
    const xhr = new XMLHttpRequest();
    xhr.open("POST",url,true);
    xhr.onprogress = function(){
        document.querySelector("#contain").innerHTML = "processing please wait..";
    }
    xhr.onload = function(){
        var data = JSON.parse(this.responseText);
        document.querySelector("#contain").innerHTML = data.translatedText;
    }
    xhr.send();
    }
    
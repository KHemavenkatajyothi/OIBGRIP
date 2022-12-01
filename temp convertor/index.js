var t=document.querySelector('#container');
var ind =t.querySelector("#cel");

t.addEventListener('click',function(e)
{
    if(e.target.className=="btn"){
        var a=ind.value;
        var b=(a*1.8)+32;
        document.getElementById("result").innerHTML=b.toFixed(3);

    }
    else if(e.target.className=="btns"){
        var a=ind.value;
        var b=(a-32)/1.8;
        document.getElementById("result").innerHTML=b.toFixed(3);
    }
    
});




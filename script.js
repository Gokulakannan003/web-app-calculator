function displayvalue(val) {
    document.getElementById("display").value += val;
}

 function clearo(){
    document.getElementById("display").value ="";

 }

 function equal(){
    var a = document.getElementById("display").value;
    try{
        result = eval(a);
        document.getElementById("display").value = result;
    }
    catch{
        alert("Hello User. You give the invalid syntax ");
        clearo();
    }
 }

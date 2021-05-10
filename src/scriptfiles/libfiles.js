function addnumbers(){
    document.getElementById('p2').innerHTML = "trying to calculate";
    var a = parseInt(document.getElementById('firstnumber').value);
    var b = parseInt(document.getElementById('secondnumber').value);
    var sum = a+b;
    document.getElementById('p1').innerHTML = sum;
           } 